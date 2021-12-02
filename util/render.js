export function render ({ component, data, slot, _h }) {
  const children = component.$scopedSlots.default?.(slot)
  const transition = data.props?.transition
  const as = data.props?.as

  if (transition) {
    data.props = _.omit(data.props, ['transition'])

    return _h(
      'transition',
      {
        props: transition
      },
      [render({ component, data, slot, _h })]
    )
  }

  if (as === 'template') {
    data.props = _.omit(data.props, ['as'])
    const [firstChild, ...other] = children ?? []

    if (other.length > 0) {
      throw new Error(
        'Render a single element as the child so that we can forward the props onto that element.'
      )
    }

    return cloneVNode(_h, firstChild, data)
  }

  return _h(as, data, children)
}

// https://github.com/vuejs/vue/issues/7347
function cloneVNode (_h, vnode, passThroughData) {
  const isComponent = !!vnode.componentOptions

  const tag = isComponent ? vnode.componentOptions.Ctor : vnode.tag

  const data = isComponent
    ? cloneComponentData(vnode)
    : Object.assign({}, vnode.data)

  const clone = _h(tag, _.merge(data, passThroughData), vnode.children)

  return clone
}

function cloneComponentData (vnode) {
  const data = Object.assign({}, vnode.data, { hooks: undefined })
  data.props = vnode.componentOptions.propsData
  data.on = Object.assign(data.on || {}, vnode.componentOptions.listeners)
  return data
}
