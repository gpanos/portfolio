<template>
  <div class="fixed z-50 inset-0 w-screen h-screen flex justify-center items-center bg-white dark:bg-black">
    <div class="relative w-screen h-screen">
      <div
        class="flex w-screen h-screen flex-col items-center justify-center text-white"
      >
        <h1 class="text-black dark:text-white z-50 text-xl sm:text-6xl mb-6">
          {{ error.statusCode }} - Ooops... are you lost?
        </h1>
        <NuxtLink to="/" class="text-black text-lg uppercase inline-flex items-center px-6 py-3 border border-transparent font-medium rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Get me home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
