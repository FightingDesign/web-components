export interface DomTreeItemInterface {
  tag: string
  class?: string
  name?: string
  children?: DomTreeType | string
}

export type DomTreeType = readonly DomTreeItemInterface[]
