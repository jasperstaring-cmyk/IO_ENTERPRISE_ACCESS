import { useI18n } from '../../i18n'

// ─── Reusable contact field group ────────────────────────────────────────────
function ContactFields({ title, contactKey, data, updateContact, showPhone = true, hint = null }) {
  const { t } = useI18n()
  const contact = data[contactKey]

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{
        fontSize: '0.8125rem',
        fontWeight: 700,
        color: 'var(--navy)',
        marginBottom: '0.75rem',
        paddingBottom: '0.375rem',
        borderBottom: '1px solid var(--gray-200)',
      }}>
        {title}
      </div>

      {hint && (
        <div className="input-hint" style={{ marginBottom: '0.75rem', marginTop: '-0.25rem' }}>
          {hint}
        </div>
      )}

      <div className="gap-row">
        <div className="input-group">
          <label className="input-label">{t('wiz_contact_name')}</label>
          <input
            type="text"
            className="input-field"
            value={contact.name}
            onChange={e => updateContact(contactKey, 'name', e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label">{t('wiz_contact_email')}</label>
          <input
            type="email"
            className="input-field"
            value={contact.email}
            onChange={e => updateContact(contactKey, 'email', e.target.value)}
          />
        </div>
      </div>

      {showPhone && (
        <div className="input-group" style={{ maxWidth: '50%' }}>
          <label className="input-label">{t('wiz_contact_phone')}</label>
          <input
            type="tel"
            className="input-field"
            value={contact.phone || ''}
            onChange={e => updateContact(contactKey, 'phone', e.target.value)}
          />
        </div>
      )}
    </div>
  )
}

// ─── Step 2: Contact persons ─────────────────────────────────────────────────
// - Commercial contact (always)
// - Technical contact (only for SSO — receives secret expiry alerts)
// - Admin contact (always — client-side administrator)
export default function StepContacts({ data, updateContact, isSso }) {
  const { t } = useI18n()

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_contacts_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_contacts_sub')}</p>

      {/* Commercial contact — always required */}
      <ContactFields
        title={t('wiz_contact_commercial')}
        contactKey="contact_commercial"
        data={data}
        updateContact={updateContact}
      />

      {/* Technical contact — only for SSO clients */}
      {isSso && (
        <ContactFields
          title={t('wiz_contact_technical')}
          contactKey="contact_technical"
          data={data}
          updateContact={updateContact}
          hint={t('wiz_contact_tech_note')}
        />
      )}

      {/* Admin contact — always required */}
      <ContactFields
        title={t('wiz_contact_admin')}
        contactKey="contact_admin"
        data={data}
        updateContact={updateContact}
        showPhone={false}
      />
    </div>
  )
}
