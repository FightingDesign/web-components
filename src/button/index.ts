import { RenderShadow } from '../_utils'
import type { RenderObjInterface } from '../_interface'

export class FButton extends RenderShadow {

  constructor () {
    super()
  }

  css (): string {
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
        background: #2d5af1;
        width: 105px;
        height: 35px;
        border-radius: 2px;
        display: inline-flex;
        color: #fff;
      }
    `
  }

  html (): RenderObjInterface {
    return {
      tag: 'slot'
    } as const
  }
}
