import { render } from './utils'
import type { RenderObjInterface } from '../_interface'

export class RenderShadow extends HTMLElement {
  constructor () {
    super()
    this.setupShadow()
  }
  /**
   * 初始化影子节点
   */
  setupShadow (): void {
    /**
     * 创建影子节点
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
     */
    const shadowRoot: ShadowRoot = this.attachShadow({ mode: 'open' })

    // https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleSheet
    const stylesheet: CSSStyleSheet = new CSSStyleSheet()

    // 渲染组件内部元素节点
    render(this.html(), shadowRoot)

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/replaceSync
     * 必须传入字符串样式，不能传入路径
     */
    stylesheet.replaceSync(this.css())

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets
    shadowRoot.adoptedStyleSheets = [stylesheet]
  }

  css (): string {
    throw new Error('必须重写父类 css 方法')
  }

  html (): RenderObjInterface {
    throw new Error('必须重写父类 html 方法')
  }
}
