<template>
  <div class="rounded-lg bg-white p-6 shadow mb-8">
    <h1 class="text-2xl font-bold text-gray-900">
      <slot name="title" />
    </h1>
    <p class="text-sm font-medium text-gray-500">
      <slot name="description" />
    </p>
  </div>
</template>
<script>
export default {}
</script>
