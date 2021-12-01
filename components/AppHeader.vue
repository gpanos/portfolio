<template>
  <header>
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center flex-shrink-0">
            <Avatar />
          </div>
          <div class="flex items-center">
            <NuxtLink to="/" class="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-3 text-sm font-medium">
              About
            </NuxtLink>
            <NuxtLink to="/resume" class="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-3 text-sm font-medium">
              Resume
            </NuxtLink>
            <NuxtLink to="/open-source" class="border-transparent text-gray-500 hover:text-gray-700 inline-flex items-center px-3 text-sm font-medium">
              Open Source
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {}
</script>
