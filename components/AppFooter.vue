<template>
  <footer>
    <div class="bg-white dark:bg-black max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <IconLink label="GitHub" href="https://github.com/gpanos">
          <IconsGitHub />
        </IconLink>
        <IconLink label="Twitter" href="https://twitter.com/gpanos00">
          <IconsTwitter />
        </IconLink>
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
