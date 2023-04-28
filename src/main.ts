import {Paint} from './core'
import './elements'
import './style.scss'

const canvas = document.querySelector('canvas')
const colorSwatch = document.querySelector('color-swatch')

if (canvas && colorSwatch) {
  const setSize = () => {
    canvas.width = window.innerWidth - 60
    canvas.height = window.innerHeight - 50
  }

  addEventListener('resize', setSize, false)

  setSize()

  const paint = new Paint(canvas)
  paint.listen()

  colorSwatch.onchange = ({detail}) => {
    paint.setColor(detail)
  }
}
