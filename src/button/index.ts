import { buttonType } from './style'

export class FButton extends HTMLElement {
  constructor () {
    super()

    // 创建影子 dom
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })

    // 创建实际的 button 元素
    const button: HTMLButtonElement = document.createElement('button')
    button.className = 'f-button'
    // 给 button 组件添加插槽
    const slot: HTMLSlotElement = document.createElement('slot')
    button.appendChild(slot)


    const type: string = this.getAttribute('type') || 'default'
    const color: string = type === 'default' ? '#333' : '#fff'

    // 创建样式
    const style: HTMLStyleElement = document.createElement('style')

    // 为 shadow Dom 添加样式
    style.textContent = `
      .f-button {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border: none;
        outline: none;
        user-select: none;
        text-decoration: none;
        transition: 0.3s;
        height: 35px;
        line-height: 1;
        cursor: pointer;
        padding: 0 25px;
        background: ${buttonType[type]};
        white-space: nowrap;
        vertical-align: middle;
        border-radius: 3px;
        overflow: hidden;
        color: ${color};
      }
    `

    // 把样式和组件添加到影子 dom 中
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(button)
  }
}
