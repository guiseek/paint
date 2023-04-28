export class Paint {
  #current = {
    color: 'black',
    stroke: 2,
    x: 0,
    y: 0,
  }

  #drawing = false

  #context: CanvasRenderingContext2D

  constructor(readonly canvas: HTMLCanvasElement) {
    this.#context = canvas.getContext('2d')!
  }

  setColor(color: string) {
    this.#current.color = color
  }

  listen() {
    this.canvas.addEventListener('mousedown', (e) => this.#onDown(e), false)
    this.canvas.addEventListener('mouseup', (e) => this.#onUp(e), false)
    this.canvas.addEventListener('mouseout', (e) => this.#onUp(e), false)

    this.canvas.addEventListener('touchstart', (e) => this.#onDown(e), false)
    this.canvas.addEventListener('touchend', (e) => this.#onUp(e), false)
    this.canvas.addEventListener('touchcancel', (e) => this.#onUp(e), false)

    this.canvas.addEventListener('mousemove', (e) => this.#onMove(e), false)
    this.canvas.addEventListener('touchmove', (e) => this.#onMove(e), false)
  }

  #onDown(e: MouseEvent | TouchEvent) {
    this.#drawing = true

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e
    this.#current.x = clientX
    this.#current.y = clientY
  }

  #onUp(e: MouseEvent | TouchEvent) {
    if (!this.#drawing) {
      return
    }

    this.#drawing = false

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#drawLine(
      this.#current.x,
      this.#current.y,
      clientX,
      clientY,
      this.#current.color,
      this.#current.stroke,
      false
    )
  }

  #onMove(e: MouseEvent | TouchEvent) {
    if (!this.#drawing) {
      return
    }

    const {clientX = 0, clientY = 0} =
      e instanceof TouchEvent ? e.changedTouches[0] : e

    this.#drawLine(
      this.#current.x,
      this.#current.y,
      clientX,
      clientY,
      this.#current.color,
      this.#current.stroke,
      true
    )
    this.#current.x = clientX
    this.#current.y = clientY
  }

  #drawLine(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    color: string,
    stroke: number,
    emit?: boolean
  ) {
    this.#context.beginPath()
    this.#context.moveTo(x0 - 60, y0)
    this.#context.lineTo(x1 - 60, y1)
    this.#context.strokeStyle = color
    this.#context.lineWidth = stroke
    this.#context.stroke()
    this.#context.closePath()

    if (!emit) {
      return
    }
  }
}
