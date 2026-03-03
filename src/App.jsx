import { useState } from "react"
import { I18nProvider, useI18n } from "./i18n"
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

  const handleSelectClient = (client) => { setSelectedClient(client); setView("detail") }
  const handleBack = () => { setSelectedClient(null); setView("overview") }

  return (
    <div className="admin-layout">
      <DemoBanner view={view} setView={setView} alertCount={2} />
      <main className="admin-main">
        <div className="admin-content">
          <img
            src="/io_horizontal_black_10x.png"
            alt="Investment Officer"
            className="admin-logo"
          />
          {view === "request" && <EnterpriseRequest onCancel={() => setView("overview")} />}
          {view === "overview" && <ClientOverview onSelectClient={handleSelectClient} />}
          {view === "detail" && selectedClient && <ClientDetail client={selectedClient} onBack={handleBack} />}
          {view === "wizard" && <IntakeWizard onComplete={() => setView("overview")} onCancel={() => setView("overview")} />}
          {view === "alerts" && <AlertsDashboard onViewClient={handleSelectClient} />}
          {view === "client-view" && <ClientAdminView />}
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
