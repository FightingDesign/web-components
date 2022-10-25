export const defineProps = (node) => {
  const props = {}

  Object.values(node.attributes).forEach(item => {
    props[item.name] = item.value
  })

  return props
}
