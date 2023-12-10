import type { VegaApplication } from '@/components/sdk/types'
import icon from './icon.png'

const app: VegaApplication = {
  icon: icon,
  name: '设置',
  app: () => import('./Example.vue')
}
export default app
