export abstract class ToolBase<T = object> {
  protected drawing = false

  #events: ToolEvents = {
    start: [],
    move: [],
    end: [],
  }

  set onstart(value: Callback<Shape>) {
    this.#events.start.push(value)
  }

  set onmove(value: Callback<Shape>) {
    this.#events.move.push(value)
  }

  set onend(value: Callback<Shape>) {
    this.#events.end.push(value)
  }

  protected shapes: Shape[] = []

  protected abstract config: T

  constructor(protected context: CanvasRenderingContext2D) {}

  setConfig(value: Partial<T>) {
    this.config = {...this.config, ...value}
  }

  abstract subscribe(): void
  abstract unsubscribe(): void
  abstract draw(shape: Shape): void
}
