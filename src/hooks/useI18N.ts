import { useI18n } from 'vue-i18n'

export function useI18N() {
  const { locale, t } = useI18n()
  const setLocale = (val: string) => {
    locale.value = val
    localStorage.setItem('locale', val)
  }
  const getLocale = (): string => {
    return locale.value
  }
  return { t, setLocale, getLocale }
}
