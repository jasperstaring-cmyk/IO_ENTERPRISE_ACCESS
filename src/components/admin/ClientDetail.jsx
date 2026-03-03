import { useState } from 'react'
import { useI18n } from '../../i18n'
import {
  TabGeneral, TabDomains, TabEditions, TabSso,
  TabIpRanges, TabContract, TabUserLimit, TabBlocklist, TabAudit,
} from './DetailTabs'

// ─── Tab configuration ───────────────────────────────────────────────────────
// SSO tab only visible for SSO clients
function getTabs(client) {
  const tabs = [
    { key: 'general',   label: 'tab_general' },
    { key: 'domains',   label: 'tab_domains' },
    { key: 'editions',  label: 'tab_editions' },
  ]
  if (client.access_type === 'sso') {
    tabs.push({ key: 'sso', label: 'tab_sso' })
  }
  tabs.push(
    { key: 'ip',        label: 'tab_ip_ranges' },
    { key: 'contract',  label: 'tab_contract' },
    { key: 'limit',     label: 'tab_user_limit' },
    { key: 'blocklist', label: 'tab_blocklist' },
    { key: 'audit',     label: 'tab_audit' },
  )
  return tabs
}

// ─── ClientDetail ────────────────────────────────────────────────────────────
export default function ClientDetail({ client, onBack }) {
  const { t } = useI18n()
  const tabs = getTabs(client)
  const [activeTab, setActiveTab] = useState('general')

  function renderTab() {
    switch (activeTab) {
      case 'general':   return <TabGeneral client={client} />
      case 'domains':   return <TabDomains client={client} />
      case 'editions':  return <TabEditions client={client} />
      case 'sso':       return <TabSso client={client} />
      case 'ip':        return <TabIpRanges client={client} />
      case 'contract':  return <TabContract client={client} />
      case 'limit':     return <TabUserLimit client={client} />
      case 'blocklist': return <TabBlocklist client={client} />
      case 'audit':     return <TabAudit client={client} />
      default:          return null
    }
  }

  return (
    <div>
      {/* ── Header with back button and client name ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        marginBottom: '1rem',
      }}>
        <button className="btn-back" onClick={onBack}>
          ← {t('btn_back')}
        </button>
        <div>
          <h2 style={{
            fontSize: '1.25rem', fontWeight: 800, color: 'var(--navy)',
            lineHeight: 1.3, margin: 0,
          }}>
            {client.name}
          </h2>
          <span className={`badge ${client.access_type === 'sso' ? 'badge-blue' : 'badge-navy'}`}
                style={{ marginTop: '0.25rem' }}>
            {client.access_type === 'sso' ? t('ov_type_sso') : t('ov_type_whitelist')}
          </span>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="admin-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`admin-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      {renderTab()}
    </div>
  )
}
