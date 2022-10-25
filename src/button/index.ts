// import { buttonType, buttonSize } from './style'
// import { ChangeColor, defineProps } from '../_utils'
// import { Props } from './props'
// import type { ButtonType, ButtonSizeType } from './interface'
// import { css, CSSResultGroup, html, nothing, TemplateResult } from 'lit'

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
    shadowRoot.innerHTML = `
    <style>
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
    </style>
    <button class="f-button">
      <slot></slot>
    </button>
    `
  }

  connectedCallback() {
    console.log('首次调用')
  }

  attributeChangedCallback() {
    console.log('增加属性')
  }
}
