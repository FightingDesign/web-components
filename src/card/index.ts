import { RenderShadow } from '../_utils'
import type { DomTreeType } from '../_interface'

export class FCard extends RenderShadow {
  constructor () {
    super()
  }

  css (): string {
    return `
    :host {  
      display: block;
      border: solid 1px #e5e5e5;
      transition: 0.3s;
      background: #fff;
    }
    .header {
      padding: 16px 20px;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
    .body {
      padding: 20px;
      box-sizing: border-box;
    }
    :host([shadow="always"]) {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
    `
  }

  html (): DomTreeType {
    return [
      { tag: 'div', class: 'header', children: [{ tag: 'slot', name: 'header' }] },
      { tag: 'div', class: 'body', children: [{ tag: 'slot' }] }
    ] as const
  }
}
