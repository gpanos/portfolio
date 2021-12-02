<template>
  <button type="button" class="inline-flex items-center justify-center text-gray-400 hover:text-gray-500" @click="toggle">
    <span class="sr-only">Toggle color mode</span>
    <IconsSun v-if="! isDark" class="w-6 h-6 block" />
    <IconsMoon v-else class="w-6 h-6 block" />
  </button>
</template>

<script>
export default {
  computed: {
    isDark () {
      return this.$colorMode.preference === 'dark'
    }
  },

  methods: {
    toggle () {
      this.$colorMode.preference = this.isDark ? 'light' : 'dark'
    }
  }
}
</script>
