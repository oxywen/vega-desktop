import type { Component } from 'vue'

export interface VegaDesktopItemProps {
  id: string
  icon: string
  name: string
  isOpen?: boolean
  x?: number
  y?: number
  index?: number
  type?: string
  app?: Function
  tray?: Function
}

export interface ProcessMeta {
  id: number
  icon: string
  name: string
  app?: Component
  try?: Component
}
