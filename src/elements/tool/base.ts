export abstract class ToolBase<T = object> {
  protected drawing = false

  protected abstract config: T

  constructor(protected context: CanvasRenderingContext2D) {}

  setConfig(value: Partial<T>) {
    this.config = {...this.config, ...value}
  }

  abstract subscribe(): void
  abstract unsubscribe(): void
}
