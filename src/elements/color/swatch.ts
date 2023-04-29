const template = document.createElement('template')
template.innerHTML = `
	<color-item value="black" aria-selected="true"></color-item>
	<color-item value="white" aria-selected="false"></color-item>
	<color-item value="red" aria-selected="false"></color-item>
	<color-item value="yellow" aria-selected="false"></color-item>
	<color-item value="green" aria-selected="false"></color-item>
	<color-item value="cyan" aria-selected="false"></color-item>
	<color-item value="blue" aria-selected="false"></color-item>
	<color-item value="hotpink" aria-selected="false"></color-item>
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

    const colors = shadow.querySelectorAll('color-item')
    colors.forEach((color) => {
      color.onchange = ({detail}) => {
        this.value = detail
        colors.forEach((c) => (c.ariaSelected = 'false'))
        this.dispatchEvent(new CustomEvent('change', {detail}))
        color.toggleSelected()
      }
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
