import { useI18n } from '../../i18n'

// ─── Step 7: Contract ────────────────────────────────────────────────────────
// - SAP number
// - Contract date
// - Duration
// - PDF upload (simulated in POC)
export default function StepContract({ data, updateField }) {
  const { t } = useI18n()

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_contract_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_contract_sub')}</p>

      {/* ── SAP number ── */}
      <div className="input-group">
        <label className="input-label">{t('contract_sap')}</label>
        <input
          type="text"
          className="input-field"
          placeholder="SAP-2026-XXX-001"
          value={data.contract_sap}
          onChange={e => updateField('contract_sap', e.target.value)}
        />
      </div>

      {/* ── Contract date and duration side by side ── */}
      <div className="gap-row">
        <div className="input-group">
          <label className="input-label">{t('contract_date')}</label>
          <input
            type="date"
            className="input-field"
            value={data.contract_date}
            onChange={e => updateField('contract_date', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">{t('contract_duration')}</label>
          <select
            className="input-field"
            value={data.contract_duration}
            onChange={e => updateField('contract_duration', e.target.value)}
          >
            <option value="">—</option>
            <option value="6 months">6 months</option>
            <option value="12 months">12 months</option>
            <option value="24 months">24 months</option>
            <option value="36 months">36 months</option>
            <option value="Indefinite">Indefinite</option>
          </select>
        </div>
      </div>

      {/* ── PDF upload (simulated) ── */}
      <div className="input-group" style={{ marginTop: '0.5rem' }}>
        <label className="input-label">{t('contract_pdf')}</label>
        <div style={{
          border: '2px dashed var(--gray-300)',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--gray-500)',
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'border-color 0.2s, background 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--navy)'; e.currentTarget.style.background = 'var(--gray-50)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.background = 'transparent' }}
        >
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📄</div>
          <div style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: '0.25rem' }}>
            {t('contract_upload')}
          </div>
          <div style={{ fontSize: '0.75rem' }}>
            PDF upload is simulated in this POC
          </div>
        </div>
      </div>
    </div>
  )
}
