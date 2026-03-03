import { useState } from 'react'
import { useI18n } from '../../i18n'

// ─── Step 5: IP ranges (optional) ────────────────────────────────────────────
// - Add IP ranges with from, to, and label
// - Remove ranges
// - Can be skipped entirely
export default function StepIpRanges({ data, updateField }) {
  const { t } = useI18n()
  const [ipFrom, setIpFrom] = useState('')
  const [ipTo, setIpTo] = useState('')
  const [label, setLabel] = useState('')

  const ranges = data.ip_ranges || []

  const handleAdd = () => {
    if (!ipFrom.trim() || !ipTo.trim()) return
    const updated = [
      ...ranges,
      { ip_from: ipFrom.trim(), ip_to: ipTo.trim(), label: label.trim() }
    ]
    updateField('ip_ranges', updated)
    setIpFrom('')
    setIpTo('')
    setLabel('')
  }

  const handleRemove = (index) => {
    updateField('ip_ranges', ranges.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); handleAdd() }
  }

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_ip_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_ip_sub')}</p>

      {/* ── VPN note ── */}
      <div className="alert alert-info" style={{ marginBottom: '1.5rem' }}>
        {t('wiz_ip_vpn_note')}
      </div>

      {/* ── Add IP range ── */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 150px' }}>
          <label className="input-label">{t('ip_from')}</label>
          <input
            type="text"
            className="input-field"
            placeholder="192.168.1.0"
            value={ipFrom}
            onChange={e => setIpFrom(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div style={{ flex: '1 1 150px' }}>
          <label className="input-label">{t('ip_to')}</label>
          <input
            type="text"
            className="input-field"
            placeholder="192.168.1.255"
            value={ipTo}
            onChange={e => setIpTo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div style={{ flex: '1 1 180px' }}>
          <label className="input-label">{t('ip_label')}</label>
          <input
            type="text"
            className="input-field"
            placeholder="Head office"
            value={label}
            onChange={e => setLabel(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'flex-end' }}>
          <button
            className="btn-navy"
            onClick={handleAdd}
            disabled={!ipFrom.trim() || !ipTo.trim()}
            style={{ whiteSpace: 'nowrap', marginBottom: '1.125rem' }}
          >
            + {t('ip_add')}
          </button>
        </div>
      </div>

      {/* ── IP range list ── */}
      {ranges.length > 0 && (
        <div style={{ marginTop: '0.5rem' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>{t('ip_from')}</th>
                <th>{t('ip_to')}</th>
                <th>{t('ip_label')}</th>
                <th style={{ width: 80 }}></th>
              </tr>
            </thead>
            <tbody>
              {ranges.map((r, i) => (
                <tr key={i}>
                  <td><code style={{ fontSize: '0.8125rem' }}>{r.ip_from}</code></td>
                  <td><code style={{ fontSize: '0.8125rem' }}>{r.ip_to}</code></td>
                  <td>{r.label || '—'}</td>
                  <td>
                    <button className="link-btn" onClick={() => handleRemove(i)} style={{ fontSize: '0.75rem' }}>
                      {t('ip_remove')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Empty state ── */}
      {ranges.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '1.5rem', color: 'var(--gray-500)',
          fontSize: '0.875rem', border: '1px dashed var(--gray-300)',
          borderRadius: '6px', marginTop: '0.5rem',
        }}>
          {t('wiz_ip_skip')}
        </div>
      )}
    </div>
  )
}
