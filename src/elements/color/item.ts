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
			width: 24px;
			height: 24px;
			background: #000000;
			box-shadow: inset -2px -2px 0px rgba(255, 255, 255, 0.33), inset 2px 2px 0px rgba(255, 255, 255, 0.33);
			cursor: pointer;
		}
		:host > div {
			width: 22px;
			height: 22px;
			box-sizing: border-box;
			background: var(--color);
			
		}
		:host-context([aria-selected="true"]) > div {
			/* Color/Border/Inner */
			border-width: 2px 0px 0px 2px;
			border-style: solid;
			border-color: rgba(17, 17, 17, 0.66);
		}
	`
  return style
}

export class ColorItem extends HTMLElement {
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
customElements.define('color-item', ColorItem)

declare global {
  interface EventTarget {
    onchange: ((ev: CustomEvent<string>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'color-item': ColorItem
  }
  interface HTMLElementEventMap {
    change: CustomEvent<string>
  }
}
