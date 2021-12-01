<template>
  <article>
    <h2 v-if="$scopedSlots.title" class="text-xl font-bold text-gray-900 mb-4">
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
