<script>
import { render } from '@/util/render'

export default {
  provide() {
    return {
      disclosureContext: {
        state: this.state,
        closeDisclosure: this.closeDisclosure,
        toggleDisclosure: this.toggleDisclosure,
      },
    }
  },

  props: {
    as: { type: String, default: 'div' },
    defaultOpen: { type: Boolean, default: false },
  },

  data() {
    return {
      state: {
        open: false,
      },
    }
  },

  mounted() {
    this.state.open = this.defaultOpen
  },

  methods: {
    toggleDisclosure() {
      this.state.open = !this.state.open
    },

    closeDisclosure() {
      this.state.open = false
    },
  },

  render(h) {
    const data = {
      props: this.$props,
      attrs: this.$attrs,
    }

    const slot = {
      open: this.state.open,
      close: this.closeDisclosure,
    }

    return render({
      component: this,
      data,
      slot,
      _h: h,
    })
  },
}
</script>
