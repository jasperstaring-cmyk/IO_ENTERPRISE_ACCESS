import { useI18n } from '../../i18n'
import { ALL_EDITIONS } from '../../data'

// ─── Step 4: Editions ────────────────────────────────────────────────────────
// - Toggle per edition (nl, be, lu, de, fr, com)
// - Quick-select: "NL only" or "All editions"
export default function StepEditions({ data, updateField }) {
  const { t } = useI18n()

  const editions = data.editions || []

  const toggle = (code) => {
    if (editions.includes(code)) {
      updateField('editions', editions.filter(e => e !== code))
    } else {
      updateField('editions', [...editions, code])
    }
  }

  const selectNlOnly = () => updateField('editions', ['nl'])
  const selectAll = () => updateField('editions', ALL_EDITIONS.map(e => e.code))

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_editions_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_editions_sub')}</p>

      {/* ── Quick select ── */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <button
          className={editions.length === 1 && editions[0] === 'nl' ? 'btn-navy' : 'btn-outline'}
          onClick={selectNlOnly}
        >
          {t('edition_quick_nl')}
        </button>
        <button
          className={editions.length === ALL_EDITIONS.length ? 'btn-navy' : 'btn-outline'}
          onClick={selectAll}
        >
          {t('edition_quick_all')}
        </button>
      </div>

      {/* ── Edition toggles ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        {ALL_EDITIONS.map(ed => {
          const active = editions.includes(ed.code)
          return (
            <button
              key={ed.code}
              className={`sel-row ${active ? 'selected' : ''}`}
              onClick={() => toggle(ed.code)}
              type="button"
              style={{ marginBottom: 0 }}
            >
              <div style={{
                width: 20, height: 20, borderRadius: 4,
                border: `2px solid ${active ? 'var(--navy)' : 'var(--gray-300)'}`,
                background: active ? 'var(--navy)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, transition: 'all 0.15s',
              }}>
                {active && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div>
                <div className="sel-row-name">
                  <span className="edition-pill" style={{ marginRight: '0.5rem' }}>{ed.code}</span>
                  {t(`edition_${ed.code}`)}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
