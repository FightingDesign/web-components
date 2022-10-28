import { RenderShadow } from '../_utils'
import type { DomTreeType } from '../_interface'

export class FCard extends RenderShadow {

  constructor () {
    super()
  }

  css (): string {
    return `
      :host {  
      }
    `
  }

  html (): DomTreeType {
    return [
      { tag: 'div', children: [{ tag: 'slot', name: 'header' }] },
      { tag: 'div', children: [{ tag: 'slot' }] }
    ] as const
  }
}
