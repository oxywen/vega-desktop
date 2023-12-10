export interface VegaApplication {
  icon: string
  name: string
  app?: Function
  tray?: Function
}

export interface VegaAppWindowProps {
  appName?: string
  className?: string
  width: string
  height: string
  resize?: boolean
  drag?: boolean
  isMax?: boolean
}
