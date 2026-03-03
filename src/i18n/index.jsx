import { createContext, useContext, useState, useCallback } from 'react'
import en from './en'
import nl from './nl'
import de from './de'
import fr from './fr'

// ─── All translation bundles ─────────────────────────────────────────────────
const bundles = { en, nl, de, fr }

// ─── Supported languages ─────────────────────────────────────────────────────
export const LANGUAGES = [
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', label: 'Deutsch',    flag: '🇩🇪' },
  { code: 'fr', label: 'Français',   flag: '🇫🇷' },
]

// ─── Context ─────────────────────────────────────────────────────────────────
const I18nContext = createContext()

export function I18nProvider({ children, defaultLang = 'en' }) {
  const [lang, setLang] = useState(defaultLang)

  // Translation function: returns key if translation is missing
  const t = useCallback((key) => {
    const val = bundles[lang]?.[key]
    if (val !== undefined) return val
    // Fallback to English
    const fallback = bundles.en?.[key]
    if (fallback !== undefined) return fallback
    // Return the key itself as last resort (helps spot missing translations)
    return `[${key}]`
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}
