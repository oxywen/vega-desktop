import { createI18n } from 'vue-i18n'

import zhCN from './zh/zh-CN'
import enUS from './en/en-US'

const locale = localStorage.getItem('locale') || window.navigator.language || 'zh-CN'
localStorage.setItem('locale', locale)

const i18n = createI18n({
  locale: locale,
  legacy: false,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

export default i18n
