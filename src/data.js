// ─── Demo data for Enterprise Access POC ──────────────────────────────────────
// Matches the demo scenarios in the Knowledge Base §9.1

export const ENTERPRISE_CLIENTS = [
  {
    id: "ent-001",
    name: "FD Mediagroep",
    status: "active",
    access_type: "sso",
    allow_password: false,
    editions: ["nl", "be", "lu", "de", "fr", "com"],
    max_users: 500,
    active_users: 312,
    created_at: "2024-06-15",
    activated_at: "2024-07-01",
    notes: "Parent company. Keycloak as IdP. 13 domains.",
    contacts: [
      { id: "c-001", role: "commercial", name: "Saskia de Vries", email: "s.devries@fdmediagroep.nl", phone: "+31 20 592 8400", is_primary: true },
      { id: "c-002", role: "technical", name: "Jelle Buizer", email: "j.buizer@fdmediagroep.nl", phone: "+31 20 592 8401", is_primary: true },
      { id: "c-003", role: "admin", name: "Marieke van Dam", email: "m.vandam@fdmediagroep.nl", phone: "", is_primary: true },
    ],
    domains: [
      { id: "d-001", domain: "fdmediagroep.nl", is_primary: true },
      { id: "d-002", domain: "fd.nl", is_primary: false },
      { id: "d-003", domain: "bnr.nl", is_primary: false },
      { id: "d-004", domain: "company.info", is_primary: false },
      { id: "d-005", domain: "economie.nl", is_primary: false },
      { id: "d-006", domain: "energeia.nl", is_primary: false },
      { id: "d-007", domain: "esb.nu", is_primary: false },
      { id: "d-008", domain: "fdbusiness.nl", is_primary: false },
      { id: "d-009", domain: "impact-investor.com", is_primary: false },
      { id: "d-010", domain: "ipe-quest.com", is_primary: false },
      { id: "d-011", domain: "ipe.com", is_primary: false },
      { id: "d-012", domain: "pensioenpro.nl", is_primary: false },
      { id: "d-013", domain: "propertynl.com", is_primary: false },
    ],
    sso: {
      id: "sso-001",
      provider_type: "azure_ad",
      client_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      tenant_id: "fdmg-tenant-001",
      discovery_url: "https://login.microsoftonline.com/fdmg-tenant-001/v2.0/.well-known/openid-configuration",
      redirect_uri: "https://www.investmentofficer.nl/auth/callback",
      secret_expires_at: "2026-04-17",
      secret_updated_at: "2025-04-17",
      email_claim: "email",
      status: "active",
      last_health_check: "2026-03-03T08:00:00Z",
    },
    ip_ranges: [
      { id: "ip-001", ip_from: "145.18.100.0", ip_to: "145.18.100.255", label: "Head office Amsterdam" },
      { id: "ip-002", ip_from: "10.200.0.0", ip_to: "10.200.255.255", label: "VPN" },
    ],
    contract: {
      id: "ct-001",
      sap_number: "SAP-2024-FDMG-001",
      contract_date: "2024-06-01",
      duration: "24 months",
      uploaded_at: "2024-06-15",
      uploaded_by: "Thomas Hoekstra",
    },
    blocklist: [],
  },
  {
    id: "ent-002",
    name: "BlackRock",
    status: "active",
    access_type: "sso",
    allow_password: false,
    editions: ["nl", "be", "lu"],
    max_users: 500,
    active_users: 87,
    created_at: "2025-10-12",
    activated_at: "2025-11-01",
    notes: "External client. Azure AD (Entra ID). Single domain.",
    contacts: [
      { id: "c-004", role: "commercial", name: "James Mitchell", email: "james.mitchell@blackrock.com", phone: "+44 20 7743 3000", is_primary: true },
      { id: "c-005", role: "technical", name: "Sarah Chen", email: "sarah.chen@blackrock.com", phone: "+44 20 7743 3001", is_primary: true },
      { id: "c-006", role: "admin", name: "Peter de Jong", email: "peter.dejong@blackrock.com", phone: "", is_primary: true },
    ],
    domains: [
      { id: "d-014", domain: "blackrock.com", is_primary: true },
    ],
    sso: {
      id: "sso-002",
      provider_type: "azure_ad",
      client_id: "b97240e0-9e18-46f6-a33b-3681fe4310a4",
      tenant_id: "282a3295-5c42-4d93-9ec1-6631001cc5f7",
      discovery_url: "https://login.microsoftonline.com/282a3295-5c42-4d93-9ec1-6631001cc5f7/v2.0/.well-known/openid-configuration",
      redirect_uri: "https://www.investmentofficer.nl/auth/callback",
      secret_expires_at: "2027-02-15",
      secret_updated_at: "2026-02-15",
      email_claim: "email",
      status: "active",
      last_health_check: "2026-03-03T08:00:00Z",
    },
    ip_ranges: [],
    contract: {
      id: "ct-002",
      sap_number: "SAP-2025-BLK-042",
      contract_date: "2025-10-01",
      duration: "12 months",
      uploaded_at: "2025-10-12",
      uploaded_by: "Thomas Hoekstra",
    },
    blocklist: [],
  },
  {
    id: "ent-003",
    name: "WealthPro",
    status: "active",
    access_type: "whitelist",
    allow_password: false,
    editions: ["nl"],
    max_users: 100,
    active_users: 23,
    created_at: "2025-08-20",
    activated_at: "2025-08-20",
    notes: "Domain whitelist only. Small wealth manager.",
    contacts: [
      { id: "c-007", role: "commercial", name: "Laura Bakker", email: "l.bakker@wealthpro.com", phone: "+31 70 123 4567", is_primary: true },
      { id: "c-008", role: "admin", name: "Laura Bakker", email: "l.bakker@wealthpro.com", phone: "+31 70 123 4567", is_primary: true },
    ],
    domains: [
      { id: "d-015", domain: "wealthpro.com", is_primary: true },
    ],
    sso: null,
    ip_ranges: [],
    contract: {
      id: "ct-003",
      sap_number: "SAP-2025-WP-018",
      contract_date: "2025-08-01",
      duration: "12 months",
      uploaded_at: "2025-08-20",
      uploaded_by: "Thomas Hoekstra",
    },
    blocklist: [],
  },
  {
    id: "ent-004",
    name: "GlobalFund Capital",
    status: "active",
    access_type: "whitelist",
    allow_password: false,
    editions: ["nl", "be", "lu", "de", "fr", "com"],
    max_users: 500,
    active_users: 156,
    created_at: "2025-03-10",
    activated_at: "2025-03-10",
    notes: "Domain whitelist. Access to all editions.",
    contacts: [
      { id: "c-009", role: "commercial", name: "Henrik Andersen", email: "h.andersen@globalfund.com", phone: "+352 26 20 1234", is_primary: true },
      { id: "c-010", role: "admin", name: "Nina Scholten", email: "n.scholten@globalfund.com", phone: "", is_primary: true },
    ],
    domains: [
      { id: "d-016", domain: "globalfund.com", is_primary: true },
    ],
    sso: null,
    ip_ranges: [
      { id: "ip-003", ip_from: "185.45.12.0", ip_to: "185.45.12.63", label: "Luxembourg office" },
    ],
    contract: {
      id: "ct-004",
      sap_number: "SAP-2025-GFC-007",
      contract_date: "2025-03-01",
      duration: "Indefinite",
      uploaded_at: "2025-03-10",
      uploaded_by: "Thomas Hoekstra",
    },
    blocklist: [],
  },
  {
    id: "ent-005",
    name: "Robeco",
    status: "active",
    access_type: "sso",
    allow_password: true,  // Demo: VPN blocks OAuth on mobile
    editions: ["nl", "be"],
    max_users: 500,
    active_users: 204,
    created_at: "2025-01-15",
    activated_at: "2025-02-01",
    notes: "Secret expired. Password allowed (VPN blocks mobile OAuth).",
    contacts: [
      { id: "c-011", role: "commercial", name: "Bas Vermeer", email: "b.vermeer@robeco.nl", phone: "+31 10 224 1234", is_primary: true },
      { id: "c-012", role: "technical", name: "Tom Jansen", email: "t.jansen@robeco.nl", phone: "+31 10 224 1235", is_primary: true },
      { id: "c-013", role: "admin", name: "Anne de Boer", email: "a.deboer@robeco.nl", phone: "", is_primary: true },
    ],
    domains: [
      { id: "d-017", domain: "robeco.nl", is_primary: true },
      { id: "d-018", domain: "robeco.com", is_primary: false },
    ],
    sso: {
      id: "sso-003",
      provider_type: "azure_ad",
      client_id: "c3d4e5f6-a1b2-3456-cdef-abcdef123456",
      tenant_id: "robeco-tenant-001",
      discovery_url: "https://login.microsoftonline.com/robeco-tenant-001/v2.0/.well-known/openid-configuration",
      redirect_uri: "https://www.investmentofficer.nl/auth/callback",
      secret_expires_at: "2026-02-15",
      secret_updated_at: "2025-02-15",
      email_claim: "email",
      status: "expired",
      last_health_check: "2026-02-15T08:00:00Z",
    },
    ip_ranges: [
      { id: "ip-004", ip_from: "212.83.40.0", ip_to: "212.83.40.127", label: "Rotterdam HQ" },
    ],
    contract: {
      id: "ct-005",
      sap_number: "SAP-2025-ROB-003",
      contract_date: "2025-01-01",
      duration: "24 months",
      uploaded_at: "2025-01-15",
      uploaded_by: "Thomas Hoekstra",
    },
    blocklist: [
      { id: "bl-001", email: "ex.employee@robeco.nl", reason: "Left the company, access should be revoked", blocked_at: "2026-01-20", blocked_by: "Thomas Hoekstra" },
    ],
  },
];

// ─── Helper: days until secret expiry ────────────────────────────────────────
export function daysUntilExpiry(dateStr) {
  if (!dateStr) return null;
  const now = new Date();
  const expiry = new Date(dateStr);
  return Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
}

// ─── Helper: expiry severity ─────────────────────────────────────────────────
export function expirySeverity(dateStr) {
  const days = daysUntilExpiry(dateStr);
  if (days === null) return "none";
  if (days <= 0) return "red";
  if (days <= 30) return "red";
  if (days <= 90) return "orange";
  return "green";
}

// ─── All editions ────────────────────────────────────────────────────────────
export const ALL_EDITIONS = [
  { code: "nl", label: "Netherlands" },
  { code: "be", label: "Belgium" },
  { code: "lu", label: "Luxembourg" },
  { code: "de", label: "Germany" },
  { code: "fr", label: "France" },
  { code: "com", label: "International" },
];
