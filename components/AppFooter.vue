<template>
  <footer>
    <div class="bg-white dark:bg-black max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://twitter.com/gpanos00" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <IconsGitHub class="h-6 w-6" />
        </a>
        <a href="https://github.com/gpanos" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <IconsTwitter class="h-6 w-6" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-400 dark:text-gray-200">
          &copy; {{ copyright }} Dimitris Karapanos, All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    copyright () {
      return new Date().getFullYear()
    }
  }
}
</script>
