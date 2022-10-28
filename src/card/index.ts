import { RenderShadow } from '../_utils'
import type { RenderObjInterface } from '../_interface'

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

  html (): RenderObjInterface {
    return {
      tag: 'div'
    } as const
  }
}
