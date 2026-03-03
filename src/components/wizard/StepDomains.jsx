import { useState } from 'react'
import { useI18n } from '../../i18n'

// ─── Step 3: Email domains ───────────────────────────────────────────────────
export default function StepDomains({ data, updateField }) {
  const { t } = useI18n()
  const [newDomain, setNewDomain] = useState('')
  const [error, setError] = useState('')

  const domains = data.domains || []

  const handleAdd = () => {
    // Clean up input: strip whitespace, lowercase, remove leading @
    let domain = newDomain.trim().toLowerCase()
    if (domain.startsWith('@')) domain = domain.slice(1)
    if (!domain) return

    // Duplicate check
    if (domains.some(d => d.domain === domain)) {
      setError(t('domain_duplicate_error'))
      return
    }

    const updated = [
      ...domains,
      { domain, is_primary: domains.length === 0 }
    ]
    updateField('domains', updated)
    setNewDomain('')
    setError('')
  }

  const handleRemove = (index) => {
    const updated = domains.filter((_, i) => i !== index)
    if (updated.length > 0 && !updated.some(d => d.is_primary)) {
      updated[0].is_primary = true
    }
    updateField('domains', updated)
  }

  const handleSetPrimary = (index) => {
    const updated = domains.map((d, i) => ({ ...d, is_primary: i === index }))
    updateField('domains', updated)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); handleAdd() }
  }

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_domains_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_domains_sub')}</p>

      {/* ── Add domain ── */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            className={`input-field ${error ? 'error' : ''}`}
            placeholder={t('domain_placeholder')}
            value={newDomain}
            onChange={e => { setNewDomain(e.target.value); setError('') }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button className="btn-navy" onClick={handleAdd} disabled={!newDomain.trim()} style={{ whiteSpace: 'nowrap' }}>
          + {t('domain_add')}
        </button>
      </div>
      {error && <div className="input-error">{error}</div>}

      {/* ── Domain list ── */}
      {domains.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('domain_name')}</th>
                <th style={{ width: 100, textAlign: 'center' }}>{t('domain_primary')}</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {domains.map((d, i) => (
                <tr key={i}>
                  <td><span style={{ fontWeight: 600 }}>@{d.domain}</span></td>
                  <td style={{ textAlign: 'center' }}>
                    <button onClick={() => handleSetPrimary(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }} title={t('domain_primary')}>
                      {d.is_primary
                        ? <span className="badge badge-green">★ {t('domain_primary')}</span>
                        : <span style={{ color: 'var(--gray-300)', fontSize: '0.875rem' }}>☆</span>
                      }
                    </button>
                  </td>
                  <td>
                    <button className="link-btn" onClick={() => handleRemove(i)} style={{ fontSize: '0.75rem' }}>{t('domain_remove')}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Empty state ── */}
      {domains.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)', fontSize: '0.875rem', border: '1px dashed var(--gray-300)', borderRadius: '6px', marginTop: '1rem' }}>
          {t('wiz_domains_sub')}
        </div>
      )}
    </div>
  )
}
