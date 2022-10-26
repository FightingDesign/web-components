export class RenderShadow extends HTMLElement {
  constructor() {
    super()
    this.setupShadow()
  }

  setupShadow() {
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })
    const sheet: CSSStyleSheet = new CSSStyleSheet()

    shadowRoot.innerHTML = this.html()
    sheet.replaceSync(this.css())
    shadowRoot.adoptedStyleSheets = [sheet]
  }

  css(): string {
    throw new Error('必须重写父类 css 方法')
  }

  html(): string {
    throw new Error('必须重写父类 html 方法')
  }
}