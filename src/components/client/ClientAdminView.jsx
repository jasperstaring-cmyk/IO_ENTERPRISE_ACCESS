import { useState } from 'react'
import { useI18n } from '../../i18n'
import { ENTERPRISE_CLIENTS, daysUntilExpiry, expirySeverity } from '../../data'

/* ── Sidebar nav items (all decorative except Enterprise Access) ── */
const NAV_ITEMS = [
  { id: 'account',      icon: 'user',       labelKey: 'acc_my_account' },
  { id: 'newsletter',   icon: 'bell',       labelKey: 'acc_newsletter' },
  { id: 'subscriptions',icon: 'card',       labelKey: 'acc_subscriptions' },
  { id: 'users',        icon: 'users',      labelKey: 'acc_users' },
  { id: 'billing',      icon: 'billing',    labelKey: 'acc_billing' },
  { id: 'enterprise',   icon: 'shield',     labelKey: 'cv_title' },
]

/* Simple SVG icons matching IO style */
function NavIcon({ type, active }) {
  const color = active ? 'var(--navy)' : 'var(--gray-500)'
  const props = { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', stroke: color, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (type) {
    case 'user':    return <svg {...props}><circle cx="9" cy="6" r="3"/><path d="M3 16c0-3 2.7-5 6-5s6 2 6 5"/></svg>
    case 'bell':    return <svg {...props}><path d="M7 14a2 2 0 004 0"/><path d="M4 8a5 5 0 0110 0c0 3 1.5 5 2 6H2c.5-1 2-3 2-6z"/></svg>
    case 'card':    return <svg {...props}><rect x="2" y="4" width="14" height="10" rx="2"/><path d="M2 8h14"/></svg>
    case 'users':   return <svg {...props}><circle cx="7" cy="6" r="2.5"/><circle cx="13" cy="7" r="2"/><path d="M1 15c0-2.5 2.2-4 5-4"/><path d="M10 15c0-2 1.8-3.5 4-3.5"/></svg>
    case 'billing': return <svg {...props}><rect x="2" y="3" width="14" height="12" rx="2"/><path d="M6 7h6M6 10h4"/></svg>
    case 'shield':  return <svg {...props}><path d="M9 2L3 5v4c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V5z"/><path d="M7 9l2 2 3-4"/></svg>
    case 'help':    return <svg {...props}><circle cx="9" cy="9" r="7"/><path d="M7 7a2 2 0 013 1.5c0 1-1 1.5-1 2.5M9 13.5v0"/></svg>
    default:        return null
  }
}

/* ── Read-only field (matches IO account page pattern) ── */
function ReadField({ label, value }) {
  return (
    <div className="cv-read-field">
      <div className="cv-read-label">{label}</div>
      <div className="cv-read-value">{value || '—'}</div>
    </div>
  )
}

/* ── SSO Status Card ── */
function SsoCard({ client, onRenew, t }) {
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
    <div className="cv-section-card">
      <div className="cv-section-header">
        <div>
          <h2 className="cv-section-title">{t('cv_title')}</h2>
          <p className="cv-section-sub">{t('cv_section_sub')}</p>
        </div>
      </div>

      <ReadField label={t('cv_provider')}
        value={sso.provider_type === 'azure_ad' ? t('sso_provider_azure') : t('sso_provider_google')} />

      <div className="cv-read-field">
        <div className="cv-read-label">{t('cv_status')}</div>
        <div className="cv-read-value">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.2rem 0.625rem', borderRadius: '6px',
            background: statusBg, fontWeight: 600, fontSize: '0.875rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: statusColor }} />
            {t(`status_${sso.status}`)}
          </span>
        </div>
      </div>

      <div className="cv-read-field">
        <div className="cv-read-label">{t('cv_secret_expires')}</div>
        <div className="cv-read-value">
          <span className={`badge ${expiryBadge}`}>
            <span className={`badge-dot ${expiryDot}`} /> {expiryText}
          </span>
          <span style={{ marginLeft: '0.5rem', fontSize: '0.8125rem', color: 'var(--gray-500)' }}>
            ({sso.secret_expires_at})
          </span>
        </div>
      </div>

      <ReadField label={t('cv_client_id')} value={sso.client_id} />
      <ReadField label={t('cv_tenant_id')} value={sso.tenant_id} />
      <ReadField label={t('cv_redirect_uri')} value={sso.redirect_uri} />

      {/* Expiry alerts */}
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

      <div style={{ marginTop: '1.25rem' }}>
        <button className="btn-primary" onClick={onRenew}>
          {t('cv_renew_secret')}
        </button>
      </div>
    </div>
  )
}

/* ── Access Info Card (editions, domains — read-only) ── */
function AccessInfoCard({ client, t }) {
  const editionLabels = client.editions.map(e => t(`edition_${e}`)).join(', ')
  const domainList = client.domains.map(d => d.domain).join(', ')
  return (
    <div className="cv-section-card">
      <div className="cv-section-header">
        <div>
          <h2 className="cv-section-title">{t('cv_access_title')}</h2>
          <p className="cv-section-sub">{t('cv_access_sub')}</p>
        </div>
      </div>
      <ReadField label={t('cv_access_type_label')} value={client.access_type === 'sso' ? t('wiz_org_type_sso') : t('wiz_org_type_wl')} />
      <ReadField label={t('wiz_editions_title')} value={editionLabels} />
      <ReadField label={t('wiz_domains_title')} value={domainList} />
      <ReadField label={t('wiz_limit_title')} value={`${client.active_users} / ${client.max_users}`} />
    </div>
  )
}

/* ── Whitelist Info (for non-SSO clients) ── */
function WhitelistCard({ client, t }) {
  return (
    <div className="cv-section-card">
      <div className="cv-section-header">
        <h2 className="cv-section-title">{t('cv_title')}</h2>
      </div>
      <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--gray-500)', fontSize: '0.875rem' }}>
        {t('ov_type_whitelist')} — SSO {t('expiry_na')}
      </div>
    </div>
  )
}

/* ── Renew Secret Modal ── */
function RenewModal({ client, onClose, t }) {
  const [secret, setSecret] = useState('')
  const [expiry, setExpiry] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setLoading(false)
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
              <button className="btn-primary" onClick={onClose} style={{ width: '100%' }}>{t('btn_close')}</button>
            </div>
          ) : (
            <div>
              {result === 'error' && <div className="alert alert-error">{t('cv_renew_error')}</div>}
              <div className="input-group">
                <label className="input-label">{t('cv_renew_new_secret')}</label>
                <input type="password" className="input-field" placeholder="••••••••••••••••"
                  value={secret} onChange={e => setSecret(e.target.value)} />
              </div>
              <div className="input-group">
                <label className="input-label">{t('cv_renew_expiry')}</label>
                <input type="date" className="input-field" value={expiry} onChange={e => setExpiry(e.target.value)} />
              </div>
              <div className="demo-hint">
                <strong>Demo:</strong> Type "fail" as secret to simulate validation failure. Any other value will succeed.
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={!secret.trim() || !expiry || loading} onClick={handleSubmit}>
                {loading ? '⏳ Validating…' : t('cv_renew_confirm')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Main: ClientAdminView ── */
export default function ClientAdminView({ demoClient }) {
  const { t, lang } = useI18n()
  const client = demoClient || ENTERPRISE_CLIENTS.find(c => c.sso) || ENTERPRISE_CLIENTS[0]
  const [showRenew, setShowRenew] = useState(false)

  const adminName = client.contacts?.find(c => c.role === 'admin')?.name || 'Admin'
  const langLabel = { en: 'English', nl: 'Nederlands', de: 'Deutsch', fr: 'Français' }[lang] || 'English'

  return (
    <div className="cv-layout">
      {/* Top bar */}
      <div className="cv-topbar">
        <img src="/io_horizontal_black_10x.png" alt="Investment Officer" className="cv-topbar-logo" />
        <div className="cv-topbar-right">
          <div className="cv-topbar-lang">
            {langLabel} <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{marginLeft:'0.25rem'}}>
              <path d="M1 1l4 4 4-4" stroke="var(--gray-500)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="cv-topbar-user">
            <div className="cv-topbar-avatar">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5.5" r="3" stroke="var(--gray-500)" strokeWidth="1.2"/>
                <path d="M2.5 14c0-2.5 2.2-4.5 5.5-4.5s5.5 2 5.5 4.5" stroke="var(--gray-500)" strokeWidth="1.2"/>
              </svg>
            </div>
            {adminName}
          </div>
        </div>
      </div>

      {/* Main area: sidebar + content */}
      <div className="cv-container">
        {/* Sidebar */}
        <nav className="cv-sidebar">
          {NAV_ITEMS.map(item => (
            <div key={item.id} className={`cv-sidebar-item ${item.id === 'enterprise' ? 'active' : ''}`}>
              <NavIcon type={item.icon} active={item.id === 'enterprise'} />
              <span>{t(item.labelKey)}</span>
            </div>
          ))}
          <div className="cv-sidebar-divider" />
          <div className="cv-sidebar-help-label">{t('acc_help')}</div>
          <div className="cv-sidebar-item">
            <NavIcon type="help" active={false} />
            <span>{t('acc_contact')}</span>
          </div>
        </nav>

        {/* Content */}
        <div className="cv-content">
          {client.sso ? (
            <>
              <SsoCard client={client} onRenew={() => setShowRenew(true)} t={t} />
              <AccessInfoCard client={client} t={t} />
            </>
          ) : (
            <>
              <WhitelistCard client={client} t={t} />
              <AccessInfoCard client={client} t={t} />
            </>
          )}
        </div>
      </div>

      {/* Renew modal */}
      {showRenew && client.sso && (
        <RenewModal client={client} onClose={() => setShowRenew(false)} t={t} />
      )}
    </div>
  )
}
