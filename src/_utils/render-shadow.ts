import { render } from './utils'
import type { DomTreeType } from '../_interface'

export class RenderShadow extends HTMLElement {
  props: Record<string, string> = {}
  /**
  * 创建影子节点
  * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
  */
  shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })
  constructor () {
    super()
    this.initial()
    this.setupShadow()
  }
  initial (): void {
    const mutationObserver = new MutationObserver(() => this.setProps())
    mutationObserver.observe(this, {
      attributes: true
    })
  }

  /**
   * 初始化影子节点
   */
  setupShadow (): void {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleSheet
    // 渲染组件内部元素节点
    render(this.html(), this.shadowRoot)

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replaceSync
     * 必须传入字符串样式，不能传入路径
     */
    this.renderCss()
    // this.shadowRoot.host.setAttribute('class', ` f-button`)

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
  }

  renderCss (): void {
    const stylesheet: CSSStyleSheet = new CSSStyleSheet()
    stylesheet.replaceSync(this.css())
    this.shadowRoot.adoptedStyleSheets = [stylesheet]
  }
  setProps (): void {
    this.props = [...this.attributes].reduce((result, item) => {
      const { name, value } = item
      result[name] = value
      return result
    }, {} as Record<string, string>)
    this.renderCss()
  }

  css (): string {
    throw new Error('必须重写父类 css 方法')
  }

  html (): DomTreeType {
    throw new Error('必须重写父类 html 方法')
  }
}
