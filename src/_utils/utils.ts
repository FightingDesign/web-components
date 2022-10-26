import type { RenderObjInterface } from '../_interface'

/**
 * 渲染 shadow dom 的树形结构标签
 * @param obj 虚拟 dom
 * @param node 根元素
 */
export const render = (obj: RenderObjInterface, node: ShadowRoot | HTMLElement): void => {
  const el: HTMLElement = document.createElement(obj.tag)

  if (obj.class) {
    el.className = obj.class
  }

  if (typeof obj.children === 'string') {
    const text: Text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else if (obj.children) {
    obj.children.forEach((item) => render(item, el))
  }

  node.appendChild(el)
}
