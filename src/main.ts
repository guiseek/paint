import {PaintCanvas} from './elements'
import './elements'
import './style.scss'

const main = document.querySelector('main')
const aside = document.querySelector('aside')
const footer = document.querySelector('footer')

customElements.whenDefined('paint-canvas').then((el) => {
  const paintCanvas = new el() as PaintCanvas

  if (main) {
    const toolBox = document.createElement('tool-box')
    const colorSwatch = document.createElement('color-swatch')

    toolBox.onselect = ({detail}) => {
      paintCanvas.select(detail)
    }

    paintCanvas.onload = () => {
      if (aside && footer) {
        aside.appendChild(toolBox)
        footer.appendChild(colorSwatch)

        colorSwatch.onchange = ({detail}) => {
          paintCanvas.setConfig({color: detail})
        }
      }
    }

    main.appendChild(paintCanvas)
  }
})
