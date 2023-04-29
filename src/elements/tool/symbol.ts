export class ToolSymbol extends HTMLSpanElement {
  connectedCallback() {
    this.classList.add('material-symbols-outlined')
  }
}
customElements.define('tool-symbol', ToolSymbol, {extends: 'span'})
