import { useI18n } from '../../i18n'
import LanguageSwitcher from '../shared/LanguageSwitcher'

export default function Sidebar({ view, setView, alertCount = 2 }) {
  const { t } = useI18n()

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">{t('app_title')}</div>

      <div className="admin-sidebar-section">
        <div className="admin-sidebar-label">{t('sidebar_section_ea')}</div>
        <button
          className={`admin-sidebar-link ${view === 'overview' ? 'active' : ''}`}
          onClick={() => setView('overview')}
        >
          <span>📋</span> {t('sidebar_clients')}
          <span className="admin-sidebar-badge">5</span>
        </button>
        <button
          className={`admin-sidebar-link ${view === 'wizard' ? 'active' : ''}`}
          onClick={() => setView('wizard')}
        >
          <span>➕</span> {t('sidebar_new_client')}
        </button>
        <button
          className={`admin-sidebar-link ${view === 'alerts' ? 'active' : ''}`}
          onClick={() => setView('alerts')}
        >
          <span>🔔</span> {t('sidebar_alerts')}
          {alertCount > 0 && <span className="admin-sidebar-badge">{alertCount}</span>}
        </button>
      </div>

      <div className="admin-sidebar-section" style={{ marginTop: '1.5rem' }}>
        <div className="admin-sidebar-label">{t('sidebar_section_view')}</div>
        <button
          className={`admin-sidebar-link ${view === 'client-view' ? 'active' : ''}`}
          onClick={() => setView('client-view')}
        >
          <span>👤</span> {t('sidebar_client_admin')}
        </button>
      </div>

      <div className="admin-sidebar-section" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <div className="admin-sidebar-label">Language</div>
        <div style={{ padding: '0.25rem 0.5rem' }}>
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  )
}
