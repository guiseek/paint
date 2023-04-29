import {ToolBase} from './base'

export class ToolBrush extends ToolBase<BrushConfig> {
  #current = {
    x: 0,
    y: 0,
  }

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

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#current.x = clientX
    this.#current.y = clientY
  }

  #onMove = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#drawLine(clientX, clientY, true)

    this.#current.x = clientX
    this.#current.y = clientY
  }

  #onUp = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }

    this.drawing = false

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#drawLine(clientX, clientY)
  }

  #drawLine(clientX: number, clientY: number, emit?: boolean) {
    const {x, y} = this.#current
    this.context.beginPath()
    this.context.moveTo(x - 60, y)
    this.context.lineTo(clientX - 60, clientY)
    this.context.lineWidth = this.config.stroke
    this.context.strokeStyle = this.config.color
    this.context.stroke()
    this.context.closePath()

    if (!emit) {
      return
    }
  }
}
