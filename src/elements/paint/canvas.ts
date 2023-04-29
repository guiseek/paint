import {ToolBase, ToolBrush, ToolRect} from '../tool'

export class PaintCanvas extends HTMLCanvasElement {
  #tools!: Record<Tool, ToolBase>

  #tool!: ToolBase

  connectedCallback() {
    this.classList.add('paint-canvas')

    const context = this.getContext('2d')
    if (context) {
      this.#tools = {
        brush: new ToolBrush(context),
        fill: new ToolBrush(context),
        rect: new ToolRect(context),
      }
      
      this.dispatchEvent(new CustomEvent('load'))
    }

    window.addEventListener('resize', this.#resize, false)

    this.#resize()
  }

  #resize = () => {
    this.width = window.innerWidth - 60
    this.height = window.innerHeight - 50
  }

  select(value: Tool) {
    Object.values(this.#tools).forEach((tool) => tool.unsubscribe())

    this.#tool = this.#tools[value]

    this.#tool.subscribe()
  }

  setConfig<T extends object>(value: T) {
    this.#tool.setConfig(value)
  }
}
customElements.define('paint-canvas', PaintCanvas, {extends: 'canvas'})

declare global {
  interface EventTarget {
    onselect: ((ev: CustomEvent<Tool>) => any) | null
    onload: ((ev: CustomEvent<void>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'canvas[is="paint-canvas"]': PaintCanvas
  }
  interface HTMLElementEventMap {
    select: CustomEvent<Tool>
    load: CustomEvent<void>
  }
}
