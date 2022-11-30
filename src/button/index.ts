import { RenderShadow } from '../_utils'
import type { DomTreeType } from '../_interface'
import { bgColors, color } from './color'
export class FButton extends RenderShadow {
  props: Record<string, string> = {}
  constructor () {
    super()
  }

  css (): string {
    const { type = 'default' } = this.props
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
        background:  ${bgColors[type]};
        width: 105px;
        height: 35px;
        border-radius: 4px;
        padding:8px 15px;
        display: inline - flex;
        color: ${color[type]};
      }
`
  }

  html (): DomTreeType {
    return [
      {
        tag: 'slot'
      }
    ] as const
  }

}
