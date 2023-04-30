/// <reference types="vite/client" />

type Tool = 'brush' | 'fill' | 'rect' | 'arc'

interface ToolConfig {
  color: string
  stroke: number
}

interface RectConfig extends ToolConfig {}
interface BrushConfig extends ToolConfig {}
interface ArcConfig extends ToolConfig {}
interface FillConfig {
  color: string
}

interface Shape {
  type: 'circle' | 'rect'
  x: number
  y: number
  width?: number
  height?: number
  radius?: number
  strokeStyle: string
  fillStyle: string
  lineWidth: number
}

type VoidCallback = (...params: unknown[]) => void
type Callback<T> = (value: T) => void
type ToolEvents = {
  start: Callback<Shape>[]
  move: Callback<Shape>[]
  end: Callback<Shape>[]
}
