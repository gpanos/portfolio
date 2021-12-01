<template>
  <section>
    <h2 v-if="$scopedSlots.title" class="text-2xl font-bold text-gray-900 mb-4">
      <slot name="title" />
    </h2>
    <div class="space-y-2">
      <slot />
    </div>
  </section>
</template>
<script>
export default {}
</script>
