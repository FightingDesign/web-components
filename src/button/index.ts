// import { buttonType, buttonSize } from './style'
import type { ButtonType, ButtonSizeType } from './interface'

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

    const attrType: ButtonType = (this.getAttribute('type') || 'default') as ButtonType
    const attrSize: ButtonSizeType = (this.getAttribute('size') || 'middle') as ButtonSizeType
    const attrDisabled: string | null = this.getAttribute('disabled')

    const classList: string[] = [`f-button__${attrType}`, `f-button__${attrSize}`]

    if (attrDisabled) {
      classList.push('f-button__disabled')
    }

    button.classList.add(...classList)

    // 创建样式
    const style: HTMLStyleElement = document.createElement('style')

    style.textContent = `
    .f-button{position:relative;display:inline-flex;justify-content:center;align-items:center;font-size:var(--f-button-font-size, 14px);border:none;outline:none;user-select:none;text-decoration:none;height:35px;transition:.3s;line-height:1;cursor:pointer;padding:0 25px;background:#f0f0f0;white-space:nowrap;vertical-align:middle;border-radius:2px;overflow:hidden;box-shadow:var(--f-button-box-shadow);color:var(--f-button-font-color, #fff)}.f-button.f-button__default{background:#f0f0f0;color:#333}.f-button.f-button__default:hover{background:#e8e8e8}.f-button.f-button__default:active{background:#d7d7d7}.f-button.f-button__default.f-button__disabled:hover{background:#f0f0f0;color:#333}.f-button.f-button__default.f-button__simple{color:#333;background:#f8f8f8}.f-button.f-button__default.f-button__simple:hover{background:#f0f0f0}.f-button.f-button__default.f-button__simple:active{background:#e1e1e1}.f-button.f-button__default.f-button__simple.f-button__disabled:hover{color:#333;background:#f8f8f8}.f-button.f-button__default.f-button__text{background:none;color:#333}.f-button.f-button__default.f-button__text:hover{background:#f0f0f0}.f-button.f-button__default.f-button__text:active{background:#e3e3e3}.f-button.f-button__default.f-button__text.f-button__disabled:hover{background:#fff;color:#333;border:1px solid #333}.f-button.f-button__primary{background:#2d5af1;color:#fff}.f-button.f-button__primary:hover{background:#5d80f4}.f-button.f-button__primary:active{background:#0f3edc}.f-button.f-button__primary.f-button__disabled:hover{background:#2d5af1;color:#fff}.f-button.f-button__primary.f-button__simple{color:#2d5af1;background:#dee5fd}.f-button.f-button__primary.f-button__simple:hover{background:#ecf0fe}.f-button.f-button__primary.f-button__simple:active{background:#d0dafc}.f-button.f-button__primary.f-button__simple.f-button__disabled:hover{color:#2d5af1;background:#dee5fd}.f-button.f-button__primary.f-button__text{background:none;color:#2d5af1}.f-button.f-button__primary.f-button__text:hover{background:#f0f0f0}.f-button.f-button__primary.f-button__text:active{background:#e3e3e3}.f-button.f-button__primary.f-button__text.f-button__disabled:hover{background:#fff;color:#2d5af1;border:1px solid #2d5af1}.f-button.f-button__success{background:#52b35e;color:#fff}.f-button.f-button__success:hover{background:#75c37f}.f-button.f-button__success:active{background:#40924a}.f-button.f-button__success.f-button__disabled:hover{background:#52b35e;color:#fff}.f-button.f-button__success.f-button__simple{color:#52b35e;background:#e7f4e8}.f-button.f-button__success.f-button__simple:hover{background:#f1f9f2}.f-button.f-button__success.f-button__simple:active{background:#dcf0df}.f-button.f-button__success.f-button__simple.f-button__disabled:hover{color:#52b35e;background:#e7f4e8}.f-button.f-button__success.f-button__text{background:none;color:#52b35e}.f-button.f-button__success.f-button__text:hover{background:#f0f0f0}.f-button.f-button__success.f-button__text:active{background:#e3e3e3}.f-button.f-button__success.f-button__text.f-button__disabled:hover{background:#fff;color:#52b35e;border:1px solid #52b35e}.f-button.f-button__danger{background:#ff0200;color:#fff}.f-button.f-button__danger:hover{background:#ff5857}.f-button.f-button__danger:active{background:#cc0200}.f-button.f-button__danger.f-button__disabled:hover{background:#ff0200;color:#fff}.f-button.f-button__danger.f-button__simple{color:#ff0200;background:#ffd7d6}.f-button.f-button__danger.f-button__simple:hover{background:#ffe6e6}.f-button.f-button__danger.f-button__simple:active{background:#ffc7c7}.f-button.f-button__danger.f-button__simple.f-button__disabled:hover{color:#ff0200;background:#ffd7d6}.f-button.f-button__danger.f-button__text{background:none;color:#ff0200}.f-button.f-button__danger.f-button__text:hover{background:#f0f0f0}.f-button.f-button__danger.f-button__text:active{background:#e3e3e3}.f-button.f-button__danger.f-button__text.f-button__disabled:hover{background:#fff;color:#ff0200;border:1px solid #ff0200}.f-button.f-button__warning{background:#fcc202;color:#fff}.f-button.f-button__warning:hover{background:#fed348}.f-button.f-button__warning:active{background:#c99b02}.f-button.f-button__warning.f-button__disabled:hover{background:#fcc202;color:#fff}.f-button.f-button__warning.f-button__simple{color:#fcc202;background:#fff5d6}.f-button.f-button__warning.f-button__simple:hover{background:#fff9e5}.f-button.f-button__warning.f-button__simple:active{background:#fff2c6}.f-button.f-button__warning.f-button__simple.f-button__disabled:hover{color:#fcc202;background:#fff5d6}.f-button.f-button__warning.f-button__text{background:none;color:#fcc202}.f-button.f-button__warning.f-button__text:hover{background:#f0f0f0}.f-button.f-button__warning.f-button__text:active{background:#e3e3e3}.f-button.f-button__warning.f-button__text.f-button__disabled:hover{background:#fff;color:#fcc202;border:1px solid #fcc202}.f-button.f-button__large{height:40px;padding:0 30px;line-height:40px;font-size:var(--f-button-font-size, 15px)}.f-button.f-button__large.f-button__circle{height:40px;width:40px;line-height:1;padding:0;border-radius:50%}.f-button.f-button__middle{height:35px;padding:0 25px;line-height:35px;font-size:var(--f-button-font-size, 14px)}.f-button.f-button__middle.f-button__circle{height:35px;width:35px;line-height:1;padding:0;border-radius:50%}.f-button.f-button__small{height:30px;padding:0 20px;line-height:30px;font-size:var(--f-button-font-size, 13px)}.f-button.f-button__small.f-button__circle{height:30px;width:30px;line-height:1;padding:0;border-radius:50%}.f-button.f-button__mini{height:25px;padding:0 15px;line-height:25px;font-size:var(--f-button-font-size, 12px)}.f-button.f-button__mini.f-button__circle{height:25px;width:25px;line-height:1;padding:0;border-radius:50%}.f-button.f-button__round{border-radius:30px}.f-button.f-button__block{display:block;width:100%}.f-button.f-button__bold{font-weight:700}.f-button.f-button__disabled{opacity:.5;cursor:not-allowed}.f-button__before-icon{margin-right:5px}.f-button__loading-animation{animation:f-button-loading-animation 1s linear infinite;-webkit-animation:f-button-loading-animation 1s linear infinite}@keyframes f-button-loading-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.f-button__ripples{width:2px;height:2px;position:absolute;transform:translate(-50%,-50%);pointer-events:none;border-radius:50%;animation:f-button-ripples .7s linear;opacity:.5;background:#fff}@keyframes f-button-ripples{0%{width:2px;height:2px;opacity:.5}to{width:500px;height:500px;opacity:0}}.f-button.f-button__color,.f-button.f-button__color.f-button-disabled:hover{background:var(--f-button-default-color)}.f-button.f-button__color:hover{background:var(--f-button-hover-color)}.f-button.f-button__color:active{background:var(--f-button-active-color)}
    `

    // 为 shadow Dom 添加样式
    // style.textContent = `
    //   .f-button {
    //     position: relative;
    //     display: inline-flex;
    //     justify-content: center;
    //     align-items: center;
    //     font-size: ${buttonSize[attrSize].fontSize};
    //     border: none;
    //     outline: none;
    //     user-select: none;
    //     text-decoration: none;
    //     transition: 0.3s;
    //     height: ${buttonSize[attrSize].height};
    //     line-height: 1;
    //     cursor: pointer;
    //     padding: 0 ${buttonSize[attrSize].padding};
    //     background: ${buttonType[attrType]};
    //     white-space: nowrap;
    //     vertical-align: middle;
    //     border-radius: 3px;
    //     overflow: hidden;
    //     color: ${attrColor || attrType === 'default' ? '#333' : '#fff'};
    //   }

    //   .f-button:hover {

    //   }
    // `

    // 把样式和组件添加到影子 dom 中
    shadowRoot.appendChild(style)
    shadowRoot.appendChild(button)
  }
}
