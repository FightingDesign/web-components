import type { DomTreeType, DomTreeItemInterface } from '../_interface'

/**
 * 渲染 shadow dom 的树形结构标签
 * @param obj 虚拟 dom
 * @param node 根元素
 */
export const render = (arr: DomTreeType, node: ShadowRoot | HTMLElement): void => {
  arr.forEach((item: DomTreeItemInterface) => {
    const el: HTMLElement = document.createElement(item.tag)

    if (item.class) {
      el.className = item.class
    }

    if (item.name) {
      el.setAttribute('name', item.name)
    }

    if (typeof item.children === 'string') {
      const text: Text = document.createTextNode(item.children)
      el.appendChild(text)
    } else if (item.children) {
      render(item.children, el)
    }

    node.appendChild(el)
  })
}

// export const render = (obj: RenderObjInterface, node: ShadowRoot | HTMLElement): void => {
//   const el: HTMLElement = document.createElement(obj.tag)

//   if (obj.class) {
//     el.className = obj.class
//   }

//   if (obj.name) {
//     el.setAttribute('name', obj.name)
//   }

//   if (typeof obj.children === 'string') {
//     const text: Text = document.createTextNode(obj.children)
//     el.appendChild(text)
//   } else if (obj.children) {
//     obj.children.forEach((item) => render(item, el))
//   }

//   node.appendChild(el)
// }
