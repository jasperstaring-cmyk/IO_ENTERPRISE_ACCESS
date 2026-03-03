import { useState } from "react"
import { I18nProvider, useI18n } from "./i18n"
import { ENTERPRISE_CLIENTS } from "./data"
import DemoBanner from "./components/shared/DemoBanner"
import ClientOverview from "./components/admin/ClientOverview"
import ClientDetail from "./components/admin/ClientDetail"
import AlertsDashboard from "./components/admin/AlertsDashboard"
import IntakeWizard from "./components/wizard/IntakeWizard"
import ClientAdminView from "./components/client/ClientAdminView"
import EnterpriseRequest from "./components/request/EnterpriseRequest"

function AppContent() {
  const { t } = useI18n()
  const [view, setView] = useState("request")
  const [selectedClient, setSelectedClient] = useState(null)
  const [demoClient, setDemoClient] = useState(ENTERPRISE_CLIENTS.find(c => c.sso) || ENTERPRISE_CLIENTS[0])

  const handleSelectClient = (client) => { setSelectedClient(client); setView("detail") }
  const handleBack = () => { setSelectedClient(null); setView("overview") }

  // Enterprise Request gets its own layout (two-column with sidebar)
  if (view === "request") {
    return (
      <div className="admin-layout">
        <DemoBanner view={view} setView={setView} alertCount={2} demoClient={demoClient} setDemoClient={setDemoClient} />
        <main className="admin-main">
          <div className="req-page-wrapper">
            <div className="req-two-col">
              <EnterpriseRequest onCancel={() => setView("overview")} />
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Client Admin View gets its own full layout (IO account pattern)
  if (view === "client-view") {
    return (
      <div className="admin-layout">
        <DemoBanner view={view} setView={setView} alertCount={2} demoClient={demoClient} setDemoClient={setDemoClient} />
        <ClientAdminView demoClient={demoClient} />
      </div>
    )
  }

  // All IO admin screens share the standard layout
  return (
    <div className="admin-layout">
      <DemoBanner view={view} setView={setView} alertCount={2} demoClient={demoClient} setDemoClient={setDemoClient} />
      <main className="admin-main">
        <div className="admin-content">
          <img src="/io_horizontal_black_10x.png" alt="Investment Officer" className="admin-logo" />
          {view === "overview" && <ClientOverview onSelectClient={handleSelectClient} />}
          {view === "detail" && selectedClient && <ClientDetail client={selectedClient} onBack={handleBack} />}
          {view === "wizard" && <IntakeWizard onComplete={() => setView("overview")} onCancel={() => setView("overview")} />}
          {view === "alerts" && <AlertsDashboard onViewClient={handleSelectClient} />}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider defaultLang="en">
      <AppContent />
    </I18nProvider>
  )
}
