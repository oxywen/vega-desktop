import type { VegaDesktopItemProps } from './types'
import CloudMusic from '@/applications/com.oxywen.music/index'
import Bilibili from '@/applications/com.bilibili/index'
import Example from '@/applications/com.oxywen.example/index'

const data: VegaDesktopItemProps[] = [
  {
    id: 'applications/com.163.music/CloudMuisc',
    ...CloudMusic
  },
  {
    id: 'applications/com.bilibili/Bilibili',
    ...Bilibili
  },
  {
    id: 'applications/music.163.com/CloudMuisc',
    ...Example
  }
]

export default data
