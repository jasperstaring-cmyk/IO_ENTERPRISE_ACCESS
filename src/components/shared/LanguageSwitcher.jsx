import { useI18n, LANGUAGES } from '../../i18n'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {LANGUAGES.map(l => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          title={l.label}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            fontWeight: lang === l.code ? 700 : 400,
            background: lang === l.code ? 'rgba(255,255,255,0.15)' : 'transparent',
            color: lang === l.code ? '#fff' : 'rgba(255,255,255,0.5)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          {l.flag} {l.code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
