<template>
  <component :is="as" class="text-black dark:text-gray-200 underline font-bold" v-bind="$attrs" v-on="$listeners">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: { type: String, default: 'a' }
  }
}
</script>
