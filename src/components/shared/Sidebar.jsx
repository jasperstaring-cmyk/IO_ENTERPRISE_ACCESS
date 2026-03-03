import { useI18n } from '../../i18n'

export default function Sidebar({ view, setView, alertCount }) {
  const { t, lang, setLang } = useI18n()

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
  ]

  function NavBtn({ id, label, badge }) {
    return (
      <button className={`admin-sidebar-item ${view === id ? 'active' : ''}`} onClick={() => setView(id)}>
        {t(label)}
        {badge > 0 && <span className="admin-sidebar-badge">{badge}</span>}
      </button>
    )
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">{t('app_title')}</div>
      <div className="admin-sidebar-section">{t('sidebar_section_request')}</div>
      <NavBtn id="request" label="sidebar_request" />
      <div className="admin-sidebar-section">{t('sidebar_section_ea')}</div>
      <NavBtn id="overview" label="sidebar_clients" badge={5} />
      <NavBtn id="wizard" label="sidebar_new_client" />
      <NavBtn id="alerts" label="sidebar_alerts" badge={alertCount} />
      <div className="admin-sidebar-section">{t('sidebar_section_view')}</div>
      <NavBtn id="client-view" label="sidebar_client_admin" />
      <div className="admin-sidebar-section">LANGUAGE</div>
      <div style={{ display: 'flex', gap: '0.25rem', padding: '0 0.75rem' }}>
        {languages.map(l => (
          <button key={l.code} onClick={() => setLang(l.code)} style={{ padding: '0.375rem 0.5rem', borderRadius: '4px', border: '1.5px solid', borderColor: lang === l.code ? '#fff' : 'rgba(255,255,255,0.2)', background: lang === l.code ? 'rgba(255,255,255,0.15)' : 'transparent', color: '#fff', fontSize: '0.6875rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
            {l.label}
          </button>
        ))}
      </div>
    </aside>
  )
}
