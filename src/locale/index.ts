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
  },
  datetimeFormats: {
    'zh-CN': {
      simple: {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    'en-US': {
      simple: {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  }
})

export default i18n
