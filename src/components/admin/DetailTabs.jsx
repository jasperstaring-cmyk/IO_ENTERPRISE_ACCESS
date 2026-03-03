import { useI18n } from '../../i18n'
import { daysUntilExpiry, expirySeverity, ALL_EDITIONS } from '../../data'

function Row({ label, children }) {
  return (
    <div className="detail-row">
      <div className="detail-label">{label}</div>
      <div className="detail-value">{children || '—'}</div>
    </div>
  )
}

function StatusBadge({ status }) {
  const { t } = useI18n()
  const styles = {
    active: 'badge-green', draft: 'badge-gray', suspended: 'badge-orange',
    archived: 'badge-gray', configuring: 'badge-blue', testing: 'badge-blue',
    expired: 'badge-red', error: 'badge-red',
  }
  return <span className={`badge ${styles[status] || 'badge-gray'}`}>{t(`status_${status}`)}</span>
}

function ExpiryBadge({ dateStr }) {
  const { t } = useI18n()
  if (!dateStr) return <span className="text-gray">{t('expiry_na')}</span>
  const days = daysUntilExpiry(dateStr)
  const sev = expirySeverity(dateStr)
  const cls = sev === 'red' ? 'badge-red' : sev === 'orange' ? 'badge-orange' : 'badge-green'
  const dot = sev === 'red' ? 'badge-dot-red' : sev === 'orange' ? 'badge-dot-orange' : 'badge-dot-green'
  const text = days <= 0 ? t('expiry_expired') : t('expiry_days').replace('{n}', days)
  return <span className={`badge ${cls}`}><span className={`badge-dot ${dot}`} /> {text}</span>
}

export function TabGeneral({ client }) {
  const { t } = useI18n()
  return (
    <div>
      <div className="detail-card">
        <div className="detail-card-title">{t('tab_general')}</div>
        <Row label={t('detail_org_name')}>{client.name}</Row>
        <Row label={t('detail_status')}><StatusBadge status={client.status} /></Row>
        <Row label={t('detail_type')}>
          <span className={`badge ${client.access_type === 'sso' ? 'badge-blue' : 'badge-navy'}`}>
            {client.access_type === 'sso' ? t('ov_type_sso') : t('ov_type_whitelist')}
          </span>
        </Row>
        <Row label={t('detail_created')}>{client.created_at}</Row>
        <Row label={t('detail_activated')}>{client.activated_at}</Row>
        <Row label={t('detail_notes')}>{client.notes}</Row>
      </div>
      <div className="detail-card">
        <div className="detail-card-title">{t('detail_contacts')}</div>
        {client.contacts.map(c => (
          <div key={c.id} style={{ marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--gray-100)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>{c.name}</span>
              <span className="badge badge-gray">{t(`detail_role_${c.role}`)}</span>
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>
              {c.email}{c.phone ? ` · ${c.phone}` : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TabDomains({ client }) {
  const { t } = useI18n()
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_domains')} <span className="badge badge-gray">{client.domains.length}</span></div>
      <table className="admin-table">
        <thead><tr><th>{t('domain_name')}</th><th style={{ width: 100, textAlign: 'center' }}>{t('domain_primary')}</th></tr></thead>
        <tbody>
          {client.domains.map(d => (
            <tr key={d.id}>
              <td><span style={{ fontWeight: 600 }}>@{d.domain}</span></td>
              <td style={{ textAlign: 'center' }}>{d.is_primary && <span className="badge badge-green">★ {t('domain_primary')}</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function TabEditions({ client }) {
  const { t } = useI18n()
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_editions')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        {ALL_EDITIONS.map(ed => {
          const on = client.editions.includes(ed.code)
          return (
            <div key={ed.code} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '6px', border: `1.5px solid ${on ? 'var(--navy)' : 'var(--gray-200)'}`, opacity: on ? 1 : 0.5 }}>
              <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${on ? 'var(--navy)' : 'var(--gray-300)'}`, background: on ? 'var(--navy)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {on && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              </div>
              <div><span className="edition-pill" style={{ marginRight: '0.5rem' }}>{ed.code}</span><span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{t(`edition_${ed.code}`)}</span></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TabSso({ client }) {
  const { t } = useI18n()
  const sso = client.sso
  if (!sso) return <div className="detail-card" style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)' }}>{t('ov_type_whitelist')} — SSO {t('expiry_na')}</div>
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_sso')} <StatusBadge status={sso.status} /></div>
      <Row label={t('sso_provider')}>{sso.provider_type === 'azure_ad' ? t('sso_provider_azure') : t('sso_provider_google')}</Row>
      <Row label={t('sso_client_id')}><code style={{ fontSize: '0.8125rem' }}>{sso.client_id}</code></Row>
      {sso.tenant_id && <Row label={t('sso_tenant_id')}><code style={{ fontSize: '0.8125rem' }}>{sso.tenant_id}</code></Row>}
      <Row label={t('sso_discovery_url')}><code style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>{sso.discovery_url}</code></Row>
      <Row label={t('sso_redirect_uri')}><code style={{ fontSize: '0.75rem' }}>{sso.redirect_uri}</code></Row>
      <Row label={t('sso_secret')}><span style={{ color: 'var(--gray-500)', letterSpacing: '0.1em' }}>{t('sso_secret_masked')}</span></Row>
      <Row label={t('sso_secret_expires')}><ExpiryBadge dateStr={sso.secret_expires_at} /> <span style={{ marginLeft: '0.5rem', fontSize: '0.8125rem', color: 'var(--gray-500)' }}>({sso.secret_expires_at})</span></Row>
      <Row label={t('sso_secret_updated')}>{sso.secret_updated_at}</Row>
      <Row label={t('sso_email_claim')}><code>{sso.email_claim}</code></Row>
      {/* Allow password indicator */}
      <Row label={t('sso_allow_password')}>
        {client.allow_password ? (
          <span className="badge badge-orange">{t('sso_allow_password_on')}</span>
        ) : (
          <span className="badge badge-green">{t('sso_allow_password_off')}</span>
        )}
      </Row>
      <div style={{ marginTop: '1rem' }}>
        <button className="btn-outline" style={{ fontSize: '0.8125rem' }}>{t('sso_test_btn')}</button>
      </div>
    </div>
  )
}

export function TabIpRanges({ client }) {
  const { t } = useI18n()
  const ranges = client.ip_ranges || []
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_ip_ranges')} <span className="badge badge-gray">{ranges.length}</span></div>
      {ranges.length > 0 ? (
        <table className="admin-table">
          <thead><tr><th>{t('ip_from')}</th><th>{t('ip_to')}</th><th>{t('ip_label')}</th></tr></thead>
          <tbody>{ranges.map((r, i) => (<tr key={i}><td><code style={{ fontSize: '0.8125rem' }}>{r.ip_from}</code></td><td><code style={{ fontSize: '0.8125rem' }}>{r.ip_to}</code></td><td>{r.label || '—'}</td></tr>))}</tbody>
        </table>
      ) : (
        <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--gray-500)', fontSize: '0.875rem' }}>No IP ranges configured.</div>
      )}
    </div>
  )
}

export function TabContract({ client }) {
  const { t } = useI18n()
  const c = client.contract
  if (!c) return <div className="detail-card" style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)' }}>{t('ov_contract_missing')}</div>
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_contract')} <span className="badge badge-green">{t('ov_contract_linked')}</span></div>
      <Row label={t('contract_sap')}>{c.sap_number}</Row>
      <Row label={t('contract_date')}>{c.contract_date}</Row>
      <Row label={t('contract_duration')}>{c.duration}</Row>
      <Row label={t('contract_uploaded_by')}>{c.uploaded_by}</Row>
      <Row label={t('contract_uploaded_at')}>{c.uploaded_at}</Row>
      <div style={{ marginTop: '1rem' }}><button className="btn-outline" style={{ fontSize: '0.8125rem' }}>📄 {t('contract_download')}</button></div>
    </div>
  )
}

export function TabUserLimit({ client }) {
  const { t } = useI18n()
  const pct = Math.round((client.active_users / client.max_users) * 100)
  const barColor = pct > 90 ? 'var(--red)' : pct > 70 ? '#F5A623' : 'var(--green)'
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_user_limit')}</div>
      <Row label={t('user_limit_current')}>{client.max_users}</Row>
      <Row label={t('user_limit_active')}><span style={{ fontWeight: 700 }}>{client.active_users}</span><span style={{ color: 'var(--gray-500)' }}> / {client.max_users} ({pct}%)</span></Row>
      <div style={{ marginTop: '0.75rem', height: 8, background: 'var(--gray-200)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${Math.min(pct, 100)}%`, background: barColor, borderRadius: 4, transition: 'width 0.3s' }} />
      </div>
    </div>
  )
}

export function TabBlocklist({ client }) {
  const { t } = useI18n()
  const list = client.blocklist || []
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_blocklist')} <span className="badge badge-gray">{list.length}</span></div>
      {list.length > 0 ? (
        <table className="admin-table">
          <thead><tr><th>{t('bl_email')}</th><th>{t('bl_reason')}</th><th>{t('bl_blocked_at')}</th><th>{t('bl_blocked_by')}</th></tr></thead>
          <tbody>{list.map((b, i) => (<tr key={i}><td style={{ fontWeight: 600 }}>{b.email}</td><td style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>{b.reason}</td><td>{b.blocked_at}</td><td>{b.blocked_by}</td></tr>))}</tbody>
        </table>
      ) : (
        <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--gray-500)', fontSize: '0.875rem' }}>{t('bl_empty')}</div>
      )}
    </div>
  )
}

export function TabAudit({ client }) {
  const { t } = useI18n()
  const logs = []
  if (client.sso) logs.push({ action: 'secret_updated', actor: 'Thomas Hoekstra', details: 'Client secret renewed', timestamp: client.sso.secret_updated_at + ' 14:00' })
  if (client.blocklist?.length > 0) client.blocklist.forEach(b => { logs.push({ action: 'user_blocked', actor: b.blocked_by, details: b.email, timestamp: b.blocked_at + ' 10:00' }) })
  logs.push({ action: 'status_changed', actor: 'Thomas Hoekstra', details: 'Status → active', timestamp: client.activated_at + ' 09:00' })
  logs.push({ action: 'client_created', actor: 'Thomas Hoekstra', details: `Organisation: ${client.name}`, timestamp: client.created_at + ' 08:30' })
  return (
    <div className="detail-card">
      <div className="detail-card-title">{t('tab_audit')}</div>
      <table className="admin-table">
        <thead><tr><th>{t('audit_action')}</th><th>{t('audit_actor')}</th><th>{t('audit_details')}</th><th>{t('audit_timestamp')}</th></tr></thead>
        <tbody>{logs.map((l, i) => (<tr key={i}><td><span className="badge badge-navy">{l.action}</span></td><td>{l.actor}</td><td style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>{l.details}</td><td style={{ fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>{l.timestamp}</td></tr>))}</tbody>
      </table>
    </div>
  )
}
