import { buttonType } from './style'

export class FButton extends HTMLElement {
  constructor() {
    super()

    // 获取模板内容
    const template: HTMLTemplateElement = document.getElementById('f-button__template') as HTMLTemplateElement
    const templateContent: DocumentFragment = template.content

    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })
    const button: HTMLButtonElement = document.createElement('button')

    button.appendChild(templateContent.cloneNode(true))
    button.setAttribute('class', 'f-button')

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
        height: $middle;
        transition: 0.3s;
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
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(button)
  }
}
