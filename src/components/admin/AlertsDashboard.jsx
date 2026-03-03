import { useMemo } from 'react'
import { useI18n } from '../../i18n'
import { ENTERPRISE_CLIENTS, daysUntilExpiry, expirySeverity } from '../../data'

// ─── Build alerts from client data ──────────────────────────────────────────
function buildAlerts(clients) {
  const alerts = []

  clients.forEach(client => {
    // Secret expiry alerts (only for SSO clients)
    if (client.sso) {
      const days = daysUntilExpiry(client.sso.secret_expires_at)
      const sev = expirySeverity(client.sso.secret_expires_at)

      if (days <= 0) {
        alerts.push({
          type: 'expired',
          severity: 'red',
          client,
          days: 0,
          date: client.sso.secret_expires_at,
        })
      } else if (sev === 'red') {
        alerts.push({
          type: 'expiry',
          severity: 'red',
          client,
          days,
          date: client.sso.secret_expires_at,
        })
      } else if (sev === 'orange') {
        alerts.push({
          type: 'expiry',
          severity: 'orange',
          client,
          days,
          date: client.sso.secret_expires_at,
        })
      }
    }

    // User limit alerts (> 80% usage)
    const pct = Math.round((client.active_users / client.max_users) * 100)
    if (pct >= 80) {
      alerts.push({
        type: 'limit',
        severity: pct >= 95 ? 'red' : 'orange',
        client,
        pct,
      })
    }
  })

  // Sort: red first, then orange
  alerts.sort((a, b) => {
    const order = { red: 0, orange: 1 }
    return (order[a.severity] ?? 2) - (order[b.severity] ?? 2)
  })

  return alerts
}

// ─── Alert card ──────────────────────────────────────────────────────────────
function AlertCard({ alert, t, onViewClient }) {
  const isExpiry = alert.type === 'expiry' || alert.type === 'expired'
  const isLimit = alert.type === 'limit'

  const borderColor = alert.severity === 'red' ? 'var(--red)' : '#F5A623'
  const bgColor = alert.severity === 'red' ? '#FFF0F3' : '#FFF8E6'
  const icon = alert.type === 'expired' ? '🔴' : alert.type === 'expiry' ? '⚠️' : '📊'

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '1rem',
      padding: '1rem 1.25rem', borderRadius: '8px',
      border: `1.5px solid ${borderColor}`, background: bgColor,
      marginBottom: '0.75rem',
    }}>
      <div style={{ fontSize: '1.25rem', flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)',
          marginBottom: '0.25rem',
        }}>
          {isExpiry && alert.type === 'expired' && t('alert_title_expired')}
          {isExpiry && alert.type === 'expiry' && t('alert_title_expiry')}
          {isLimit && t('alert_title_limit')}
        </div>

        <div style={{ fontSize: '0.8125rem', color: 'var(--gray-700)', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 600 }}>{alert.client.name}</span>
          {isExpiry && alert.days > 0 && (
            <span> — {t('alert_days_prefix')} {alert.days} {t('alert_days_suffix')} ({alert.date})</span>
          )}
          {isExpiry && alert.days <= 0 && (
            <span> — {alert.date}</span>
          )}
          {isLimit && (
            <span> — {alert.client.active_users} / {alert.client.max_users} ({alert.pct}%)</span>
          )}
        </div>

        <button
          className="btn-outline"
          style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}
          onClick={() => onViewClient(alert.client)}
        >
          {t('alert_view_client')}
        </button>
      </div>

      <div>
        <span className={`badge ${alert.severity === 'red' ? 'badge-red' : 'badge-orange'}`}>
          <span className={`badge-dot ${alert.severity === 'red' ? 'badge-dot-red' : 'badge-dot-orange'}`} />
          {alert.severity === 'red' ? 'High' : 'Warning'}
        </span>
      </div>
    </div>
  )
}

// ─── AlertsDashboard ─────────────────────────────────────────────────────────
export default function AlertsDashboard({ onViewClient }) {
  const { t } = useI18n()

  const alerts = useMemo(() => buildAlerts(ENTERPRISE_CLIENTS), [])

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Summary */}
      <div style={{
        display: 'flex', gap: '1rem', marginBottom: '1.5rem',
      }}>
        <div className="detail-card" style={{ flex: 1, textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--red)' }}>
            {alerts.filter(a => a.severity === 'red').length}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Critical
          </div>
        </div>
        <div className="detail-card" style={{ flex: 1, textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#B35C00' }}>
            {alerts.filter(a => a.severity === 'orange').length}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Warning
          </div>
        </div>
        <div className="detail-card" style={{ flex: 1, textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--navy)' }}>
            {ENTERPRISE_CLIENTS.length}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Total clients
          </div>
        </div>
      </div>

      {/* Alert list */}
      {alerts.length > 0 ? (
        alerts.map((alert, i) => (
          <AlertCard
            key={i}
            alert={alert}
            t={t}
            onViewClient={onViewClient || (() => {})}
          />
        ))
      ) : (
        <div className="detail-card" style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)' }}>
          No active alerts.
        </div>
      )}
    </div>
  )
}
