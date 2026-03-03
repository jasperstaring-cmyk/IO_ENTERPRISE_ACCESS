import { useI18n } from '../../i18n'

function Row({ label, children }) {
  return (
    <div className="detail-row">
      <div className="detail-label">{label}</div>
      <div className="detail-value">{children}</div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{
        fontSize: '0.8125rem', fontWeight: 700, color: 'var(--navy)',
        paddingBottom: '0.5rem', marginBottom: '0.75rem',
        borderBottom: '1px solid var(--gray-200)',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default function StepReview({ data }) {
  const { t } = useI18n()
  const isSso = data.access_type === 'sso'

  return (
    <div>
      <h2 className="wizard-step-title">{t('wiz_review_title')}</h2>
      <p className="wizard-step-sub">{t('wiz_review_sub')}</p>

      <Section title={t('wiz_step_org')}>
        <Row label={t('detail_org_name')}>{data.org_name || '—'}</Row>
        <Row label={t('detail_type')}>
          <span className={`badge ${isSso ? 'badge-blue' : 'badge-navy'}`}>
            {isSso ? t('ov_type_sso') : t('ov_type_whitelist')}
          </span>
        </Row>
      </Section>

      <Section title={t('wiz_step_contacts')}>
        <Row label={t('wiz_contact_commercial')}>
          {data.contact_commercial.name || '—'}
          {data.contact_commercial.email && <span style={{ color: 'var(--gray-500)', marginLeft: '0.5rem', fontSize: '0.8125rem' }}>({data.contact_commercial.email})</span>}
        </Row>
        {isSso && (
          <Row label={t('wiz_contact_technical')}>
            {data.contact_technical.name || '—'}
            {data.contact_technical.email && <span style={{ color: 'var(--gray-500)', marginLeft: '0.5rem', fontSize: '0.8125rem' }}>({data.contact_technical.email})</span>}
          </Row>
        )}
        <Row label={t('wiz_contact_admin')}>
          {data.contact_admin.name || '—'}
          {data.contact_admin.email && <span style={{ color: 'var(--gray-500)', marginLeft: '0.5rem', fontSize: '0.8125rem' }}>({data.contact_admin.email})</span>}
        </Row>
      </Section>

      <Section title={t('wiz_step_domains')}>
        <Row label={t('ov_domains')}>
          {(data.domains || []).length > 0
            ? data.domains.map((d, i) => (
                <span key={i} style={{ marginRight: '0.5rem' }}>
                  <span className="edition-pill" style={{ fontSize: '0.6875rem' }}>@{d.domain}</span>
                  {d.is_primary && <span style={{ fontSize: '0.625rem', color: 'var(--green)' }}> ★</span>}
                </span>
              ))
            : '—'
          }
        </Row>
      </Section>

      <Section title={t('wiz_step_editions')}>
        <Row label={t('ov_editions')}>
          {(data.editions || []).length > 0
            ? data.editions.map(ed => (
                <span key={ed} className="edition-pill" style={{ marginRight: '0.25rem' }}>{ed}</span>
              ))
            : '—'
          }
        </Row>
      </Section>

      {(data.ip_ranges || []).length > 0 && (
        <Section title={t('wiz_step_ip')}>
          {data.ip_ranges.map((r, i) => (
            <Row key={i} label={r.label || `Range ${i + 1}`}>
              <code style={{ fontSize: '0.8125rem' }}>{r.ip_from} — {r.ip_to}</code>
            </Row>
          ))}
        </Section>
      )}

      {isSso && (
        <Section title={t('wiz_step_sso')}>
          <Row label={t('sso_provider')}>
            {data.sso_provider_type === 'azure_ad' ? t('sso_provider_azure') : t('sso_provider_google')}
          </Row>
          <Row label={t('sso_client_id')}>
            <code style={{ fontSize: '0.8125rem' }}>{data.sso_client_id || '—'}</code>
          </Row>
          {data.sso_tenant_id && (
            <Row label={t('sso_tenant_id')}>
              <code style={{ fontSize: '0.8125rem' }}>{data.sso_tenant_id}</code>
            </Row>
          )}
          <Row label={t('sso_secret_expires')}>
            {data.sso_secret_expires_at || '—'}
          </Row>
          <Row label={t('sso_email_claim')}>
            {data.sso_email_claim || 'email'}
          </Row>
          <Row label={t('sso_allow_password')}>
            {data.allow_password ? (
              <span className="badge badge-orange">{t('sso_allow_password_on')}</span>
            ) : (
              <span className="badge badge-green">{t('sso_allow_password_off')}</span>
            )}
          </Row>
        </Section>
      )}

      <Section title={t('wiz_step_contract')}>
        <Row label={t('contract_sap')}>{data.contract_sap || '—'}</Row>
        <Row label={t('contract_date')}>{data.contract_date || '—'}</Row>
        <Row label={t('contract_duration')}>{data.contract_duration || '—'}</Row>
      </Section>

      <Section title={t('wiz_step_limit')}>
        <Row label={t('user_limit_current')}>{data.max_users || 500}</Row>
      </Section>

      <div className="alert alert-info">
        {t('wiz_review_test_email')}
      </div>
    </div>
  )
}
