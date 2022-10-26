// import { buttonType, buttonSize } from './style'
// import { ChangeColor, defineProps } from '../_utils'
// import { Props } from './props'
// import type { ButtonType, ButtonSizeType } from './interface'

export class FButton extends HTMLElement {
  constructor() {
    super()
    this.setupShadow()
  }
  /**
   * 为组件定义shadowDOM
   */
  private setupShadow() {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
    const shadowRoot = this.attachShadow({ mode: 'open' })

    // https://github.com/mdn/web-components-examples/blob/main/host-selectors/main.js
    // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/nonce

    // 采用样式表
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets

    const sheet = new CSSStyleSheet()

    shadowRoot.innerHTML = `
    <button class="f-button">
    <slot></slot>
  </button>
    `
    const style = `
      :host {  
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        user-select: none;
        text-decoration: none;
        transition: 0.3s;
        line-height: 1;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        vertical-align: middle;
        background: blue;
        height: 35px;
        border-radius: 2px;
        display: inline-flex;
        color: #fff;
       }
       .f-button {
        background: transparent;
        height: inherit;
        line-height: 1;
        width: inherit;
        border: inherit;
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        border-radius: inherit;
        cursor: inherit;
        font-weight: inherit;
        font-size: inherit;
        outline: none;
      }

    `

    sheet.replaceSync(style);
    shadowRoot.adoptedStyleSheets = [sheet];

  }

  connectedCallback() {
    console.log('首次调用')
  }

  attributeChangedCallback() {
    console.log('增加属性')
  }
}
