import { useState } from 'react'
import { useI18n } from '../../i18n'
import { ENTERPRISE_CLIENTS, daysUntilExpiry, expirySeverity } from '../../data'

// ─── Client selector (demo only — in production this is determined by login) ─
function ClientSelector({ clients, selected, onSelect, t }) {
  return (
    <div className="demo-hint" style={{ marginBottom: '1.25rem' }}>
      <strong>Demo:</strong> {' '}
      {clients.map(c => (
        <button
          key={c.id}
          onClick={() => onSelect(c)}
          style={{
            background: selected?.id === c.id ? 'var(--navy)' : '#fff',
            color: selected?.id === c.id ? '#fff' : 'var(--navy)',
            border: '1.5px solid var(--gray-300)',
            borderRadius: '4px', padding: '0.25rem 0.6rem',
            fontSize: '0.75rem', fontWeight: 600,
            cursor: 'pointer', marginRight: '0.375rem',
            transition: 'all 0.15s',
          }}
        >
          {c.name}
        </button>
      ))}
    </div>
  )
}

// ─── SSO Status Block ────────────────────────────────────────────────────────
function SsoStatusBlock({ client, onRenew, t }) {
  const sso = client.sso
  const days = daysUntilExpiry(sso.secret_expires_at)
  const sev = expirySeverity(sso.secret_expires_at)

  const statusColor = sso.status === 'active' ? 'var(--green)' :
                      sso.status === 'expired' ? 'var(--red)' : '#F5A623'
  const statusBg = sso.status === 'active' ? '#EDFBF4' :
                   sso.status === 'expired' ? '#FFF0F3' : '#FFF8E6'

  const expiryBadge = sev === 'red' ? 'badge-red' : sev === 'orange' ? 'badge-orange' : 'badge-green'
  const expiryDot = sev === 'red' ? 'badge-dot-red' : sev === 'orange' ? 'badge-dot-orange' : 'badge-dot-green'
  const expiryText = days <= 0 ? t('expiry_expired') : t('expiry_days').replace('{n}', days)

  return (
    <div className="detail-card" style={{ maxWidth: 520 }}>
      <div className="detail-card-title" style={{ fontSize: '1.125rem' }}>
        {t('cv_title')}
      </div>

      {/* Provider */}
      <div className="detail-row">
        <div className="detail-label">{t('cv_provider')}</div>
        <div className="detail-value">
          {sso.provider_type === 'azure_ad' ? t('sso_provider_azure') : t('sso_provider_google')}
        </div>
      </div>

      {/* Status */}
      <div className="detail-row">
        <div className="detail-label">{t('cv_status')}</div>
        <div className="detail-value">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.3rem 0.75rem', borderRadius: '6px',
            background: statusBg, fontWeight: 600, fontSize: '0.875rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: statusColor }} />
            {t(`status_${sso.status}`)}
          </span>
        </div>
      </div>

      {/* Secret expiry */}
      <div className="detail-row">
        <div className="detail-label">{t('cv_secret_expires')}</div>
        <div className="detail-value">
          <span className={`badge ${expiryBadge}`}>
            <span className={`badge-dot ${expiryDot}`} /> {expiryText}
          </span>
          <span style={{ marginLeft: '0.5rem', fontSize: '0.8125rem', color: 'var(--gray-500)' }}>
            ({sso.secret_expires_at})
          </span>
        </div>
      </div>

      {/* Expiry warning */}
      {sev === 'red' && (
        <div className="alert alert-error" style={{ marginTop: '1rem' }}>
          {t('alert_title_expired')}
        </div>
      )}
      {sev === 'orange' && (
        <div className="alert alert-warning" style={{ marginTop: '1rem' }}>
          {t('alert_title_expiry')}
        </div>
      )}

      {/* Renew button */}
      <div style={{ marginTop: '1.25rem' }}>
        <button className="btn-primary" onClick={onRenew}>
          {t('cv_renew_secret')}
        </button>
      </div>
    </div>
  )
}

// ─── Renew Secret Modal ──────────────────────────────────────────────────────
function RenewModal({ client, onClose, t }) {
  const [secret, setSecret] = useState('')
  const [expiry, setExpiry] = useState('')
  const [result, setResult] = useState(null) // 'success' | 'error'
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setResult(null)

    // Simulate validation (2 second delay)
    setTimeout(() => {
      setLoading(false)
      // Simulate: succeed if secret is not empty, fail if secret is 'fail'
      if (secret.trim().toLowerCase() === 'fail') {
        setResult('error')
      } else {
        setResult('success')
      }
    }, 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()} style={{ maxWidth: 480 }}>
        <div className="modal-header">
          <div>
            <div className="modal-title">{t('cv_renew_title')}</div>
            <div className="modal-subtitle">{t('cv_renew_sub')}</div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {result === 'success' ? (
            <div>
              <div className="alert alert-success">{t('cv_renew_success')}</div>
              <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
                {t('btn_close')}
              </button>
            </div>
          ) : (
            <div>
              {result === 'error' && (
                <div className="alert alert-error">{t('cv_renew_error')}</div>
              )}

              <div className="input-group">
                <label className="input-label">{t('cv_renew_new_secret')}</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="••••••••••••••••"
                  value={secret}
                  onChange={e => setSecret(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label className="input-label">{t('cv_renew_expiry')}</label>
                <input
                  type="date"
                  className="input-field"
                  value={expiry}
                  onChange={e => setExpiry(e.target.value)}
                />
              </div>

              <div className="demo-hint">
                <strong>Demo:</strong> Type "fail" as secret to simulate validation failure.
                Any other value will succeed.
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={!secret.trim() || !expiry || loading}
                onClick={handleSubmit}
              >
                {loading ? '⏳ Validating…' : t('cv_renew_confirm')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Whitelist info block (for non-SSO clients) ─────────────────────────────
function WhitelistBlock({ client, t }) {
  return (
    <div className="detail-card" style={{ maxWidth: 520 }}>
      <div className="detail-card-title" style={{ fontSize: '1.125rem' }}>
        {t('cv_title')}
      </div>
      <div style={{
        textAlign: 'center', padding: '1.5rem',
        color: 'var(--gray-500)', fontSize: '0.875rem',
      }}>
        {t('ov_type_whitelist')} — SSO {t('expiry_na')}
      </div>
    </div>
  )
}

// ─── ClientAdminView (main) ──────────────────────────────────────────────────
export default function ClientAdminView() {
  const { t } = useI18n()

  // Only SSO clients are relevant for the client admin view
  const ssoClients = ENTERPRISE_CLIENTS.filter(c => c.sso)
  const wlClients = ENTERPRISE_CLIENTS.filter(c => !c.sso)

  const [selected, setSelected] = useState(ssoClients[0] || null)
  const [showRenew, setShowRenew] = useState(false)

  return (
    <div>
      {/* Demo: client selector */}
      <ClientSelector
        clients={[...ssoClients, ...wlClients]}
        selected={selected}
        onSelect={setSelected}
        t={t}
      />

      {/* SSO status or whitelist info */}
      {selected && selected.sso ? (
        <SsoStatusBlock
          client={selected}
          onRenew={() => setShowRenew(true)}
          t={t}
        />
      ) : selected ? (
        <WhitelistBlock client={selected} t={t} />
      ) : null}

      {/* Renew modal */}
      {showRenew && selected?.sso && (
        <RenewModal
          client={selected}
          onClose={() => setShowRenew(false)}
          t={t}
        />
      )}
    </div>
  )
}
