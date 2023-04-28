const template = document.createElement('template')
template.innerHTML = `
	<color-swatch-item value="black" aria-selected="true"></color-swatch-item>
	<color-swatch-item value="white" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="red" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="yellow" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="green" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="cyan" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="blue" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="hotpink" aria-selected="false"></color-swatch-item>
`
const getStyle = (color: string | null = '#ffffff') => {
  const style = document.createElement('style')
  style.innerHTML = `
		:host {
			--color: ${color};
			display: flex;
			flex-flow: row wrap;
			column-gap: 4px;
		}
	`
  return style
}

export class ColorSwatch extends HTMLElement {
  static observedAttributes = ['value']

  private _value = 'black'

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

    const items = shadow.querySelectorAll('color-swatch-item')
    items.forEach((item) => {
      item.onchange = ({detail}) => {
        this.change(detail)
        this.unSelectItems()
        item.toggleSelected()
      }
    })
  }

  change(detail: string) {
    this.value = detail
    this.dispatchEvent(new CustomEvent('change', {detail}))
  }

  unSelectItems() {
    this.shadowRoot?.querySelectorAll('color-swatch-item').forEach((item) => {
      item.ariaSelected = 'false'
    })
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    if (name === 'value' && next !== prev) this.value = next
  }
}
customElements.define('color-swatch', ColorSwatch)

declare global {
  interface EventTarget {
    onchange: ((ev: CustomEvent<string>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'color-swatch': ColorSwatch
  }
  interface HTMLElementEventMap {
    change: CustomEvent<string>
  }
}
