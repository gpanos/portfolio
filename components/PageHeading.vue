<template>
  <div class="rounded-lg bg-white dark:bg-gray-900 p-6 shadow mb-8 border border-transparent dark:border-gray-700">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
      <slot name="title" />
    </h1>
    <p class="text-sm font-medium text-gray-500 dark:text-gray-200">
      <slot name="description" />
    </p>
  </div>
</template>
<script>
export default {}
</script>
