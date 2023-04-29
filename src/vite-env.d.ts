/// <reference types="vite/client" />

type Tool = 'brush' | 'fill' | 'rect'

interface RectConfig {
  color: string
  stroke: number
}
interface BrushConfig {
  color: string
  stroke: number
}
interface FillConfig {
  color: string
}
