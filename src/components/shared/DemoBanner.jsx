import { useState } from 'react'
import { useI18n } from '../../i18n'

export default function DemoBanner({ view, setView, alertCount }) {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
  ]

  const scenarios = [
    { section: t('sidebar_section_request'), items: [
      { id: 'request', label: t('sidebar_request') },
    ]},
    { section: t('sidebar_section_ea'), items: [
      { id: 'overview', label: t('sidebar_clients'), badge: 5 },
      { id: 'wizard',   label: t('sidebar_new_client') },
      { id: 'alerts',   label: t('sidebar_alerts'), badge: alertCount },
    ]},
    { section: t('sidebar_section_view'), items: [
      { id: 'client-view', label: t('sidebar_client_admin') },
    ]},
  ]

  return (
    <div className="demo-banner-wrapper">
      {/* ── Collapsed bar ── */}
      <div className="demo-banner-bar">
        <div className="demo-banner-left">
          <span className="demo-banner-badge">Enterprise Access POC</span>
          <span className="demo-banner-hint">
            {open ? '' : t('demo_hint')}
          </span>
        </div>
        <div className="demo-banner-right">
          <div className="demo-banner-lang">
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`demo-lang-btn ${lang === l.code ? 'active' : ''}`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            className="demo-banner-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Collapse' : 'Expand'}
          >
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
            >
              <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── Expanded panel ── */}
      <div className={`demo-banner-panel ${open ? 'open' : ''}`}>
        <div className="demo-banner-panel-inner">
          {scenarios.map((group, gi) => (
            <div key={gi} className="demo-banner-group">
              <div className="demo-banner-group-label">{group.section}</div>
              <div className="demo-banner-group-items">
                {group.items.map(item => (
                  <button
                    key={item.id}
                    className={`demo-banner-item ${view === item.id ? 'active' : ''}`}
                    onClick={() => { setView(item.id); setOpen(false) }}
                  >
                    {item.label}
                    {item.badge > 0 && (
                      <span className="demo-banner-item-badge">{item.badge}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
