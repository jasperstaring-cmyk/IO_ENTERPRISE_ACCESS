import { createContext, useContext, useState, useCallback } from 'react'
import { en, nl, de, fr } from './translations'

const bundles = { en, nl, de, fr }

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Francais' },
]

const I18nContext = createContext()

export function I18nProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(defaultLang)

  const t = useCallback((key) => {
    const val = bundles[lang]?.[key]
    if (val !== undefined) return val
    const fallback = bundles.en?.[key]
    if (fallback !== undefined) return fallback
    return `[${key}]`
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}
