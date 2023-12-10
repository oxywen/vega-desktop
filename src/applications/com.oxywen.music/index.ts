import type { VegaApplication } from '@/components/sdk/types'
import icon from './icon.png'

const app: VegaApplication = {
  icon: icon,
  name: '音乐',
  app: () => import('./CloudMusic.vue'),
  tray: () => import('./CloudMusicTray.vue')
}
export default app
