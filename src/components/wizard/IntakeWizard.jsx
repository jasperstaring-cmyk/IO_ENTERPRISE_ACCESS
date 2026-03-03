import { useState, useCallback } from 'react'
import { useI18n } from '../../i18n'
import StepOrganisation from './StepOrganisation'
import StepContacts from './StepContacts'
import StepDomains from './StepDomains'
import StepEditions from './StepEditions'
import StepIpRanges from './StepIpRanges'
import StepSso from './StepSso'
import StepContract from './StepContract'
import StepUserLimit from './StepUserLimit'
import StepReview from './StepReview'

function getSteps(accessType) {
  const base = ['org', 'contacts', 'domains', 'editions', 'ip']
  if (accessType === 'sso') base.push('sso')
  base.push('contract', 'limit', 'review')
  return base
}

const STEP_LABELS = {
  org: 'wiz_step_org', contacts: 'wiz_step_contacts', domains: 'wiz_step_domains',
  editions: 'wiz_step_editions', ip: 'wiz_step_ip', sso: 'wiz_step_sso',
  contract: 'wiz_step_contract', limit: 'wiz_step_limit', review: 'wiz_step_review',
}

const INITIAL_DATA = {
  org_name: '', access_type: '',
  contact_commercial: { name: '', email: '', phone: '' },
  contact_technical: { name: '', email: '', phone: '' },
  contact_admin: { name: '', email: '' },
  domains: [], editions: [], ip_ranges: [],
  sso_provider_type: '', sso_client_id: '', sso_tenant_id: '',
  sso_discovery_url: '', sso_client_secret: '', sso_secret_expires_at: '',
  sso_email_claim: 'email',
  allow_password: false,
  contract_sap: '', contract_date: '', contract_duration: '',
  max_users: 500,
}

export default function IntakeWizard({ onComplete, onCancel }) {
  const { t } = useI18n()
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState(INITIAL_DATA)

  const steps = getSteps(data.access_type)
  const stepKey = steps[currentStep]
  const totalSteps = steps.length
  const isFirst = currentStep === 0
  const isLast = currentStep === totalSteps - 1

  const updateField = useCallback((field, value) => {
    setData(prev => ({ ...prev, [field]: value }))
  }, [])

  const updateContact = useCallback((contactKey, field, value) => {
    setData(prev => ({
      ...prev,
      [contactKey]: { ...prev[contactKey], [field]: value }
    }))
  }, [])

  const goNext = () => { if (!isLast) setCurrentStep(prev => prev + 1) }
  const goBack = () => { if (!isFirst) setCurrentStep(prev => prev - 1) }

  function renderStep() {
    switch (stepKey) {
      case 'org':
        return <StepOrganisation data={data} updateField={updateField} />
      case 'contacts':
        return <StepContacts data={data} updateContact={updateContact} isSso={data.access_type === 'sso'} />
      case 'domains':
        return <StepDomains data={data} updateField={updateField} />
      case 'editions':
        return <StepEditions data={data} updateField={updateField} />
      case 'ip':
        return <StepIpRanges data={data} updateField={updateField} />
      case 'sso':
        return <StepSso data={data} updateField={updateField} />
      case 'contract':
        return <StepContract data={data} updateField={updateField} />
      case 'limit':
        return <StepUserLimit data={data} updateField={updateField} />
      case 'review':
        return <StepReview data={data} />
      default:
        return null
    }
  }

  function canProceed() {
    switch (stepKey) {
      case 'org':
        return data.org_name.trim() !== '' && data.access_type !== ''
      case 'contacts': {
        const c = data.contact_commercial
        const a = data.contact_admin
        const cOk = c.name.trim() !== '' && c.email.trim() !== ''
        const aOk = a.name.trim() !== '' && a.email.trim() !== ''
        if (data.access_type === 'sso') {
          const tech = data.contact_technical
          return cOk && tech.name.trim() !== '' && tech.email.trim() !== '' && aOk
        }
        return cOk && aOk
      }
      case 'domains':
        return data.domains.length > 0
      case 'editions':
        return data.editions.length > 0
      case 'sso':
        return data.sso_provider_type !== '' && data.sso_client_id.trim() !== ''
      case 'ip':
      case 'contract':
      case 'limit':
      case 'review':
        return true
      default:
        return true
    }
  }

  return (
    <div className="detail-card" style={{ maxWidth: 720 }}>
      <div className="wizard-progress">
        {steps.map((s, i) => (
          <div key={s} className={`wizard-seg ${i < currentStep ? 'done' : ''} ${i === currentStep ? 'current' : ''}`} title={t(STEP_LABELS[s])} />
        ))}
      </div>

      <div style={{ fontSize: '0.7rem', color: '#8A8A82', marginBottom: '0.25rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        {t(STEP_LABELS[stepKey])} — {currentStep + 1} / {totalSteps}
      </div>

      {renderStep()}

      <div className="wizard-nav">
        {isFirst ? (
          <button className="btn-secondary" onClick={onCancel}>{t('btn_cancel')}</button>
        ) : (
          <button className="btn-back" onClick={goBack}>← {t('btn_back')}</button>
        )}

        {isLast ? (
          <button className="btn-primary" disabled={!canProceed()} onClick={() => onComplete && onComplete(data)}>
            {t('wiz_review_activate')}
          </button>
        ) : (
          <button className="btn-primary" disabled={!canProceed()} onClick={goNext}>
            {t('btn_next')} →
          </button>
        )}
      </div>
    </div>
  )
}
