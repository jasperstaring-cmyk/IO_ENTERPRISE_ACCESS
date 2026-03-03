import { useI18n } from '../../i18n'

// ─── Step 8: User limit ──────────────────────────────────────────────────────
// - Configurable max users, default 500
// - Simple numeric input with preset buttons
export default function StepUserLimit({ data, updateField }) {
  const { t } = useI18n()

  const presets = [50, 100, 250, 500]
  const current = data.max_users || 500

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_limit_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_limit_sub')}</p>

      {/* ── Preset buttons ── */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {presets.map(n => (
          <button
            key={n}
            className={current === n ? 'btn-navy' : 'btn-outline'}
            onClick={() => updateField('max_users', n)}
          >
            {n}
          </button>
        ))}
      </div>

      {/* ── Custom input ── */}
      <div className="input-group" style={{ maxWidth: '200px' }}>
        <label className="input-label">{t('user_limit_current')}</label>
        <input
          type="number"
          className="input-field"
          min={1}
          max={10000}
          value={current}
          onChange={e => updateField('max_users', parseInt(e.target.value) || 500)}
        />
        <div className="input-hint">{t('user_limit_default')}</div>
      </div>
    </div>
  )
}
