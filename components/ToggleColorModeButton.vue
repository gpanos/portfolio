<template>
  <button type="button" class="w-6 h-6 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 transition ease-in-out duration-150" @click="toggle">
    <span class="sr-only">Toggle color mode</span>
    <client-only placeholder="...">
      <IconsSun v-if="! isDark" />
      <IconsMoon v-else />
    </client-only>
  </button>
</template>

<script>
export default {
  computed: {
    isDark () {
      return this.$colorMode.value === 'dark'
    }
  },

  methods: {
    toggle () {
      this.$colorMode.preference = this.isDark ? 'light' : 'dark'
    }
  }
}
</script>
