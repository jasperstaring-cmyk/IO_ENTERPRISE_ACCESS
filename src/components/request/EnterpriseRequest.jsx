import { useState, useEffect } from 'react'
import { useI18n } from '../../i18n'

const DB_COMPANIES = [
  { name: "BlackRock Inc.", legal: "BlackRock, Inc.", country: "GB", address: "12 Throgmorton Avenue, London EC2N 2DL", kvk: "OC301011", vat: "GB 845 0304 29", duns: "21-716-5214" },
  { name: "Robeco Institutional Asset Management", legal: "Robeco Institutional Asset Management B.V.", country: "NL", address: "Weena 850, 3014 DA Rotterdam", kvk: "24123167", vat: "NL 0044.08.535.B01", duns: "40-195-8497" },
  { name: "ABN AMRO Bank", legal: "ABN AMRO Bank N.V.", country: "NL", address: "Gustav Mahlerlaan 10, 1082 PP Amsterdam", kvk: "34334259", vat: "NL 8200.70.664.B01", duns: "40-153-7498" },
  { name: "ING Group", legal: "ING Groep N.V.", country: "NL", address: "Bijlmerdreef 106, 1102 CT Amsterdam", kvk: "33231073", vat: "NL 0060.32.076.B01", duns: "40-206-8751" },
  { name: "Goldman Sachs International", legal: "Goldman Sachs International", country: "GB", address: "Plumtree Court, 25 Shoe Lane, London EC4A 4AU", kvk: "02263951", vat: "GB 447 2649 28", duns: "23-108-6421" },
  { name: "BNP Paribas Asset Management", legal: "BNP Paribas Asset Management France SAS", country: "FR", address: "1 Boulevard Haussmann, 75009 Paris", kvk: "319 378 832", vat: "FR 76 319 378 832", duns: "22-067-4198" },
  { name: "Deutsche Bank AG", legal: "Deutsche Bank Aktiengesellschaft", country: "DE", address: "Taunusanlage 12, 60325 Frankfurt am Main", kvk: "HRB 30000", vat: "DE 114 103 514", duns: "31-442-7653" },
  { name: "Achmea Investment Management", legal: "Achmea Investment Management B.V.", country: "NL", address: "Handelsweg 2, 3707 NH Zeist", kvk: "30053902", vat: "NL 0089.49.585.B01", duns: "40-182-5639" },
]

const COUNTRIES = [
  { code: "", label: "--- Select country ---" },
  { code: "NL", label: "Netherlands" }, { code: "BE", label: "Belgium" },
  { code: "LU", label: "Luxembourg" }, { code: "DE", label: "Germany" },
  { code: "FR", label: "France" }, { code: "GB", label: "United Kingdom" },
  { code: "CH", label: "Switzerland" }, { code: "US", label: "United States" },
  { code: "---", label: "---" },
  { code: "AF", label: "Afghanistan" }, { code: "AL", label: "Albania" },
  { code: "DZ", label: "Algeria" }, { code: "AD", label: "Andorra" },
  { code: "AO", label: "Angola" }, { code: "AR", label: "Argentina" },
  { code: "AM", label: "Armenia" }, { code: "AU", label: "Australia" },
  { code: "AT", label: "Austria" }, { code: "AZ", label: "Azerbaijan" },
  { code: "BH", label: "Bahrain" }, { code: "BD", label: "Bangladesh" },
  { code: "BY", label: "Belarus" }, { code: "BA", label: "Bosnia and Herzegovina" },
  { code: "BR", label: "Brazil" }, { code: "BG", label: "Bulgaria" },
  { code: "CA", label: "Canada" }, { code: "CL", label: "Chile" },
  { code: "CN", label: "China" }, { code: "CO", label: "Colombia" },
  { code: "HR", label: "Croatia" }, { code: "CY", label: "Cyprus" },
  { code: "CZ", label: "Czech Republic" }, { code: "DK", label: "Denmark" },
  { code: "EG", label: "Egypt" }, { code: "EE", label: "Estonia" },
  { code: "FI", label: "Finland" }, { code: "GE", label: "Georgia" },
  { code: "GR", label: "Greece" }, { code: "HK", label: "Hong Kong" },
  { code: "HU", label: "Hungary" }, { code: "IS", label: "Iceland" },
  { code: "IN", label: "India" }, { code: "ID", label: "Indonesia" },
  { code: "IE", label: "Ireland" }, { code: "IL", label: "Israel" },
  { code: "IT", label: "Italy" }, { code: "JP", label: "Japan" },
  { code: "JO", label: "Jordan" }, { code: "KZ", label: "Kazakhstan" },
  { code: "KE", label: "Kenya" }, { code: "KW", label: "Kuwait" },
  { code: "LV", label: "Latvia" }, { code: "LB", label: "Lebanon" },
  { code: "LI", label: "Liechtenstein" }, { code: "LT", label: "Lithuania" },
  { code: "MY", label: "Malaysia" }, { code: "MT", label: "Malta" },
  { code: "MX", label: "Mexico" }, { code: "MC", label: "Monaco" },
  { code: "MA", label: "Morocco" }, { code: "NZ", label: "New Zealand" },
  { code: "NG", label: "Nigeria" }, { code: "NO", label: "Norway" },
  { code: "OM", label: "Oman" }, { code: "PK", label: "Pakistan" },
  { code: "PA", label: "Panama" }, { code: "PE", label: "Peru" },
  { code: "PH", label: "Philippines" }, { code: "PL", label: "Poland" },
  { code: "PT", label: "Portugal" }, { code: "QA", label: "Qatar" },
  { code: "RO", label: "Romania" }, { code: "RU", label: "Russia" },
  { code: "SA", label: "Saudi Arabia" }, { code: "RS", label: "Serbia" },
  { code: "SG", label: "Singapore" }, { code: "SK", label: "Slovakia" },
  { code: "SI", label: "Slovenia" }, { code: "ZA", label: "South Africa" },
  { code: "KR", label: "South Korea" }, { code: "ES", label: "Spain" },
  { code: "SE", label: "Sweden" }, { code: "TW", label: "Taiwan" },
  { code: "TH", label: "Thailand" }, { code: "TR", label: "Turkey" },
  { code: "UA", label: "Ukraine" }, { code: "AE", label: "United Arab Emirates" },
  { code: "UY", label: "Uruguay" }, { code: "VN", label: "Vietnam" },
]

function Row({ label, children }) {
  return (
    <div className="detail-row">
      <div className="detail-label">{label}</div>
      <div className="detail-value">{children}</div>
    </div>
  )
}

function RequestSidebar({ t }) {
  const features = [
    t('req_sidebar_f1'), t('req_sidebar_f2'), t('req_sidebar_f3'),
    t('req_sidebar_f4'), t('req_sidebar_f5'),
  ]
  return (
    <aside className="reg-sidebar">
      <div className="req-sidebar-visual">
        <div className="req-sidebar-visual-inner">
          <div className="req-sidebar-device req-sidebar-laptop" />
          <div className="req-sidebar-device req-sidebar-phone" />
        </div>
      </div>
      <div className="reg-sidebar-card">
        <div className="req-sidebar-plan-label">{t('req_sidebar_plan_label')}</div>
        <div className="req-sidebar-plan-name">Enterprise</div>
        <div className="req-sidebar-price-label">{t('req_sidebar_price_label')}</div>
        <div className="req-sidebar-price">&euro; &mdash;,&mdash;</div>
        <div className="req-sidebar-price-note">{t('req_sidebar_price_note')}</div>
        <div className="req-sidebar-cta">{t('req_sidebar_cta')}</div>
        <div className="req-sidebar-features-label">{t('req_sidebar_features_label')}</div>
        {features.map((f, i) => (
          <div key={i} className="req-sidebar-feature">
            <span className="req-sidebar-check">&#10003;</span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <div className="reg-sidebar-card req-sidebar-help">
        <div className="req-sidebar-help-icon">&#128172;</div>
        <div>
          <div className="req-sidebar-help-title">{t('req_sidebar_help_title')}</div>
          <div className="req-sidebar-help-sub">{t('req_sidebar_help_sub')}</div>
        </div>
        <div className="req-sidebar-help-arrow">&rsaquo;</div>
      </div>
    </aside>
  )
}

export default function EnterpriseRequest({ onCancel }) {
  const { t } = useI18n()
  const [country, setCountry] = useState('')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selected, setSelected] = useState(null)
  const [contact, setContact] = useState({ name: '', email: '', phone: '' })
  const [accessType, setAccessType] = useState('')
  const [editionChoice, setEditionChoice] = useState('')
  const [singleEdition, setSingleEdition] = useState('nl')
  const [estUsers, setEstUsers] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (query.length >= 3 && country) {
      const q = query.toLowerCase()
      const m = DB_COMPANIES.filter(c =>
        (c.name.toLowerCase().includes(q) || c.legal.toLowerCase().includes(q)) && c.country === country
      )
      setResults(m)
      setShowResults(m.length > 0)
    } else {
      setResults([])
      setShowResults(false)
    }
  }, [query, country])

  const handleSelect = (company) => {
    setSelected(company)
    setQuery(company.name)
    setShowResults(false)
  }

  const canSubmit = selected && contact.name.trim() && contact.email.trim() && accessType && editionChoice && estUsers

  if (submitted) {
    return (
      <>
        <div className="reg-main" style={{ maxWidth: 600, textAlign: 'center', padding: '3rem 2rem' }}>
          <img src="/io_horizontal_black_10x.png" alt="Investment Officer" style={{ height: 26, marginBottom: '1.5rem' }} />
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>&#9989;</div>
          <h2 className="wizard-step-title">{t('req_submitted_title')}</h2>
          <p className="detail-card-sub" style={{ maxWidth: 'none', marginBottom: '1.5rem' }}>
            {t('req_submitted_msg')}
          </p>
          <button className="btn-primary" onClick={onCancel}>{t('btn_close')}</button>
        </div>
        <RequestSidebar t={t} />
      </>
    )
  }

  return (
    <>
      {/* Left: form in white card */}
      <div className="reg-main">
        <img src="/io_horizontal_black_10x.png" alt="Investment Officer" className="admin-logo" style={{ marginBottom: '1.25rem' }} />
        <div className="req-badge">{t('req_badge')}</div>
        <h2 className="reg-step-title">{t('topbar_request')}</h2>
        <p className="reg-step-sub">{t('req_form_intro')}</p>

        {/* Section 1: Organisation */}
        <div className="section-title">{t('req_org_title')}</div>
        <div className="input-group">
          <label className="input-label">{t('req_country')}</label>
          <select className="input-field" value={country}
            onChange={e => { setCountry(e.target.value); setSelected(null); setQuery('') }}>
            {COUNTRIES.map((c, i) =>
              c.code === '---'
                ? <option key={i} disabled>{'---'.repeat(10)}</option>
                : <option key={c.code || 'empty'} value={c.code}>{c.label}</option>
            )}
          </select>
        </div>

        {country && (
          <div className="input-group" style={{ position: 'relative' }}>
            <label className="input-label">{t('req_search_company')}</label>
            <input type="text" className="input-field"
              placeholder={t('req_search_ph')} value={query}
              onChange={e => { setQuery(e.target.value); setSelected(null) }}
              onFocus={() => results.length > 0 && setShowResults(true)}
            />
            <div className="input-hint">{t('req_search_hint')}</div>
            {showResults && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 10,
                background: '#fff', border: '1.5px solid var(--gray-300)', borderRadius: '6px',
                boxShadow: '0 4px 16px rgba(12,24,46,0.12)', maxHeight: 280, overflowY: 'auto',
              }}>
                {results.map((c, i) => (
                  <button key={i} type="button" onClick={() => handleSelect(c)}
                    style={{
                      display: 'block', width: '100%', padding: '0.75rem 1rem',
                      border: 'none', borderBottom: '1px solid var(--gray-100)',
                      background: 'none', cursor: 'pointer', textAlign: 'left',
                      fontFamily: 'var(--font-sans)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-50)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)' }}>{c.legal}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>{c.address}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {selected && (
          <div style={{
            marginTop: '1rem', padding: '1rem 1.25rem', borderRadius: '8px',
            border: '1.5px solid var(--navy)', background: 'rgba(12,24,46,0.02)',
          }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '0.75rem', lineHeight: 'var(--lh-heading)' }}>
              {selected.legal}
            </div>
            <Row label={t('req_address')}>{selected.address}</Row>
            <Row label={t('req_kvk')}>{selected.kvk}</Row>
            <Row label={t('req_vat')}>{selected.vat}</Row>
            {selected.duns && <Row label={t('req_duns')}>{selected.duns}</Row>}
          </div>
        )}

        {/* Section 2: Contact */}
        <div className="section-title">{t('req_contact_title')}</div>
        <p className="detail-card-sub" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
          {t('req_contact_sub')}
        </p>
        <div className="input-group">
          <label className="input-label">{t('wiz_contact_name')}</label>
          <input type="text" className="input-field" value={contact.name}
            onChange={e => setContact({...contact, name: e.target.value})} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1rem' }}>
          <div className="input-group">
            <label className="input-label">{t('wiz_contact_email')}</label>
            <input type="email" className="input-field" value={contact.email}
              onChange={e => setContact({...contact, email: e.target.value})} />
          </div>
          <div className="input-group">
            <label className="input-label">{t('wiz_contact_phone')}</label>
            <input type="tel" className="input-field" value={contact.phone}
              onChange={e => setContact({...contact, phone: e.target.value})} />
          </div>
        </div>

        {/* Section 3: Access */}
        <div className="section-title">{t('req_access_title')}</div>
        <div className="input-group" style={{ marginBottom: '1.25rem' }}>
          <label className="input-label">{t('req_access_type')}</label>
          <button type="button" className={`sel-row ${accessType === 'whitelist' ? 'selected' : ''}`}
            onClick={() => setAccessType('whitelist')}>
            <div className={`sel-dot ${accessType === 'whitelist' ? 'checked' : ''}`}>
              {accessType === 'whitelist' && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
            </div>
            <div>
              <div className="sel-row-name">{t('req_type_wl')}</div>
              <div className="sel-row-desc">{t('req_type_wl_desc')}</div>
            </div>
          </button>
          <button type="button" className={`sel-row ${accessType === 'sso' ? 'selected' : ''}`}
            onClick={() => setAccessType('sso')}>
            <div className={`sel-dot ${accessType === 'sso' ? 'checked' : ''}`}>
              {accessType === 'sso' && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
            </div>
            <div>
              <div className="sel-row-name">{t('req_type_sso')}</div>
              <div className="sel-row-desc">{t('req_type_sso_desc')}</div>
            </div>
          </button>
        </div>

        <div className="input-group" style={{ marginBottom: '1.25rem' }}>
          <label className="input-label">{t('req_editions')}</label>
          <button type="button" className={`sel-row ${editionChoice === 'single' ? 'selected' : ''}`}
            onClick={() => setEditionChoice('single')}>
            <div className={`sel-dot ${editionChoice === 'single' ? 'checked' : ''}`}>
              {editionChoice === 'single' && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
            </div>
            <div className="sel-row-name">{t('req_edition_single')}</div>
          </button>
          {editionChoice === 'single' && (
            <div style={{ marginLeft: '2.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <select className="input-field" value={singleEdition}
                onChange={e => setSingleEdition(e.target.value)} style={{ maxWidth: 200 }}>
                <option value="nl">{t('edition_nl')}</option>
                <option value="be">{t('edition_be')}</option>
                <option value="lu">{t('edition_lu')}</option>
                <option value="de">{t('edition_de')}</option>
                <option value="fr">{t('edition_fr')}</option>
              </select>
            </div>
          )}
          <button type="button" className={`sel-row ${editionChoice === 'all' ? 'selected' : ''}`}
            onClick={() => setEditionChoice('all')}>
            <div className={`sel-dot ${editionChoice === 'all' ? 'checked' : ''}`}>
              {editionChoice === 'all' && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="3" fill="#fff" /></svg>}
            </div>
            <div className="sel-row-name">{t('req_edition_all')}</div>
          </button>
        </div>

        <div className="input-group">
          <label className="input-label">{t('req_est_users')}</label>
          <select className="input-field" value={estUsers}
            onChange={e => setEstUsers(e.target.value)} style={{ maxWidth: 200 }}>
            <option value="">{t('req_est_select')}</option>
            <option value="1-50">1 - 50</option>
            <option value="50-100">50 - 100</option>
            <option value="100-250">100 - 250</option>
            <option value="250-500">250 - 500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        {/* Submit */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-200)' }}>
          <div className="alert alert-info" style={{ marginBottom: '1.25rem' }}>
            {t('req_review_note')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="btn-back" onClick={onCancel} style={{ flexShrink: 0 }}>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button className="btn-red" disabled={!canSubmit} onClick={() => setSubmitted(true)}>
              {t('req_submit')}
            </button>
          </div>
        </div>
      </div>

      {/* Right: sidebar */}
      <RequestSidebar t={t} />
    </>
  )
}
