import { render } from './utils'
import type { RenderObjInterface } from '../_interface'

export class RenderShadow extends HTMLElement {
  constructor () {
    super()
    this.setupShadow()
  }

  setupShadow (): void {
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })
    const sheet: CSSStyleSheet = new CSSStyleSheet()
    const node: string | RenderObjInterface = this.html()

    if (typeof node === 'string') {
      shadowRoot.innerHTML = this.html() as string
    } else {
      render(this.html() as RenderObjInterface, shadowRoot)
    }

    sheet.replaceSync(this.css())
    shadowRoot.adoptedStyleSheets = [sheet]
  }

  css (): string {
    throw new Error('必须重写父类 css 方法')
  }

  html (): RenderObjInterface | string {
    throw new Error('必须重写父类 html 方法')
  }
}
