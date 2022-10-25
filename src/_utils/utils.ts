export const defineProps = (node) => {
  const props = {}

  // console.log(node.attributes)

  Object.values(node.attributes).forEach(item => {
    props[item.name] = item.value
  })

  return props
}
