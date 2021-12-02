<script>
import { render } from '@/util/render'

export default {
  inject: ['disclosureContext'],

  props: {
    transition: { type: Object, default: () => null },
    as: { type: String, default: 'div' },
  },

  render(h) {
    const data = {
      props: this.$props,
      attrs: this.$attrs,
      directives: [
        {
          name: 'show',
          value: this.disclosureContext.state.open,
        },
      ],
    }

    const slot = {
      open: this.disclosureContext.state.open,
      close: this.disclosureContext.closeDisclosure,
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
