import { useState, useMemo } from 'react'
import { useI18n } from '../../i18n'
import { ENTERPRISE_CLIENTS, daysUntilExpiry, expirySeverity } from '../../data'

// ─── Expiry badge ────────────────────────────────────────────────────────────
function ExpiryBadge({ dateStr, t }) {
  if (!dateStr) return <span className="text-gray">{t('expiry_na')}</span>

  const days = daysUntilExpiry(dateStr)
  const severity = expirySeverity(dateStr)

  if (days <= 0) {
    return (
      <span className="badge badge-red">
        <span className="badge-dot badge-dot-red" /> {t('expiry_expired')}
      </span>
    )
  }

  const badgeClass = severity === 'red' ? 'badge-red' : severity === 'orange' ? 'badge-orange' : 'badge-green'
  const dotClass = severity === 'red' ? 'badge-dot-red' : severity === 'orange' ? 'badge-dot-orange' : 'badge-dot-green'
  const label = t('expiry_days').replace('{n}', days)

  return (
    <span className={`badge ${badgeClass}`}>
      <span className={`badge-dot ${dotClass}`} /> {label}
    </span>
  )
}

// ─── Status badge ────────────────────────────────────────────────────────────
function StatusBadge({ status, ssoStatus, t }) {
  // For SSO clients, show SSO-level status if problematic
  if (ssoStatus === 'expired') {
    return (
      <span className="badge badge-red">
        <span className="badge-dot badge-dot-red" /> {t('status_expired')}
      </span>
    )
  }
  if (ssoStatus === 'error') {
    return (
      <span className="badge badge-red">
        <span className="badge-dot badge-dot-red" /> {t('status_error')}
      </span>
    )
  }
  if (ssoStatus === 'configuring') {
    return (
      <span className="badge badge-blue">
        <span className="badge-dot" style={{ background: '#7B9FE0' }} /> {t('status_configuring')}
      </span>
    )
  }

  // Otherwise show organisation-level status
  const map = {
    active:    { badge: 'badge-green',  dot: 'badge-dot-green',  key: 'status_active' },
    draft:     { badge: 'badge-gray',   dot: 'badge-dot-gray',   key: 'status_draft' },
    suspended: { badge: 'badge-orange', dot: 'badge-dot-orange', key: 'status_suspended' },
    archived:  { badge: 'badge-gray',   dot: 'badge-dot-gray',   key: 'status_archived' },
  }
  const cfg = map[status] || map.active
  return (
    <span className={`badge ${cfg.badge}`}>
      <span className={`badge-dot ${cfg.dot}`} /> {t(cfg.key)}
    </span>
  )
}

// ─── ClientOverview ──────────────────────────────────────────────────────────
export default function ClientOverview({ onSelectClient }) {
  const { t } = useI18n()
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  // Filter and search
  const filtered = useMemo(() => {
    return ENTERPRISE_CLIENTS.filter(client => {
      // Type filter
      if (filterType !== 'all' && client.access_type !== filterType) return false

      // Status filter
      if (filterStatus !== 'all') {
        if (filterStatus === 'expired' && client.sso?.status !== 'expired') return false
        if (filterStatus === 'active' && client.status !== 'active') return false
        if (filterStatus === 'error' && client.sso?.status !== 'error') return false
      }

      // Search by name or domain
      if (search.trim()) {
        const q = search.toLowerCase()
        const nameMatch = client.name.toLowerCase().includes(q)
        const domainMatch = client.domains.some(d => d.domain.toLowerCase().includes(q))
        if (!nameMatch && !domainMatch) return false
      }

      return true
    })
  }, [search, filterType, filterStatus])

  return (
    <div>
      {/* ── Toolbar: search + filters ── */}
      <div style={{
        display: 'flex', gap: '0.75rem', marginBottom: '1rem',
        flexWrap: 'wrap', alignItems: 'center',
      }}>
        {/* Search */}
        <div style={{ flex: '1 1 250px' }}>
          <input
            type="text"
            className="input-field"
            placeholder={t('ov_search_placeholder')}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ fontSize: '0.8125rem', padding: '0.5rem 0.75rem' }}
          />
        </div>

        {/* Type filter */}
        <div style={{ display: 'flex', gap: '2px' }}>
          {['all', 'sso', 'whitelist'].map(val => (
            <button
              key={val}
              className={filterType === val ? 'btn-navy' : 'btn-outline'}
              onClick={() => setFilterType(val)}
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
            >
              {val === 'all' ? t('ov_filter_all') : val === 'sso' ? t('ov_type_sso') : t('ov_type_whitelist')}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div style={{ display: 'flex', gap: '2px' }}>
          {['all', 'active', 'expired'].map(val => (
            <button
              key={val}
              className={filterStatus === val ? 'btn-navy' : 'btn-outline'}
              onClick={() => setFilterStatus(val)}
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
            >
              {val === 'all' ? t('ov_filter_all') : val === 'active' ? t('status_active') : t('status_expired')}
            </button>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      {filtered.length > 0 ? (
        <table className="admin-table">
          <thead>
            <tr>
              <th>{t('ov_name')}</th>
              <th>{t('ov_type')}</th>
              <th>{t('ov_users')}</th>
              <th>{t('ov_domains')}</th>
              <th>{t('ov_editions')}</th>
              <th>{t('ov_status')}</th>
              <th>{t('ov_secret_expiry')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(client => (
              <tr
                key={client.id}
                className="admin-table-clickable"
                onClick={() => onSelectClient(client)}
              >
                {/* Name */}
                <td>
                  <div style={{ fontWeight: 700 }}>{client.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>
                    {client.domains.map(d => d.domain).join(', ')}
                  </div>
                </td>

                {/* Type */}
                <td>
                  <span className={`badge ${client.access_type === 'sso' ? 'badge-blue' : 'badge-navy'}`}>
                    {client.access_type === 'sso' ? t('ov_type_sso') : t('ov_type_whitelist')}
                  </span>
                </td>

                {/* Users */}
                <td>
                  <span style={{ fontWeight: 600 }}>{client.active_users}</span>
                  <span style={{ color: 'var(--gray-500)', fontSize: '0.75rem' }}> / {client.max_users}</span>
                </td>

                {/* Domains count */}
                <td>{client.domains.length}</td>

                {/* Editions */}
                <td>
                  {client.editions.map(ed => (
                    <span key={ed} className="edition-pill">{ed}</span>
                  ))}
                </td>

                {/* Status */}
                <td>
                  <StatusBadge
                    status={client.status}
                    ssoStatus={client.sso?.status}
                    t={t}
                  />
                </td>

                {/* Secret expiry */}
                <td>
                  {client.sso
                    ? <ExpiryBadge dateStr={client.sso.secret_expires_at} t={t} />
                    : <span className="text-gray">{t('expiry_na')}</span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{
          textAlign: 'center', padding: '3rem',
          color: 'var(--gray-500)', fontSize: '0.875rem',
        }}>
          {t('ov_no_results')}
        </div>
      )}
    </div>
  )
}
