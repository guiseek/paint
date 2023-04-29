export class ToolButton extends HTMLButtonElement {
  static observedAttributes = ['value']

  value!: Tool

  connectedCallback() {
    this.classList.add('tool-button')

    this.onclick = () => this.select()
  }

  select() {
    this.dispatchEvent(new CustomEvent('select', {detail: this.value}))
  }

  toggleSelected() {
    this.ariaSelected = this.ariaSelected === 'true' ? 'false' : 'true'
  }

  attributeChangedCallback(name: string, prev: string, next: Tool) {
    if (name === 'value' && next !== prev) this.value = next
  }
}
customElements.define('tool-button', ToolButton, {extends: 'button'})

declare global {
  interface EventTarget {
    onselect: ((ev: CustomEvent<Tool>) => any) | null
  }
  interface HTMLElementTagNameMap {
    'button[is="tool-button"]': ToolButton
  }
  interface HTMLElementEventMap {
    select: CustomEvent<Tool>
  }
}
