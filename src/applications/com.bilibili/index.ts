import type { VegaApplication } from '@/components/sdk/types'
import icon from './icon.png'

const app: VegaApplication = {
  icon: icon,
  name: 'Bilibili',
  app: () => import('./Bilibili.vue')
}
export default app
