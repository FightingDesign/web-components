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

    render(this.html(), shadowRoot)
    sheet.replaceSync(this.css())
    shadowRoot.adoptedStyleSheets = [sheet]
  }

  css (): string {
    throw new Error('必须重写父类 css 方法')
  }

  html (): RenderObjInterface {
    throw new Error('必须重写父类 html 方法')
  }
}
