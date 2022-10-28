import { FButton } from './button'
import { FCard } from './card'

const install = (): void => {
  customElements.define('f-button', FButton)
  customElements.define('f-card', FCard)
}

export default install
