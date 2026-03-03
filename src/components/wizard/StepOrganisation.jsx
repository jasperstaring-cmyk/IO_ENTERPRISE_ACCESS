import { useI18n } from '../../i18n'

// ─── Step 1: Organisation details ────────────────────────────────────────────
// - Organisation name (text input)
// - Access type: whitelist or SSO (selection rows)
export default function StepOrganisation({ data, updateField }) {
  const { t } = useI18n()

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_org_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_org_sub')}</p>

      {/* ── Organisation name ── */}
      <div className="input-group">
        <label className="input-label">{t('wiz_org_name')}</label>
        <input
          type="text"
          className="input-field"
          placeholder={t('wiz_org_name_ph')}
          value={data.org_name}
          onChange={e => updateField('org_name', e.target.value)}
          autoFocus
        />
      </div>

      {/* ── Access type ── */}
      <div className="input-group" style={{ marginTop: '1.5rem' }}>
        <label className="input-label">{t('wiz_org_type')}</label>

        {/* Whitelist option */}
        <button
          className={`sel-row ${data.access_type === 'whitelist' ? 'selected' : ''}`}
          onClick={() => updateField('access_type', 'whitelist')}
          type="button"
        >
          <div className={`sel-dot ${data.access_type === 'whitelist' ? 'checked' : ''}`}>
            {data.access_type === 'whitelist' && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="3" fill="#fff" />
              </svg>
            )}
          </div>
          <div>
            <div className="sel-row-name">{t('wiz_org_type_wl')}</div>
            <div className="sel-row-desc">{t('wiz_org_type_wl_desc')}</div>
          </div>
        </button>

        {/* SSO option */}
        <button
          className={`sel-row ${data.access_type === 'sso' ? 'selected' : ''}`}
          onClick={() => updateField('access_type', 'sso')}
          type="button"
        >
          <div className={`sel-dot ${data.access_type === 'sso' ? 'checked' : ''}`}>
            {data.access_type === 'sso' && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="3" fill="#fff" />
              </svg>
            )}
          </div>
          <div>
            <div className="sel-row-name">{t('wiz_org_type_sso')}</div>
            <div className="sel-row-desc">{t('wiz_org_type_sso_desc')}</div>
          </div>
        </button>
      </div>
    </div>
  )
}
