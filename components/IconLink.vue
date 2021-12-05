<template>
  <component :is="as" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150" v-bind="$attrs" v-on="$listeners">
    <span class="sr-only">{{ label }}</span>
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: { type: String, default: 'a' },
    label: { type: String, required: true }
  }
}
</script>
