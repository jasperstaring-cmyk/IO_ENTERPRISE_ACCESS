import { useEffect } from 'react'

export default function PocGuide({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="poc-guide-backdrop" onClick={onClose}>
      <div className="poc-guide-modal" onClick={e => e.stopPropagation()}>

        {/* ── Navy header ── */}
        <div className="poc-guide-header">
          <div>
            <h1 className="poc-guide-title">Investment Officer — POC Guide</h1>
            <p className="poc-guide-intro">
              This prototype demonstrates how Investment Officer can professionally manage enterprise access:
              structured client intake, central administration, secret expiry monitoring, and limited
              self-service for the client admin. All data is simulated. Use the test panel above to
              navigate between scenarios.
            </p>
          </div>
          <button className="poc-guide-close" onClick={onClose} aria-label="Close">&times;</button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="poc-guide-body">

          {/* ── Section 0: What is this ── */}
          <h2 className="poc-guide-section-title">0. WHAT IS THIS</h2>
          <div className="poc-guide-card">
            <p className="poc-guide-card-title">A visual specification, not a codebase</p>
            <p className="poc-guide-card-text">
              This POC is built in React/Vite as a working demo that serves as visual and functional
              specification for the production team. The production stack is Vue.js + Laravel. Everything
              you see here — screens, flows, interactions — defines what needs to be built.
            </p>
            <p className="poc-guide-card-text">
              Two real clients have been onboarded manually so far: <strong>FD Mediagroep</strong> (parent
              company, 13 domains, SSO via Keycloak) and <strong>BlackRock</strong> (1 domain, SSO via Azure AD).
              The current process uses a Word document exchanged by email. This POC replaces that.
            </p>
          </div>

          <hr className="poc-guide-divider" />

          {/* ── Section 1: Access mechanisms ── */}
          <h2 className="poc-guide-section-title">1. ACCESS MECHANISMS</h2>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">Domain whitelist (Variant A)</p>
            <p className="poc-guide-card-text">
              IO registers the client's email domains and maps them to an organisation with specific editions.
              Anyone who registers with such a domain automatically receives enterprise rights.
              Authentication is regular email + password. No SSO involved.
            </p>
            <p className="poc-guide-card-note">
              <em>Maintenance: minimal — "set and forget" with occasional domain changes. Example clients:
              WealthPro, GlobalFund Capital.</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">SSO via own IdP — OIDC (Variant B)</p>
            <p className="poc-guide-card-text">
              Everything from Variant A, plus the connection to the client's identity provider
              (Azure AD / Entra ID, Google Workspace). Users log in without a password via their
              organisation's SSO provider. Requires technical configuration: client ID, tenant ID,
              client secret, discovery URL.
            </p>
            <p className="poc-guide-card-note">
              <em>Maintenance: active — client secret expires and must be renewed. Monitoring required.
              Scope: OAuth2/OIDC only, SAML is out of scope. Example clients: FD Mediagroep, BlackRock, Robeco.</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">IP recognition (supplementary layer)</p>
            <p className="poc-guide-card-text">
              Visitors from known IP addresses or IP ranges are automatically recognised or directed to the
              login flow. This is supplementary to Variant A or B — not a standalone mechanism. IP ranges
              include office networks and VPN ranges if exclusive to the client.
            </p>
            <p className="poc-guide-card-note">
              <em>Maintenance: minimal — IP ranges rarely change. Example: FD Mediagroep has office + VPN ranges configured.</em>
            </p>
          </div>

          <hr className="poc-guide-divider" />

          {/* ── Section 2: Scenarios to test ── */}
          <h2 className="poc-guide-section-title">2. SCENARIOS TO TEST</h2>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">
              <span className="poc-guide-dot poc-guide-dot-green" />
              Enterprise access request
            </p>
            <p className="poc-guide-card-text">
              <strong>Perspective:</strong> prospective enterprise client<br />
              A single-page form where a prospective client requests enterprise access. They select their
              country, find their company via D&amp;B lookup, provide contact details, choose between company
              email (whitelist) or SSO, and select editions.
            </p>
            <p className="poc-guide-card-text">
              <span className="poc-guide-step-badge">3 sections</span>{' '}
              organisation &rarr; contact details &rarr; access preferences &rarr; submit
            </p>
            <p className="poc-guide-card-note">
              <em>D&amp;B lookup is simulated with 8 fictional companies. Try searching for "BlackRock" or "ABN".</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">
              <span className="poc-guide-dot poc-guide-dot-green" />
              New client intake (wizard)
            </p>
            <p className="poc-guide-card-text">
              <strong>Perspective:</strong> IO SSO coordinator<br />
              A 9-step wizard that replaces the current Word form. The coordinator enters all client details:
              organisation info, contacts, domains, editions, IP ranges, SSO configuration, contract, and user limit.
            </p>
            <p className="poc-guide-card-text">
              <span className="poc-guide-step-badge">9 steps</span>{' '}
              organisation &rarr; contacts &rarr; domains &rarr; editions &rarr; IP ranges &rarr; SSO &rarr; contract &rarr; user limit &rarr; review
            </p>
            <p className="poc-guide-card-note">
              <em>The SSO step is only shown when access type is "SSO via own IdP". For whitelist clients, it is skipped.
              Choose "Domain whitelist" or "SSO" in Step 1 to see the difference.</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">
              <span className="poc-guide-dot poc-guide-dot-blue" />
              Client overview
            </p>
            <p className="poc-guide-card-text">
              <strong>Perspective:</strong> IO SSO coordinator<br />
              Table showing all 5 enterprise clients with status, type, domains, editions, secret expiry, and contract status.
              Click on any row to open the detail screen with tabs for all configuration.
            </p>
            <p className="poc-guide-card-note">
              <em>Try clicking on FD Mediagroep (13 domains, IP ranges configured) or Robeco (expired secret, red status).</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">
              <span className="poc-guide-dot poc-guide-dot-orange" />
              Alerts &amp; monitoring
            </p>
            <p className="poc-guide-card-text">
              <strong>Perspective:</strong> IO SSO coordinator<br />
              Dashboard showing expiring and expired secrets, and clients approaching their user limit.
              Automatic reminders are sent at 90, 60, 30, and 7 days before expiry.
            </p>
            <p className="poc-guide-card-note">
              <em>FD Mediagroep's secret expires in ~45 days (orange warning). Robeco's secret has already expired (red alert).</em>
            </p>
          </div>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">
              <span className="poc-guide-dot poc-guide-dot-green" />
              Client admin view
            </p>
            <p className="poc-guide-card-text">
              <strong>Perspective:</strong> enterprise client admin (e.g. BlackRock)<br />
              A limited view showing only the SSO connection status, provider details, and secret expiry date.
              The client admin can renew the client secret — the system validates it before applying.
            </p>
            <p className="poc-guide-card-note">
              <em>This is what the client sees. They cannot manage domains, editions, or other configuration — that is IO-side only.</em>
            </p>
          </div>

          <hr className="poc-guide-divider" />

          {/* ── Section 3: Demo clients ── */}
          <h2 className="poc-guide-section-title">3. DEMO CLIENTS</h2>

          <div className="poc-guide-card poc-guide-card-flush">
            <table className="poc-guide-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Type</th>
                  <th>Editions</th>
                  <th>What it demonstrates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>FD Mediagroep</strong></td>
                  <td>SSO (Azure AD)</td>
                  <td>All</td>
                  <td>Parent company, 13 domains, IP ranges, secret expires in ~45 days (orange)</td>
                </tr>
                <tr>
                  <td><strong>BlackRock</strong></td>
                  <td>SSO (Azure AD)</td>
                  <td>NL, BE, LU</td>
                  <td>External client, 1 domain, secret recently renewed (green)</td>
                </tr>
                <tr>
                  <td><strong>Robeco</strong></td>
                  <td>SSO (Azure AD)</td>
                  <td>NL, BE</td>
                  <td>Expired secret (red), allow_password enabled</td>
                </tr>
                <tr>
                  <td><strong>WealthPro</strong></td>
                  <td>Whitelist</td>
                  <td>NL</td>
                  <td>Simple domain whitelist, no SSO, small client (100 users)</td>
                </tr>
                <tr>
                  <td><strong>GlobalFund Capital</strong></td>
                  <td>Whitelist</td>
                  <td>All</td>
                  <td>Domain whitelist with access to all editions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="poc-guide-divider" />

          {/* ── Section 4: Navigation ── */}
          <h2 className="poc-guide-section-title">4. NAVIGATION</h2>

          <div className="poc-guide-card">
            <p className="poc-guide-card-title">Using the demo</p>
            <p className="poc-guide-card-text">
              The dark bar at the top of the screen is the <strong>test panel</strong>. Click
              "SHOW TEST PANEL" to expand it and switch between scenarios. The active scenario is
              highlighted. The page title bar below the test panel shows which screen you are on.
            </p>
            <p className="poc-guide-card-text">
              Use the <strong>language buttons</strong> (EN / NL / DE / FR) in the expanded test panel to
              switch the interface language. All labels, form fields, and status texts are translated.
              The guide itself is English-only.
            </p>
            <p className="poc-guide-card-note">
              <em>Within the Client overview, click any table row to open the detail screen. Use the tabs
              (General, Domains, Editions, SSO, IP Ranges, Contract, User Limit, Blocklist) to explore
              all configuration for that client.</em>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
