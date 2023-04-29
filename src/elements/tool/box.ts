import {ToolButton} from './button'

const template = document.createElement('template')
template.innerHTML = `
  <button is="tool-button" value="brush">
    <span is="tool-symbol">brush</span>
  </button>
  <!--<button is="tool-button" value="fill">
    <span is="tool-symbol">format_color_fill</span>
  </button>-->
  <button is="tool-button" value="rect">
    <span is="tool-symbol">rectangle</span>
  </button>
`
const getStyle = () => {
  const style = document.createElement('style')
  style.innerHTML = `
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

		:host {
			display: flex;
			flex-flow: row wrap;
      justify-content: center;
			row-gap: 8px;
		}

    .material-symbols-outlined {
      display: flex;
      font-variation-settings: 'FILL' 0, 'wght' 0, 'GRAD' 0, 'opsz' NaN;
    }
    
    button.tool-button {
      padding: 4px;
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      border-width: 1px;
      cursor: pointer;
    }

    button.tool-button:hover {
      background-color: #fffef890;
    }
  
    button.tool-button[aria-selected='true'] {
      background-color: #fffef8;
      border: 1px solid #929387;
    }
  
	`
  return style
}

export class ToolBox extends HTMLElement {
  static observedAttributes = ['value']

  private _value: Tool = 'rect'

  public get value() {
    return this._value
  }
  public set value(value) {
    this._value = value
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(getStyle())
    shadow.appendChild(template.content.cloneNode(true))

    const buttons = shadow.querySelectorAll('button[is="tool-button"]')
    buttons.forEach((button) => {
      if (button.value === this.value) {
        this.select(button)
      }

      button.onselect = () => {
        buttons.forEach((b) => (b.ariaSelected = 'false'))
        this.select(button)
      }
    })
  }

  select(button: ToolButton) {
    const detail = button.value
    this.value = detail
    this.dispatchEvent(new CustomEvent('select', {detail}))
    button.toggleSelected()
  }

  attributeChangedCallback(name: string, prev: string, next: Tool) {
    if (name === 'value' && next !== prev) this.value = next
  }
}
customElements.define('tool-box', ToolBox)

declare global {
  interface EventTarget {
    onselect: ((ev: CustomEvent<Tool>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'tool-box': ToolBox
  }
  interface HTMLElementEventMap {
    select: CustomEvent<Tool>
  }
}
