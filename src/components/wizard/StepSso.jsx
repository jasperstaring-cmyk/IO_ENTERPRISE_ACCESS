import { useI18n } from '../../i18n'

function deriveAzureDiscoveryUrl(tenantId) {
  if (!tenantId.trim()) return ''
  return `https://login.microsoftonline.com/${tenantId.trim()}/v2.0/.well-known/openid-configuration`
}

export default function StepSso({ data, updateField }) {
  const { t } = useI18n()

  const isAzure = data.sso_provider_type === 'azure_ad'
  const isGoogle = data.sso_provider_type === 'google_workspace'

  const handleTenantChange = (value) => {
    updateField('sso_tenant_id', value)
    if (data.sso_provider_type === 'azure_ad') {
      updateField('sso_discovery_url', deriveAzureDiscoveryUrl(value))
    }
  }

  const handleProviderChange = (provider) => {
    updateField('sso_provider_type', provider)
    if (provider === 'azure_ad' && data.sso_tenant_id) {
      updateField('sso_discovery_url', deriveAzureDiscoveryUrl(data.sso_tenant_id))
    } else if (provider === 'google_workspace') {
      updateField('sso_discovery_url', '')
    }
  }

  const redirectUri = 'https://www.investmentofficer.nl/auth/callback'

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_sso_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_sso_sub')}</p>

      {/* ── Provider selection ── */}
      <div className="input-group" style={{ marginBottom: '1.5rem' }}>
        <label className="input-label">{t('sso_provider')}</label>
        <button
          className={`sel-row ${isAzure ? 'selected' : ''}`}
          onClick={() => handleProviderChange('azure_ad')}
          type="button"
        >
          <div className={`sel-dot ${isAzure ? 'checked' : ''}`}>
            {isAzure && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
          </div>
          <div className="sel-row-name">{t('sso_provider_azure')}</div>
        </button>
        <button
          className={`sel-row ${isGoogle ? 'selected' : ''}`}
          onClick={() => handleProviderChange('google_workspace')}
          type="button"
        >
          <div className={`sel-dot ${isGoogle ? 'checked' : ''}`}>
            {isGoogle && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
          </div>
          <div className="sel-row-name">{t('sso_provider_google')}</div>
        </button>
      </div>

      {/* ── Technical fields ── */}
      {(isAzure || isGoogle) && (
        <>
          <div className="input-group">
            <label className="input-label">{t('sso_client_id')}</label>
            <input type="text" className="input-field" placeholder="a1b2c3d4-e5f6-7890-abcd-ef1234567890" value={data.sso_client_id} onChange={e => updateField('sso_client_id', e.target.value)} />
          </div>

          {isAzure && (
            <div className="input-group">
              <label className="input-label">{t('sso_tenant_id')}</label>
              <input type="text" className="input-field" placeholder="282a3295-5c42-4d93-9ec1-6631001cc5f7" value={data.sso_tenant_id} onChange={e => handleTenantChange(e.target.value)} />
            </div>
          )}

          <div className="input-group">
            <label className="input-label">{t('sso_discovery_url')}</label>
            <input type="text" className="input-field" placeholder="https://login.microsoftonline.com/{tenant}/v2.0/.well-known/openid-configuration" value={data.sso_discovery_url} onChange={e => updateField('sso_discovery_url', e.target.value)} readOnly={isAzure && !!data.sso_tenant_id} style={isAzure && data.sso_tenant_id ? { background: 'var(--gray-50)', color: 'var(--gray-500)' } : {}} />
            {isAzure && data.sso_tenant_id && <div className="input-hint">Auto-derived from Tenant ID</div>}
          </div>

          <div className="input-group">
            <label className="input-label">{t('sso_secret')}</label>
            <input type="password" className="input-field" placeholder="••••••••••••••••" value={data.sso_client_secret} onChange={e => updateField('sso_client_secret', e.target.value)} />
            <div className="input-hint">{t('wiz_sso_secret_note')}</div>
          </div>

          <div className="input-group" style={{ maxWidth: '50%' }}>
            <label className="input-label">{t('sso_secret_expires')}</label>
            <input type="date" className="input-field" value={data.sso_secret_expires_at} onChange={e => updateField('sso_secret_expires_at', e.target.value)} />
          </div>

          <div className="input-group" style={{ maxWidth: '50%' }}>
            <label className="input-label">{t('sso_email_claim')}</label>
            <input type="text" className="input-field" value={data.sso_email_claim} onChange={e => updateField('sso_email_claim', e.target.value)} />
          </div>

          <div className="input-group">
            <label className="input-label">{t('sso_redirect_uri')}</label>
            <div style={{ padding: '0.75rem 1rem', background: 'var(--gray-50)', border: '1.5px solid var(--gray-200)', borderRadius: '4px', fontSize: '0.875rem', fontFamily: 'monospace', color: 'var(--navy)', wordBreak: 'break-all' }}>
              {redirectUri}
            </div>
            <div className="input-hint">{t('wiz_sso_redirect_note')}</div>
          </div>

          {/* ── Allow password toggle ── */}
          <div style={{
            marginTop: '1.5rem', padding: '1rem 1.25rem', borderRadius: '8px',
            border: '1.5px solid var(--gray-200)', background: data.allow_password ? 'rgba(12,24,46,0.02)' : '#fff',
          }}>
            <button
              type="button"
              onClick={() => updateField('allow_password', !data.allow_password)}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                background: 'none', border: 'none', cursor: 'pointer',
                textAlign: 'left', width: '100%', padding: 0,
              }}
            >
              {/* Toggle switch */}
              <div style={{
                width: 40, height: 22, borderRadius: 11, flexShrink: 0, marginTop: 2,
                background: data.allow_password ? 'var(--navy)' : 'var(--gray-300)',
                position: 'relative', transition: 'background 0.2s',
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: '50%', background: '#fff',
                  position: 'absolute', top: 2,
                  left: data.allow_password ? 20 : 2,
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)' }}>
                  {t('sso_allow_password')}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', marginTop: '0.2rem', lineHeight: 1.5 }}>
                  {t('sso_allow_password_desc')}
                </div>
              </div>
            </button>
            {data.allow_password && (
              <div className="alert alert-warning" style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                {t('sso_allow_password_warn')}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
