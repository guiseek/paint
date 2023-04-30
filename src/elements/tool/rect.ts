import {ToolBase} from './base'

export class ToolRect extends ToolBase<RectConfig> {
  #start = {
    x: 0,
    y: 0,
  }

  #end = {
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

    this.context.save()

    const {canvas} = this.context

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#start.x = clientX - canvas.offsetLeft

    this.#start.y = clientY - canvas.offsetTop

    const rect: Shape = {
      ...this.#start,
      width: 0,
      height: 0,
      strokeStyle: 'black',
      fillStyle: 'white',
      lineWidth: 2,
      type: 'rect',
    }

    this.shapes.push(rect)
  }

  #onMove = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }
    const {canvas} = this.context

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#end.x = clientX - canvas.offsetLeft
    this.#end.y = clientY - canvas.offsetTop

    this.context.clearRect(0, 0, canvas.width, canvas.height)
    // this.context.clearRect(
    //   this.#start.x,
    //   this.#start.y,
    //   this.#end.x - this.#start.x,
    //   this.#end.y - this.#start.y
    // )

    this.context.lineWidth = this.config.stroke
    this.context.strokeStyle = this.config.color
    this.context.fillStyle = 'transparent'

    this.context.strokeRect(
      this.#start.x,
      this.#start.y,
      this.#end.x - this.#start.x,
      this.#end.y - this.#start.y
    )
  }

  #onUp = (e: MouseEvent | TouchEvent) => {
    if (!this.drawing) {
      return
    }

    this.drawing = false

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#end.x = clientX - this.context.canvas.offsetLeft
    this.#end.y = clientY - this.context.canvas.offsetTop

    this.context.strokeRect(
      this.#start.x,
      this.#start.y,
      this.#end.x - this.#start.x,
      this.#end.y - this.#start.y
    )

    this.context.restore()
  }


  draw(shape: Shape) {
    
  }
}
