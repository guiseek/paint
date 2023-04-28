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
    this.canvas.addEventListener('touchstart', (e) => this.#onDown(e), false)

    this.canvas.addEventListener('mouseup', (e) => this.#onUp(e), false)
    this.canvas.addEventListener('mouseout', (e) => this.#onUp(e), false)
    this.canvas.addEventListener('touchend', (e) => this.#onUp(e), false)
    this.canvas.addEventListener('touchcancel', (e) => this.#onUp(e), false)

    this.canvas.addEventListener('mousemove', (e) => this.#onMove(e), false)
    this.canvas.addEventListener('touchmove', (e) => this.#onMove(e), false)
  }

  #onDown(e: MouseEvent | TouchEvent) {
    this.#drawing = true

    if (e instanceof TouchEvent) {
      this.#current.x = e.touches[0].clientX
      this.#current.y = e.touches[0].clientY
    }
    if (e instanceof MouseEvent) {
      this.#current.x = e.clientX
      this.#current.y = e.clientY
    }
  }

  #onUp(e: MouseEvent | TouchEvent) {
    if (!this.#drawing) {
      return
    }

    this.#drawing = false

    let clientX = 0
    let clientY = 0

    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    }
    if (e instanceof MouseEvent) {
      clientX = e.clientX
      clientY = e.clientY
    }

    this.#drawLine(
      this.#current.x,
      this.#current.y,
      clientX,
      clientY,
      this.#current.color,
			this.#current.stroke,
      true
    )
  }

  #onMove(e: MouseEvent | TouchEvent) {
    if (!this.#drawing) {
      return
    }

    let clientX = 0
    let clientY = 0

    if (e instanceof TouchEvent) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    }
    if (e instanceof MouseEvent) {
      clientX = e.clientX
      clientY = e.clientY
    }

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
    this.#context.moveTo(x0  - 60, y0)
    this.#context.lineTo(x1  - 60, y1)
    this.#context.strokeStyle = color
    this.#context.lineWidth = stroke
    this.#context.stroke()
    this.#context.closePath()

    if (!emit) {
      return
    }
  }
}