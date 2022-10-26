import { RenderShadow } from '../_utils/render-shadow'

export class FButton extends RenderShadow {

  constructor() {
    super()
  }

  css(): string {
    return `
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
  }

  html(): string {
    return `
    <button class="f-button">
      <slot></slot>
    </button>
    `
  }
}
