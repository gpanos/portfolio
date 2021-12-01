<template>
  <button type="button" class="text-gray-400 hover:text-gray-500" @click="print">
    <span class="sr-only">Print resume</span>
    <IconsPrint class="h-6 w-6" />
  </button>
</template>
<script>
export default {
  methods: {
    print () {
      window.print()
    }
  }
}
</script>
