<script>
import { render } from '@/util/render'

export default {
  inject: ['disclosureContext'],

  props: {
    as: { type: [Object, String], default: 'button' },
    disabled: { type: [Boolean], default: false }
  },

  methods: {
    handleClick (e) {
      e.preventDefault()
      if (this.disabled) { return }
      this.disclosureContext.toggleDisclosure()
    }
  },

  render (h) {
    const attrs = {
      ...this.$attrs,
      ...{
        'aria-expanded': this.disabled
          ? undefined
          : this.disclosureContext.state.open
      }
    }

    const data = {
      props: this.$props,
      attrs,
      on: {
        click: this.handleClick
      }
    }

    const slot = {
      open: this.disclosureContext.state.open,
      close: this.disclosureContext.closeDisclosure
    }

    return render({
      component: this,
      data,
      slot,
      _h: h
    })
  }
}
</script>
