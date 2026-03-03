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
    { id: 'request', label: 'Enterprise request', desc: 'Prospective client fills in request form' },
    { id: 'wizard',  label: 'New client intake', desc: 'IO coordinator sets up enterprise client' },
    { id: 'overview', label: 'Client overview', desc: 'All enterprise clients at a glance', badge: 5 },
    { id: 'alerts',  label: 'Alerts & monitoring', desc: 'Expiring secrets and user limits', badge: alertCount },
    { id: 'client-view', label: 'Client admin view', desc: 'Enterprise admin renews secret' },
  ]

  return (
    <div className="demo-banner-wrapper">
      {/* Green accent line at very top */}
      <div className="demo-banner-accent" />

      {/* Main bar */}
      <div className="demo-banner-bar">
        <div className="demo-banner-center">
          <button className="demo-banner-toggle" onClick={() => setOpen(!open)}>
            <span className="demo-banner-badge">POC</span>
            <span className="demo-banner-toggle-label">
              {open ? 'HIDE TEST PANEL' : 'SHOW TEST PANEL'}
            </span>
            <svg
              width="12" height="8" viewBox="0 0 12 8" fill="none"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
            >
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="demo-banner-guide-btn" onClick={() => alert('POC Guide — coming soon')}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" style={{ marginRight: '0.375rem' }}>
              <rect x="0.5" y="0.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
              <path d="M4 3.5H10M4 6H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            POC Guide
          </button>
        </div>
      </div>

      {/* Expanded panel */}
      <div className={`demo-banner-panel ${open ? 'open' : ''}`}>
        <div className="demo-banner-panel-inner">
          {/* Scenarios column */}
          <div className="demo-banner-col demo-banner-col-wide">
            <div className="demo-banner-col-label">SCENARIOS</div>
            <div className="demo-banner-scenarios">
              {scenarios.map(item => (
                <button
                  key={item.id}
                  className={`demo-banner-scenario ${view === item.id ? 'active' : ''}`}
                  onClick={() => { setView(item.id); setOpen(false) }}
                >
                  <span className="demo-banner-scenario-name">
                    {item.label}
                    {item.badge > 0 && <span className="demo-banner-scenario-badge">{item.badge}</span>}
                  </span>
                  <span className="demo-banner-scenario-desc">{item.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Language column */}
          <div className="demo-banner-col">
            <div className="demo-banner-col-label">LANGUAGE</div>
            <div className="demo-banner-lang-grid">
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
          </div>
        </div>
      </div>
    </div>
  )
}
