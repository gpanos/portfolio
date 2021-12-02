---
title: PHP Attributes
description: Learning through playing with PHP 8 attributes.
---

# PHP Attributes

One of the new features that come with PHP 8 are attributes also known as annotations. 

Attributes add meta data to classes, methods, parameters and more. But what does this mean?  

I struggled a lot to find good simple examples in order to understand how can I use them in my projects and at the end I decided to just go ahead and experiment with them.     

## Laravel Model Observers  

Laravel offers a simple way to listen for events on a given model using [Observers](https://laravel.com/docs/master/eloquent#observers)

First you need to create an observer class: 

```php
<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function created(User $user)
    {
        //
    }
}
```

And then you need to register it in a service provider: 

```php 
use App\Models\User;
use App\Observers\UserObserver;

public function boot()
{
    User::observe(UserObserver::class);
}
``` 

Now every time a new user is created you can take additional actions in your observer `created` method.

How about if we could register the observers directly in our models? 

It would be nice to be able to configure our model and only have to scan one file to realise what is going on.   

## Attributes to the rescue

Let's first create a custom attribute for this: 

```php 
<?php

namespace Gpanos\ObserveAttribute;

use Attribute;

#[Attribute(Attribute::TARGET_CLASS)]
class Observe
{
    public function __construct(public string $observer)
    {
    }
}
```
An attribute is a simple class annotated with the `#[Attribute]` attribute. 
We can pass a flag to specify that our attribute can only be added to classes.  
In the constructor we accept the observer class that we want to register.  

We can now use this attribute in our models

```php 
<?php

#[Observe(UserObserver::class)]
class User extends Authenticatable
{
    ...
}
```

We can finally use reflection to register the observers in a service provider. 

```php
class ObserverServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        // For the shake of simplicity we manually define our models.
        // In real life we would automatically resolve them.
        $models = [
            User::class,
        ];

        foreach ($models as $className) {
            $class = new ReflectionClass($className);

            $attributes = $class->getAttributes(Observe::class);
    
            foreach ($attributes as $attribute) {
                $observer = $attribute->newInstance()->observer;
                $className::observe($observer);
            }
        }
    }
}
```

I ended up making a small package out of my experiments you can view the source code [here](https://github.com/gpanos/laravel-observe-attribute).

To be honest I don't think I would be using it in my projects but at least now I have a better understanding of PHP 8 attributes. 





