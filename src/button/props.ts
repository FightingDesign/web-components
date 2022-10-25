import { ButtonType, ButtonSizeType } from "./interface"

export const Props = {
  bold: {
    default: false
  },
  circle: {
    default: false
  },
  round: {
    default: false
  },
  size: {
    type: 'string',
    default: 'middle',
    validator: (val: ButtonSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  },
  block: {
    default: false
  },
  href: {
    type: String,
    default: ''
  },
  loading: {
    default: false
  },
  disabled: {
    default: false
  },
  type: {
    type: String,
    default: 'default',
    validator: (val: ButtonType): boolean => {
      return (
        ['default', 'primary', 'success', 'danger', 'warning'] as const
      ).includes(val)
    }
  },
  autofocus: {
    default: false
  },
  name: {
    type: String,
    default: 'f-button'
  },
  shadow: {
    type: String,
    default: ''
  },
  text: {
    default: false
  },
  simple: {
    default: false
  },
  ripples: {
    default: false
  },
  ripplesColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
} as const