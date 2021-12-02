<template>
  <article class="rounded-lg bg-white dark:bg-gray-900 p-6 shadow border border-transparent dark:border-gray-700">
    <h2 v-if="$scopedSlots.title" class="text-xl font-bold text-gray-900 dark:text-white mb-4">
      <slot name="title" />
    </h2>
    <div class="space-y-2">
      <slot />
    </div>
  </article>
</template>
<script>
export default {}
</script>
