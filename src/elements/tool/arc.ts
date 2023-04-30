import {ToolBase} from './base'

export class ToolArc extends ToolBase<ArcConfig> {
  #center = {
    x: 0,
    y: 0,
  }
  #radius = 0

  protected config: BrushConfig = {
    color: 'black',
    stroke: 2,
  }

  subscribe() {
    const {canvas} = this.context

    canvas.addEventListener('mousedown', this.#onDown, false)
    canvas.addEventListener('mouseup', this.#onUp, false)
    canvas.addEventListener('mouseout', this.#onUp, false)

    canvas.addEventListener('touchstart', this.#onDown, false)
    canvas.addEventListener('touchend', this.#onUp, false)
    canvas.addEventListener('touchcancel', this.#onUp, false)

    canvas.addEventListener('mousemove', this.#onMove, false)
    canvas.addEventListener('touchmove', this.#onMove, false)
  }

  unsubscribe() {
    const {canvas} = this.context

    canvas.removeEventListener('mousedown', this.#onDown, false)
    canvas.removeEventListener('mouseup', this.#onUp, false)
    canvas.removeEventListener('mouseout', this.#onUp, false)

    canvas.removeEventListener('touchstart', this.#onDown, false)
    canvas.removeEventListener('touchend', this.#onUp, false)
    canvas.removeEventListener('touchcancel', this.#onUp, false)

    canvas.removeEventListener('mousemove', this.#onMove, false)
    canvas.removeEventListener('touchmove', this.#onMove, false)
  }

  #onDown = (e: MouseEvent | TouchEvent) => {
    this.drawing = true

    this.context.save()

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#center.x = clientX - this.context.canvas.offsetLeft

    this.#center.y = clientY - this.context.canvas.offsetTop
  }

  #onMove = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }

    const {canvas} = this.context

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    const mouseX = clientX - canvas.offsetLeft
    const mouseY = clientY - canvas.offsetTop

    this.#radius = Math.sqrt(
      Math.pow(mouseX - this.#center.x, 2) +
        Math.pow(mouseY - this.#center.y, 2)
    )

    this.context.clearRect(
      0,
      0,
      canvas.width,
      canvas.height,
    )

    this.context.lineWidth = this.config.stroke
    this.context.strokeStyle = this.config.color
    this.context.fillStyle = 'white'

    this.context.beginPath()
    this.context.arc(
      this.#center.x,
      this.#center.y,
      this.#radius,
      0,
      2 * Math.PI
    )
    this.context.stroke()
  }

  #onUp = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }

    this.drawing = false

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    const mouseX = clientX - this.context.canvas.offsetLeft
    const mouseY = clientY - this.context.canvas.offsetTop

    this.#radius = Math.sqrt(
      Math.pow(mouseX - this.#center.x, 2) +
        Math.pow(mouseY - this.#center.y, 2)
    )

    this.context.beginPath()
    this.context.arc(
      this.#center.x,
      this.#center.y,
      this.#radius,
      0,
      2 * Math.PI
    )
    this.context.stroke()

    this.context.restore()
  }
}
