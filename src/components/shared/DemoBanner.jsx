import { useState } from 'react'
import { useI18n } from '../../i18n'
import { ENTERPRISE_CLIENTS } from '../../data'
import PocGuide from './PocGuide'

export default function DemoBanner({ view, setView, alertCount, demoClient, setDemoClient }) {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const [guideOpen, setGuideOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'nl', label: 'NL' },
    { code: 'de', label: 'DE' },
    { code: 'fr', label: 'FR' },
  ]

  const ssoClients = ENTERPRISE_CLIENTS.filter(c => c.sso)

  return (
    <div className="demo-banner-wrapper">
      <div className="demo-banner-accent" />

      <div className="demo-banner-bar">
        <div className="demo-banner-center">
          <button className="demo-banner-toggle" onClick={() => setOpen(!open)}>
            <span className="demo-banner-badge">POC</span>
            <span className="demo-banner-toggle-label">
              {open ? 'HIDE TEST PANEL' : 'SHOW TEST PANEL'}
            </span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="demo-banner-guide-btn" onClick={() => setGuideOpen(true)}>
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

          {/* Group 1: External */}
          <div className="demo-banner-col">
            <div className="demo-banner-col-label">EXTERNAL</div>
            <div className="demo-banner-scenarios">
              <button className={`demo-banner-scenario ${view === 'request' ? 'active' : ''}`}
                onClick={() => setView('request')}>
                <span className="demo-banner-scenario-name">Enterprise request</span>
                <span className="demo-banner-scenario-desc">Prospective client</span>
              </button>
            </div>
          </div>

          {/* Group 2: IO Admin */}
          <div className="demo-banner-col demo-banner-col-wide">
            <div className="demo-banner-col-label">IO ADMIN</div>
            <div className="demo-banner-scenarios">
              <button className={`demo-banner-scenario ${view === 'wizard' ? 'active' : ''}`}
                onClick={() => setView('wizard')}>
                <span className="demo-banner-scenario-name">New client intake</span>
                <span className="demo-banner-scenario-desc">Intake wizard</span>
              </button>
              <button className={`demo-banner-scenario ${view === 'overview' ? 'active' : ''}`}
                onClick={() => setView('overview')}>
                <span className="demo-banner-scenario-name">Client overview
                  <span className="demo-banner-scenario-badge">5</span>
                </span>
                <span className="demo-banner-scenario-desc">All clients</span>
              </button>
              <button className={`demo-banner-scenario ${view === 'alerts' ? 'active' : ''}`}
                onClick={() => setView('alerts')}>
                <span className="demo-banner-scenario-name">Alerts & monitoring
                  {alertCount > 0 && <span className="demo-banner-scenario-badge demo-banner-scenario-badge-red">{alertCount}</span>}
                </span>
                <span className="demo-banner-scenario-desc">Secrets & limits</span>
              </button>
            </div>
          </div>

          {/* Group 3: Client Admin */}
          <div className="demo-banner-col">
            <div className="demo-banner-col-label">CLIENT ADMIN</div>
            <div className="demo-banner-scenarios">
              <button className={`demo-banner-scenario ${view === 'client-view' ? 'active' : ''}`}
                onClick={() => setView('client-view')}>
                <span className="demo-banner-scenario-name">Account page</span>
                <span className="demo-banner-scenario-desc">Enterprise admin view</span>
              </button>
            </div>
            {/* Client selector */}
            <div className="demo-banner-client-select">
              <div className="demo-banner-client-label">SIMULATE AS:</div>
              {ssoClients.map(c => (
                <button key={c.id}
                  className={`demo-banner-client-btn ${demoClient?.id === c.id ? 'active' : ''}`}
                  onClick={() => { setDemoClient(c); setView('client-view') }}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="demo-banner-col demo-banner-col-narrow">
            <div className="demo-banner-col-label">LANGUAGE</div>
            <div className="demo-banner-lang-grid">
              {languages.map(l => (
                <button key={l.code} onClick={() => setLang(l.code)}
                  className={`demo-lang-btn ${lang === l.code ? 'active' : ''}`}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {guideOpen && <PocGuide onClose={() => setGuideOpen(false)} />}
    </div>
  )
}
