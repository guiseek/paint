const template = document.createElement('template')
template.innerHTML = `
	<div></div>
`
const getStyle = (color: string | null = '#ffffff') => {
  const style = document.createElement('style')
  style.innerHTML = `
		:host {
			--color: ${color};
			display: block;
			position: relative;
			width: 16px;
			height: 16px;
			background: #000000;
			box-shadow: inset -1px -1px 0px rgba(255, 255, 255, 0.33), inset 1px 1px 0px rgba(255, 255, 255, 0.33);
			cursor: pointer;
		}
		:host > div {
			width: 14px;
			height: 14px;
			box-sizing: border-box;
			background: var(--color);
			
		}
		:host-context([aria-selected="true"]) > div {
			/* Color/Border/Inner */
			border-width: 1px 0px 0px 1px;
			border-style: solid;
			border-color: #111111;
		}
	`
  return style
}

export class ColorSwatchItem extends HTMLElement {
  static observedAttributes = ['value']

  private _value = '#ffffff'

  public get value() {
    return this._value
  }
  public set value(value) {
    this.style.setProperty('--color', value)
    this._value = value
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(getStyle(this.value))
    shadow.appendChild(template.content.cloneNode(true))

    this.onclick = () => this.change()
  }

  change() {
    this.dispatchEvent(new CustomEvent('change', {detail: this.value}))
  }

  toggleSelected() {
    this.ariaSelected = this.ariaSelected === 'true' ? 'false' : 'true'
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'value' && next !== prev) this.value = next
  }
}
customElements.define('color-swatch-item', ColorSwatchItem)

declare global {
  interface EventTarget {
    onchange: ((ev: CustomEvent<string>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'color-swatch-item': ColorSwatchItem
  }
  interface HTMLElementEventMap {
    change: CustomEvent<string>
  }
}
