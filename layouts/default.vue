<template>
  <div class="min-h-screen">
    <AppHeader />

    <main class="max-w-7xl mx-auto w-full mt-8 mb-8 relative">
      <Nuxt />
    </main>

    <AppFooter />
  </div>
</template>

<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'antialiased text-gray-700 dark:text-gray-200 bg-white dark:bg-black font-mono'
      }
    }
  }
}
</script>
