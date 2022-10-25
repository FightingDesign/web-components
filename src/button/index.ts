import { buttonType, buttonSize } from './style'
import { ChangeColor, defineProps } from '../_utils'
import { Props } from './props'
import type { ButtonType, ButtonSizeType } from './interface'

export class FButton extends HTMLElement {
  constructor() {
    super()

    console.log(Props)
    const prop = defineProps(this)

    // 创建影子 dom
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })

    // 创建实际的 button 元素
    const button: HTMLButtonElement = document.createElement('button')
    button.className = 'f-button'
    // 给 button 组件添加插槽
    const slot: HTMLSlotElement = document.createElement('slot')
    button.appendChild(slot)

    console.log(prop)

    const changeColor: ChangeColor = new ChangeColor(buttonType[prop.type])

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
        background: ${buttonType[prop.type]};
        height: ${buttonSize[prop.size || 'middle'].height};
        padding: 0 ${buttonSize[prop.size || 'middle'].padding};
        font-size: ${buttonSize[prop.size || 'middle'].fontSize};
        font-weight: ${prop.bold ? 'bold' : 'normal'};
        border-radius: ${prop.round ? '30px' : '2px'};
        display: ${prop.block ? 'block' : 'inline-flex'};
        color: ${prop.olor || prop.ype === 'default' ? '#333' : '#fff'};
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
