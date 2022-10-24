import { buttonType, buttonSize } from './style'
import { ChangeColor } from '../_utils'
import type { ButtonType, ButtonSizeType } from './interface'

export class FButton extends HTMLElement {
  constructor() {
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

    const attrType: ButtonType = (this.getAttribute('type') || 'default') as ButtonType
    const attrSize: ButtonSizeType = (this.getAttribute('size') || 'middle') as ButtonSizeType
    const attrDisabled: string | null = this.getAttribute('disabled')
    const attrColor: string | null = this.getAttribute('color')
    const attrBold: string | null = this.getAttribute('bold')
    const attrRound: string | null = this.getAttribute('round')
    const attrBlock: string | null = this.getAttribute('block')

    const changeColor: ChangeColor = new ChangeColor(buttonType[attrType])

    // 创建样式
    const style: HTMLStyleElement = document.createElement('style')

    // 为 shadow Dom 添加样式
    style.textContent = `
      .f-button {
        position: relative;
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
        background: ${buttonType[attrType]};
        height: ${buttonSize[attrSize].height};
        padding: 0 ${buttonSize[attrSize].padding};
        font-size: ${buttonSize[attrSize].fontSize};
        font-weight: ${attrBold ? 'bold' : 'normal'};
        border-radius: ${attrRound ? '30px' : '2px'};
        display: ${attrBlock ? 'block' : 'inline-flex'};
        color: ${attrColor || attrType === 'default' ? '#333' : '#fff'};
      }

      .f-button:hover {
        background: ${changeColor.getLightColor(0.3)};
      }

      .f-button:active {
        background: ${changeColor.getDarkColor(0.3)};
      }
    `

    // 把样式和组件添加到影子 dom 中
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(button)
  }
}
