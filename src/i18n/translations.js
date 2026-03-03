// ─── Enterprise Access POC — All translations ───────────────────────────────
// Single source of truth for EN, NL, DE, FR.
// Keys are English, values are per-language strings.
// ─────────────────────────────────────────────────────────────────────────────

export const en = {
  lang: "en",

  // ── App ──
  app_title: "Investment Officer",

  // ── Sidebar ──
  sidebar_section_ea: "Enterprise Access",
  sidebar_section_request: "Enterprise Request",
  sidebar_section_view: "View as",
  sidebar_section_language: "Language",
  sidebar_clients: "Clients",
  sidebar_new_client: "New client",
  sidebar_alerts: "Alerts",
  sidebar_client_admin: "Client admin",
  sidebar_request: "New request",

  // ── Top bar ──
  topbar_overview: "Enterprise Clients",
  topbar_wizard: "New Enterprise Client",
  topbar_alerts: "Alerts & Notifications",
  topbar_client_view: "Client Admin View",
  topbar_detail: "Client Detail",
  topbar_request: "Enterprise Access Request",

  // ── Demo banner ──
  demo_hint: "This is a demo environment. All data is simulated. Use the sidebar to navigate between views.",
  demo_badge: "Enterprise Access POC",

  // ── Overview table ──
  ov_name: "Organisation",
  ov_type: "Type",
  ov_users: "Users",
  ov_domains: "Domains",
  ov_editions: "Editions",
  ov_status: "Status",
  ov_secret_expiry: "Secret expiry",
  ov_contract: "Contract",
  ov_type_sso: "SSO",
  ov_type_whitelist: "Whitelist",
  ov_search_placeholder: "Search by name or domain\u2026",
  ov_filter_all: "All",
  ov_filter_status: "Status",
  ov_filter_type: "Type",
  ov_new_client: "New enterprise client",
  ov_no_results: "No clients match your search.",
  ov_contract_linked: "Linked",
  ov_contract_missing: "Missing",

  // ── Status badges ──
  status_active: "Active",
  status_draft: "Draft",
  status_suspended: "Suspended",
  status_archived: "Archived",
  status_configuring: "Configuring",
  status_testing: "Testing",
  status_expired: "Expired",
  status_error: "Error",

  // ── Expiry ──
  expiry_days: "{n} days",
  expiry_expired: "Expired",
  expiry_na: "N/A",

  // ── Detail tabs ──
  tab_general: "General",
  tab_domains: "Domains",
  tab_editions: "Editions",
  tab_sso: "SSO Configuration",
  tab_ip_ranges: "IP Ranges",
  tab_contract: "Contract",
  tab_user_limit: "User Limit",
  tab_blocklist: "Blocklist",
  tab_users: "Users",
  tab_audit: "Audit Log",

  // ── Detail: general ──
  detail_org_name: "Organisation name",
  detail_status: "Status",
  detail_type: "Access type",
  detail_created: "Created",
  detail_activated: "Activated",
  detail_notes: "Notes",
  detail_contacts: "Contact persons",
  detail_role_commercial: "Commercial",
  detail_role_technical: "Technical",
  detail_role_admin: "Admin",

  // ── Detail: domains ──
  domain_name: "Domain",
  domain_primary: "Primary",
  domain_added: "Added",
  domain_add: "Add domain",
  domain_remove: "Remove",
  domain_placeholder: "e.g. company.com",
  domain_duplicate_error: "This domain is already linked to another client.",

  // ── Detail: editions ──
  edition_nl: "Netherlands",
  edition_be: "Belgium",
  edition_lu: "Luxembourg",
  edition_de: "Germany",
  edition_fr: "France",
  edition_com: "International",
  edition_quick_nl: "NL only",
  edition_quick_all: "All editions",

  // ── Detail: SSO ──
  sso_provider: "Identity provider",
  sso_provider_azure: "Microsoft (Azure AD / Entra ID)",
  sso_provider_google: "Google Workspace",
  sso_client_id: "Client ID",
  sso_tenant_id: "Tenant ID",
  sso_discovery_url: "Discovery URL",
  sso_redirect_uri: "Redirect URI",
  sso_secret: "Client secret",
  sso_secret_masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  sso_secret_expires: "Secret expires",
  sso_secret_updated: "Secret last updated",
  sso_email_claim: "Email claim",
  sso_status: "Connection status",
  sso_test_btn: "Test connection",
  sso_test_success: "Connection successful",
  sso_test_fail: "Connection failed",
  sso_allow_password: "Allow password creation",
  sso_allow_password_desc: "Users can also create an IO password alongside SSO. Enable only if the client's VPN blocks mobile OAuth.",
  sso_allow_password_warn: "When enabled, SSO users can create a password at IO. Use this when VPN prevents (mobile) OAuth access.",
  sso_allow_password_on: "Enabled \u2014 users can create a password",
  sso_allow_password_off: "Disabled \u2014 SSO only (recommended)",

  // ── Detail: IP ranges ──
  ip_from: "From",
  ip_to: "To",
  ip_label: "Label",
  ip_add: "Add IP range",
  ip_remove: "Remove",

  // ── Detail: contract ──
  contract_sap: "SAP number",
  contract_date: "Contract date",
  contract_duration: "Duration",
  contract_pdf: "Signed contract",
  contract_upload: "Upload contract (PDF)",
  contract_replace: "Replace",
  contract_download: "Download",
  contract_uploaded_by: "Uploaded by",
  contract_uploaded_at: "Uploaded on",

  // ── Detail: user limit ──
  user_limit_current: "Current limit",
  user_limit_active: "Active users",
  user_limit_edit: "Edit limit",
  user_limit_default: "Default: 500",

  // ── Detail: blocklist ──
  bl_email: "Email address",
  bl_reason: "Reason",
  bl_blocked_at: "Blocked on",
  bl_blocked_by: "Blocked by",
  bl_add: "Block user",
  bl_remove: "Unblock",
  bl_empty: "No blocked users.",
  bl_placeholder_email: "user@company.com",
  bl_placeholder_reason: "Reason for blocking",

  // ── Detail: audit log ──
  audit_action: "Action",
  audit_actor: "Actor",
  audit_details: "Details",
  audit_timestamp: "Timestamp",

  // ── Wizard: step labels ──
  wiz_step_org: "Organisation",
  wiz_step_contacts: "Contacts",
  wiz_step_domains: "Domains",
  wiz_step_editions: "Editions",
  wiz_step_ip: "IP Ranges",
  wiz_step_sso: "SSO",
  wiz_step_contract: "Contract",
  wiz_step_limit: "User Limit",
  wiz_step_review: "Review",

  // ── Wizard: organisation ──
  wiz_org_title: "Organisation details",
  wiz_org_sub: "Enter the organisation name and choose the access type.",
  wiz_org_name: "Organisation name",
  wiz_org_name_ph: "e.g. BlackRock",
  wiz_org_type: "Access type",
  wiz_org_type_wl: "Domain whitelist",
  wiz_org_type_wl_desc: "Email domain recognition. Users log in with email + password.",
  wiz_org_type_sso: "SSO via own IdP (OIDC)",
  wiz_org_type_sso_desc: "Users log in via their organisation's identity provider. No password at IO.",

  // ── Wizard: contacts ──
  wiz_contacts_title: "Contact persons",
  wiz_contacts_sub: "Add the key contacts at the client organisation.",
  wiz_contact_commercial: "Commercial contact",
  wiz_contact_technical: "Technical contact",
  wiz_contact_admin: "Client administrator",
  wiz_contact_name: "Full name",
  wiz_contact_email: "Email address",
  wiz_contact_phone: "Phone number",
  wiz_contact_tech_note: "Receives secret expiry alerts. Only required for SSO clients.",

  // ── Wizard: domains ──
  wiz_domains_title: "Email domains",
  wiz_domains_sub: "Add the email domains that belong to this organisation.",

  // ── Wizard: editions ──
  wiz_editions_title: "Editions",
  wiz_editions_sub: "Select which Investment Officer editions this client can access.",

  // ── Wizard: IP ranges ──
  wiz_ip_title: "IP ranges",
  wiz_ip_sub: "Optionally add IP ranges for automatic recognition.",
  wiz_ip_skip: "Skip \u2014 no IP ranges needed",
  wiz_ip_vpn_note: "Include VPN ranges if they are exclusive to this client.",

  // ── Wizard: SSO ──
  wiz_sso_title: "SSO configuration",
  wiz_sso_sub: "Enter the OIDC connection details from the client's identity provider.",
  wiz_sso_secret_note: "The secret will be stored hashed. Enter the expected expiry date.",
  wiz_sso_redirect_note: "Provide this URL to the client so they can configure it in their IdP.",

  // ── Wizard: contract ──
  wiz_contract_title: "Contract",
  wiz_contract_sub: "Upload the signed contract and enter the reference data.",

  // ── Wizard: user limit ──
  wiz_limit_title: "User limit",
  wiz_limit_sub: "Set the maximum number of users for this enterprise client.",

  // ── Wizard: review ──
  wiz_review_title: "Review & activate",
  wiz_review_sub: "Review all details before activating the enterprise client.",
  wiz_review_activate: "Activate client",
  wiz_review_save_draft: "Save as draft",
  wiz_review_test_email: "Send test email to technical contact",

  // ── Buttons ──
  btn_next: "Continue",
  btn_back: "Back",
  btn_save: "Save",
  btn_cancel: "Cancel",
  btn_edit: "Edit",
  btn_delete: "Delete",
  btn_close: "Close",

  // ── Client admin view ──
  cv_title: "Enterprise access",
  cv_provider: "Provider",
  cv_status: "Status",
  cv_secret_expires: "Secret expires on",
  cv_renew_secret: "Renew secret",
  cv_renew_title: "Renew client secret",
  cv_renew_sub: "Enter the new client secret from your identity provider. The system will validate it before applying.",
  cv_renew_new_secret: "New client secret",
  cv_renew_expiry: "New expiry date",
  cv_renew_confirm: "Validate & save",
  cv_renew_success: "Secret updated successfully.",
  cv_renew_error: "Validation failed. The old secret remains active.",

  // ── Alerts ──
  alert_title_expiry: "Secret expiry warning",
  alert_title_expired: "Secret expired",
  alert_title_limit: "User limit approaching",
  alert_days_prefix: "Expires in",
  alert_days_suffix: "days",
  alert_view_client: "View client",

  // ── Enterprise request form ──
  req_form_intro: "Fill in the details below to request enterprise access to Investment Officer. It only takes a minute.",
  req_org_title: "Your organisation",
  req_org_sub: "Select your country and find your organisation. Company details are retrieved automatically.",
  req_country: "Country",
  req_country_ph: "--- Select country ---",
  req_search_company: "Organisation name",
  req_search_ph: "Start typing your company name...",
  req_search_hint: "Type at least 3 characters. We look up your company via Dun & Bradstreet.",
  req_address: "Address",
  req_kvk: "Registration number",
  req_vat: "VAT number",
  req_duns: "DUNS number",
  req_domains_auto: "Email domains",
  req_contact_title: "Your contact details",
  req_contact_sub: "Who should we contact about this request?",
  req_contact_name: "Full name",
  req_contact_email: "Email address",
  req_contact_phone: "Phone number",
  req_access_title: "Access preferences",
  req_access_sub: "How should your employees access Investment Officer?",
  req_access_type: "How do your employees log in?",
  req_type_wl: "Company email",
  req_type_wl_desc: "All employees with your company email address (e.g. @yourcompany.com) can create an account and get access automatically.",
  req_type_sso: "Single Sign-On (SSO)",
  req_type_sso_desc: "Employees log in with their existing company account (Microsoft 365 or Google Workspace). No separate password needed.",
  req_editions: "Which editions do you need?",
  req_edition_single: "Access for one country",
  req_edition_all: "Access to all editions",
  req_est_users: "Estimated number of users",
  req_est_select: "Select...",
  req_review_title: "Review your request",
  req_review_sub: "Please check the details below before submitting.",
  req_review_note: "After submitting, our team will review your request and contact you within 2 business days.",
  req_submit: "Submit request",
  req_submitted_title: "Request submitted",
  req_submitted_msg: "Thank you. We have received your request and will get back to you within 2 business days.",
}

// ─────────────────────────────────────────────────────────────────────────────

export const nl = {
  lang: "nl",

  // ── App ──
  app_title: "Investment Officer",

  // ── Sidebar ──
  sidebar_section_ea: "Enterprise-toegang",
  sidebar_section_request: "Enterprise-aanvraag",
  sidebar_section_view: "Bekijk als",
  sidebar_section_language: "Taal",
  sidebar_clients: "Klanten",
  sidebar_new_client: "Nieuwe klant",
  sidebar_alerts: "Meldingen",
  sidebar_client_admin: "Klant-admin",
  sidebar_request: "Nieuwe aanvraag",

  // ── Top bar ──
  topbar_overview: "Enterprise-klanten",
  topbar_wizard: "Nieuwe enterprise-klant",
  topbar_alerts: "Meldingen & Notificaties",
  topbar_client_view: "Klant-admin weergave",
  topbar_detail: "Klantdetail",
  topbar_request: "Enterprise-toegang aanvragen",

  // ── Demo banner ──
  demo_hint: "Dit is een demo-omgeving. Alle data is gesimuleerd. Gebruik de zijbalk om tussen weergaven te navigeren.",
  demo_badge: "Enterprise Access POC",

  // ── Overview table ──
  ov_name: "Organisatie",
  ov_type: "Type",
  ov_users: "Gebruikers",
  ov_domains: "Domeinen",
  ov_editions: "Edities",
  ov_status: "Status",
  ov_secret_expiry: "Secret verloopt",
  ov_contract: "Contract",
  ov_type_sso: "SSO",
  ov_type_whitelist: "Whitelist",
  ov_search_placeholder: "Zoek op naam of domein\u2026",
  ov_filter_all: "Alle",
  ov_filter_status: "Status",
  ov_filter_type: "Type",
  ov_new_client: "Nieuwe enterprise-klant",
  ov_no_results: "Geen klanten gevonden.",
  ov_contract_linked: "Gekoppeld",
  ov_contract_missing: "Ontbreekt",

  // ── Status badges ──
  status_active: "Actief",
  status_draft: "Concept",
  status_suspended: "Opgeschort",
  status_archived: "Gearchiveerd",
  status_configuring: "Configureren",
  status_testing: "Testen",
  status_expired: "Verlopen",
  status_error: "Fout",

  // ── Expiry ──
  expiry_days: "{n} dagen",
  expiry_expired: "Verlopen",
  expiry_na: "N.v.t.",

  // ── Detail tabs ──
  tab_general: "Algemeen",
  tab_domains: "Domeinen",
  tab_editions: "Edities",
  tab_sso: "SSO-configuratie",
  tab_ip_ranges: "IP-bereiken",
  tab_contract: "Contract",
  tab_user_limit: "Gebruikerslimiet",
  tab_blocklist: "Blokkeerlijst",
  tab_users: "Gebruikers",
  tab_audit: "Audit-log",

  // ── Detail: general ──
  detail_org_name: "Organisatienaam",
  detail_status: "Status",
  detail_type: "Toegangstype",
  detail_created: "Aangemaakt",
  detail_activated: "Geactiveerd",
  detail_notes: "Notities",
  detail_contacts: "Contactpersonen",
  detail_role_commercial: "Commercieel",
  detail_role_technical: "Technisch",
  detail_role_admin: "Beheerder",

  // ── Detail: domains ──
  domain_name: "Domein",
  domain_primary: "Primair",
  domain_added: "Toegevoegd",
  domain_add: "Domein toevoegen",
  domain_remove: "Verwijderen",
  domain_placeholder: "bijv. bedrijf.nl",
  domain_duplicate_error: "Dit domein is al gekoppeld aan een andere klant.",

  // ── Detail: editions ──
  edition_nl: "Nederland",
  edition_be: "België",
  edition_lu: "Luxemburg",
  edition_de: "Duitsland",
  edition_fr: "Frankrijk",
  edition_com: "Internationaal",
  edition_quick_nl: "Alleen NL",
  edition_quick_all: "Alle edities",

  // ── Detail: SSO ──
  sso_provider: "Identity provider",
  sso_provider_azure: "Microsoft (Azure AD / Entra ID)",
  sso_provider_google: "Google Workspace",
  sso_client_id: "Client ID",
  sso_tenant_id: "Tenant ID",
  sso_discovery_url: "Discovery URL",
  sso_redirect_uri: "Redirect URI",
  sso_secret: "Client secret",
  sso_secret_masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  sso_secret_expires: "Secret verloopt",
  sso_secret_updated: "Secret laatst bijgewerkt",
  sso_email_claim: "Email claim",
  sso_status: "Verbindingsstatus",
  sso_test_btn: "Test verbinding",
  sso_test_success: "Verbinding geslaagd",
  sso_test_fail: "Verbinding mislukt",
  sso_allow_password: "Wachtwoord aanmaken toestaan",
  sso_allow_password_desc: "Gebruikers kunnen naast SSO ook een IO-wachtwoord aanmaken. Schakel alleen in als de VPN van de klant mobiel OAuth blokkeert.",
  sso_allow_password_warn: "Indien ingeschakeld kunnen SSO-gebruikers een wachtwoord aanmaken bij IO. Gebruik dit wanneer VPN (mobiele) OAuth-toegang verhindert.",
  sso_allow_password_on: "Ingeschakeld \u2014 gebruikers kunnen een wachtwoord aanmaken",
  sso_allow_password_off: "Uitgeschakeld \u2014 alleen SSO (aanbevolen)",

  // ── Detail: IP ranges ──
  ip_from: "Van",
  ip_to: "Tot",
  ip_label: "Label",
  ip_add: "IP-bereik toevoegen",
  ip_remove: "Verwijderen",

  // ── Detail: contract ──
  contract_sap: "SAP-nummer",
  contract_date: "Contractdatum",
  contract_duration: "Looptijd",
  contract_pdf: "Getekend contract",
  contract_upload: "Contract uploaden (PDF)",
  contract_replace: "Vervangen",
  contract_download: "Downloaden",
  contract_uploaded_by: "Geüpload door",
  contract_uploaded_at: "Geüpload op",

  // ── Detail: user limit ──
  user_limit_current: "Huidige limiet",
  user_limit_active: "Actieve gebruikers",
  user_limit_edit: "Limiet aanpassen",
  user_limit_default: "Standaard: 500",

  // ── Detail: blocklist ──
  bl_email: "E-mailadres",
  bl_reason: "Reden",
  bl_blocked_at: "Geblokkeerd op",
  bl_blocked_by: "Geblokkeerd door",
  bl_add: "Gebruiker blokkeren",
  bl_remove: "Deblokkeren",
  bl_empty: "Geen geblokkeerde gebruikers.",
  bl_placeholder_email: "gebruiker@bedrijf.nl",
  bl_placeholder_reason: "Reden voor blokkering",

  // ── Detail: audit log ──
  audit_action: "Actie",
  audit_actor: "Uitvoerder",
  audit_details: "Details",
  audit_timestamp: "Tijdstip",

  // ── Wizard: step labels ──
  wiz_step_org: "Organisatie",
  wiz_step_contacts: "Contacten",
  wiz_step_domains: "Domeinen",
  wiz_step_editions: "Edities",
  wiz_step_ip: "IP-bereiken",
  wiz_step_sso: "SSO",
  wiz_step_contract: "Contract",
  wiz_step_limit: "Gebruikerslimiet",
  wiz_step_review: "Controle",

  // ── Wizard: organisation ──
  wiz_org_title: "Organisatiegegevens",
  wiz_org_sub: "Voer de organisatienaam in en kies het toegangstype.",
  wiz_org_name: "Organisatienaam",
  wiz_org_name_ph: "bijv. BlackRock",
  wiz_org_type: "Toegangstype",
  wiz_org_type_wl: "Domein-whitelist",
  wiz_org_type_wl_desc: "Herkenning op e-maildomein. Gebruikers loggen in met e-mail + wachtwoord.",
  wiz_org_type_sso: "SSO via eigen IdP (OIDC)",
  wiz_org_type_sso_desc: "Gebruikers loggen in via de identity provider van hun organisatie. Geen wachtwoord bij IO.",

  // ── Wizard: contacts ──
  wiz_contacts_title: "Contactpersonen",
  wiz_contacts_sub: "Voeg de belangrijkste contactpersonen bij de klantorganisatie toe.",
  wiz_contact_commercial: "Commercieel contact",
  wiz_contact_technical: "Technisch contact",
  wiz_contact_admin: "Klantbeheerder",
  wiz_contact_name: "Volledige naam",
  wiz_contact_email: "E-mailadres",
  wiz_contact_phone: "Telefoonnummer",
  wiz_contact_tech_note: "Ontvangt meldingen over het verlopen van de secret. Alleen vereist voor SSO-klanten.",

  // ── Wizard: domains ──
  wiz_domains_title: "E-maildomeinen",
  wiz_domains_sub: "Voeg de e-maildomeinen toe die bij deze organisatie horen.",

  // ── Wizard: editions ──
  wiz_editions_title: "Edities",
  wiz_editions_sub: "Selecteer tot welke Investment Officer-edities deze klant toegang krijgt.",

  // ── Wizard: IP ranges ──
  wiz_ip_title: "IP-bereiken",
  wiz_ip_sub: "Voeg optioneel IP-bereiken toe voor automatische herkenning.",
  wiz_ip_skip: "Overslaan \u2014 geen IP-bereiken nodig",
  wiz_ip_vpn_note: "Neem VPN-bereiken op als deze exclusief voor deze klant zijn.",

  // ── Wizard: SSO ──
  wiz_sso_title: "SSO-configuratie",
  wiz_sso_sub: "Voer de OIDC-verbindingsgegevens in van de identity provider van de klant.",
  wiz_sso_secret_note: "De secret wordt gehasht opgeslagen. Voer de verwachte verloopdatum in.",
  wiz_sso_redirect_note: "Geef deze URL aan de klant zodat zij deze kunnen configureren in hun IdP.",

  // ── Wizard: contract ──
  wiz_contract_title: "Contract",
  wiz_contract_sub: "Upload het getekende contract en voer de referentiegegevens in.",

  // ── Wizard: user limit ──
  wiz_limit_title: "Gebruikerslimiet",
  wiz_limit_sub: "Stel het maximumaantal gebruikers in voor deze enterprise-klant.",

  // ── Wizard: review ──
  wiz_review_title: "Controleren & activeren",
  wiz_review_sub: "Controleer alle gegevens voordat je de enterprise-klant activeert.",
  wiz_review_activate: "Klant activeren",
  wiz_review_save_draft: "Opslaan als concept",
  wiz_review_test_email: "Stuur testmail naar technisch contact",

  // ── Buttons ──
  btn_next: "Verder",
  btn_back: "Terug",
  btn_save: "Opslaan",
  btn_cancel: "Annuleren",
  btn_edit: "Bewerken",
  btn_delete: "Verwijderen",
  btn_close: "Sluiten",

  // ── Client admin view ──
  cv_title: "Enterprise-toegang",
  cv_provider: "Provider",
  cv_status: "Status",
  cv_secret_expires: "Secret verloopt op",
  cv_renew_secret: "Secret vernieuwen",
  cv_renew_title: "Client secret vernieuwen",
  cv_renew_sub: "Voer de nieuwe client secret in vanuit uw identity provider. Het systeem valideert deze voordat hij wordt toegepast.",
  cv_renew_new_secret: "Nieuwe client secret",
  cv_renew_expiry: "Nieuwe verloopdatum",
  cv_renew_confirm: "Valideren & opslaan",
  cv_renew_success: "Secret succesvol bijgewerkt.",
  cv_renew_error: "Validatie mislukt. De oude secret blijft actief.",

  // ── Alerts ──
  alert_title_expiry: "Secret verloopt binnenkort",
  alert_title_expired: "Secret verlopen",
  alert_title_limit: "Gebruikerslimiet bijna bereikt",
  alert_days_prefix: "Verloopt over",
  alert_days_suffix: "dagen",
  alert_view_client: "Bekijk klant",

  // ── Enterprise request form ──
  req_form_intro: "Vul onderstaande gegevens in om enterprise-toegang aan te vragen bij Investment Officer. Het kost slechts een minuut.",
  req_org_title: "Uw organisatie",
  req_org_sub: "Selecteer uw land en zoek uw organisatie. Bedrijfsgegevens worden automatisch opgehaald.",
  req_country: "Land",
  req_country_ph: "--- Selecteer land ---",
  req_search_company: "Organisatienaam",
  req_search_ph: "Begin met typen van uw bedrijfsnaam...",
  req_search_hint: "Typ minimaal 3 tekens. Wij zoeken uw bedrijf op via Dun & Bradstreet.",
  req_address: "Adres",
  req_kvk: "KvK-nummer",
  req_vat: "Btw-nummer",
  req_duns: "DUNS-nummer",
  req_domains_auto: "E-maildomeinen",
  req_contact_title: "Uw contactgegevens",
  req_contact_sub: "Wie mogen wij contacteren over deze aanvraag?",
  req_contact_name: "Volledige naam",
  req_contact_email: "E-mailadres",
  req_contact_phone: "Telefoonnummer",
  req_access_title: "Toegangsvoorkeuren",
  req_access_sub: "Hoe moeten uw medewerkers toegang krijgen tot Investment Officer?",
  req_access_type: "Hoe loggen uw medewerkers in?",
  req_type_wl: "Bedrijfse-mail",
  req_type_wl_desc: "Alle medewerkers met uw bedrijfse-mailadres (bijv. @uwbedrijf.nl) kunnen een account aanmaken en krijgen automatisch toegang.",
  req_type_sso: "Single Sign-On (SSO)",
  req_type_sso_desc: "Medewerkers loggen in met hun bestaande bedrijfsaccount (Microsoft 365 of Google Workspace). Geen apart wachtwoord nodig.",
  req_editions: "Welke edities heeft u nodig?",
  req_edition_single: "Toegang voor één land",
  req_edition_all: "Toegang tot alle edities",
  req_est_users: "Geschat aantal gebruikers",
  req_est_select: "Selecteer...",
  req_review_title: "Controleer uw aanvraag",
  req_review_sub: "Controleer onderstaande gegevens voordat u de aanvraag verstuurt.",
  req_review_note: "Na verzending beoordeelt ons team uw aanvraag en nemen wij binnen 2 werkdagen contact met u op.",
  req_submit: "Aanvraag versturen",
  req_submitted_title: "Aanvraag verstuurd",
  req_submitted_msg: "Dank u wel. Wij hebben uw aanvraag ontvangen en nemen binnen 2 werkdagen contact met u op.",
}

// ─────────────────────────────────────────────────────────────────────────────

export const de = {
  lang: "de",

  // ── App ──
  app_title: "Investment Officer",

  // ── Sidebar ──
  sidebar_section_ea: "Enterprise-Zugang",
  sidebar_section_request: "Enterprise-Anfrage",
  sidebar_section_view: "Ansicht als",
  sidebar_section_language: "Sprache",
  sidebar_clients: "Kunden",
  sidebar_new_client: "Neuer Kunde",
  sidebar_alerts: "Meldungen",
  sidebar_client_admin: "Kunden-Admin",
  sidebar_request: "Neue Anfrage",

  // ── Top bar ──
  topbar_overview: "Enterprise-Kunden",
  topbar_wizard: "Neuer Enterprise-Kunde",
  topbar_alerts: "Meldungen & Benachrichtigungen",
  topbar_client_view: "Kunden-Admin-Ansicht",
  topbar_detail: "Kundendetail",
  topbar_request: "Enterprise-Zugang anfragen",

  // ── Demo banner ──
  demo_hint: "Dies ist eine Demo-Umgebung. Alle Daten sind simuliert. Verwenden Sie die Seitenleiste, um zwischen Ansichten zu navigieren.",
  demo_badge: "Enterprise Access POC",

  // ── Overview table ──
  ov_name: "Organisation",
  ov_type: "Typ",
  ov_users: "Nutzer",
  ov_domains: "Domains",
  ov_editions: "Editionen",
  ov_status: "Status",
  ov_secret_expiry: "Secret läuft ab",
  ov_contract: "Vertrag",
  ov_type_sso: "SSO",
  ov_type_whitelist: "Whitelist",
  ov_search_placeholder: "Suche nach Name oder Domain\u2026",
  ov_filter_all: "Alle",
  ov_filter_status: "Status",
  ov_filter_type: "Typ",
  ov_new_client: "Neuer Enterprise-Kunde",
  ov_no_results: "Keine Kunden gefunden.",
  ov_contract_linked: "Verknüpft",
  ov_contract_missing: "Fehlt",

  // ── Status badges ──
  status_active: "Aktiv",
  status_draft: "Entwurf",
  status_suspended: "Ausgesetzt",
  status_archived: "Archiviert",
  status_configuring: "Konfigurieren",
  status_testing: "Testen",
  status_expired: "Abgelaufen",
  status_error: "Fehler",

  // ── Expiry ──
  expiry_days: "{n} Tage",
  expiry_expired: "Abgelaufen",
  expiry_na: "K. A.",

  // ── Detail tabs ──
  tab_general: "Allgemein",
  tab_domains: "Domains",
  tab_editions: "Editionen",
  tab_sso: "SSO-Konfiguration",
  tab_ip_ranges: "IP-Bereiche",
  tab_contract: "Vertrag",
  tab_user_limit: "Nutzerlimit",
  tab_blocklist: "Sperrliste",
  tab_users: "Nutzer",
  tab_audit: "Audit-Protokoll",

  // ── Detail: general ──
  detail_org_name: "Organisationsname",
  detail_status: "Status",
  detail_type: "Zugangstyp",
  detail_created: "Erstellt",
  detail_activated: "Aktiviert",
  detail_notes: "Notizen",
  detail_contacts: "Kontaktpersonen",
  detail_role_commercial: "Kommerziell",
  detail_role_technical: "Technisch",
  detail_role_admin: "Admin",

  // ── Detail: domains ──
  domain_name: "Domain",
  domain_primary: "Primär",
  domain_added: "Hinzugefügt",
  domain_add: "Domain hinzufügen",
  domain_remove: "Entfernen",
  domain_placeholder: "z. B. firma.de",
  domain_duplicate_error: "Diese Domain ist bereits einem anderen Kunden zugeordnet.",

  // ── Detail: editions ──
  edition_nl: "Niederlande",
  edition_be: "Belgien",
  edition_lu: "Luxemburg",
  edition_de: "Deutschland",
  edition_fr: "Frankreich",
  edition_com: "International",
  edition_quick_nl: "Nur NL",
  edition_quick_all: "Alle Editionen",

  // ── Detail: SSO ──
  sso_provider: "Identity Provider",
  sso_provider_azure: "Microsoft (Azure AD / Entra ID)",
  sso_provider_google: "Google Workspace",
  sso_client_id: "Client-ID",
  sso_tenant_id: "Tenant-ID",
  sso_discovery_url: "Discovery-URL",
  sso_redirect_uri: "Redirect-URI",
  sso_secret: "Client-Secret",
  sso_secret_masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  sso_secret_expires: "Secret läuft ab",
  sso_secret_updated: "Secret zuletzt aktualisiert",
  sso_email_claim: "E-Mail-Claim",
  sso_status: "Verbindungsstatus",
  sso_test_btn: "Verbindung testen",
  sso_test_success: "Verbindung erfolgreich",
  sso_test_fail: "Verbindung fehlgeschlagen",
  sso_allow_password: "Passworterstellung erlauben",
  sso_allow_password_desc: "Nutzer können neben SSO auch ein IO-Passwort erstellen. Nur aktivieren, wenn das VPN des Kunden mobiles OAuth blockiert.",
  sso_allow_password_warn: "Wenn aktiviert, können SSO-Nutzer ein Passwort bei IO erstellen. Verwenden Sie dies, wenn VPN den (mobilen) OAuth-Zugang verhindert.",
  sso_allow_password_on: "Aktiviert \u2014 Nutzer können ein Passwort erstellen",
  sso_allow_password_off: "Deaktiviert \u2014 nur SSO (empfohlen)",

  // ── Detail: IP ranges ──
  ip_from: "Von",
  ip_to: "Bis",
  ip_label: "Bezeichnung",
  ip_add: "IP-Bereich hinzufügen",
  ip_remove: "Entfernen",

  // ── Detail: contract ──
  contract_sap: "SAP-Nummer",
  contract_date: "Vertragsdatum",
  contract_duration: "Laufzeit",
  contract_pdf: "Unterzeichneter Vertrag",
  contract_upload: "Vertrag hochladen (PDF)",
  contract_replace: "Ersetzen",
  contract_download: "Herunterladen",
  contract_uploaded_by: "Hochgeladen von",
  contract_uploaded_at: "Hochgeladen am",

  // ── Detail: user limit ──
  user_limit_current: "Aktuelles Limit",
  user_limit_active: "Aktive Nutzer",
  user_limit_edit: "Limit bearbeiten",
  user_limit_default: "Standard: 500",

  // ── Detail: blocklist ──
  bl_email: "E-Mail-Adresse",
  bl_reason: "Grund",
  bl_blocked_at: "Gesperrt am",
  bl_blocked_by: "Gesperrt von",
  bl_add: "Nutzer sperren",
  bl_remove: "Entsperren",
  bl_empty: "Keine gesperrten Nutzer.",
  bl_placeholder_email: "nutzer@firma.de",
  bl_placeholder_reason: "Grund für die Sperrung",

  // ── Detail: audit log ──
  audit_action: "Aktion",
  audit_actor: "Ausführender",
  audit_details: "Details",
  audit_timestamp: "Zeitstempel",

  // ── Wizard: step labels ──
  wiz_step_org: "Organisation",
  wiz_step_contacts: "Kontakte",
  wiz_step_domains: "Domains",
  wiz_step_editions: "Editionen",
  wiz_step_ip: "IP-Bereiche",
  wiz_step_sso: "SSO",
  wiz_step_contract: "Vertrag",
  wiz_step_limit: "Nutzerlimit",
  wiz_step_review: "Überprüfung",

  // ── Wizard: organisation ──
  wiz_org_title: "Organisationsdetails",
  wiz_org_sub: "Geben Sie den Organisationsnamen ein und wählen Sie den Zugangstyp.",
  wiz_org_name: "Organisationsname",
  wiz_org_name_ph: "z. B. BlackRock",
  wiz_org_type: "Zugangstyp",
  wiz_org_type_wl: "Domain-Whitelist",
  wiz_org_type_wl_desc: "Erkennung über E-Mail-Domain. Nutzer melden sich mit E-Mail + Passwort an.",
  wiz_org_type_sso: "SSO über eigenen IdP (OIDC)",
  wiz_org_type_sso_desc: "Nutzer melden sich über den Identity Provider ihrer Organisation an. Kein Passwort bei IO.",

  // ── Wizard: contacts ──
  wiz_contacts_title: "Kontaktpersonen",
  wiz_contacts_sub: "Fügen Sie die wichtigsten Kontaktpersonen der Kundenorganisation hinzu.",
  wiz_contact_commercial: "Kommerzieller Kontakt",
  wiz_contact_technical: "Technischer Kontakt",
  wiz_contact_admin: "Kundenadministrator",
  wiz_contact_name: "Vollständiger Name",
  wiz_contact_email: "E-Mail-Adresse",
  wiz_contact_phone: "Telefonnummer",
  wiz_contact_tech_note: "Erhält Meldungen zum Ablauf des Secrets. Nur für SSO-Kunden erforderlich.",

  // ── Wizard: domains ──
  wiz_domains_title: "E-Mail-Domains",
  wiz_domains_sub: "Fügen Sie die E-Mail-Domains hinzu, die zu dieser Organisation gehören.",

  // ── Wizard: editions ──
  wiz_editions_title: "Editionen",
  wiz_editions_sub: "Wählen Sie, auf welche Investment Officer-Editionen dieser Kunde Zugriff erhält.",

  // ── Wizard: IP ranges ──
  wiz_ip_title: "IP-Bereiche",
  wiz_ip_sub: "Fügen Sie optional IP-Bereiche zur automatischen Erkennung hinzu.",
  wiz_ip_skip: "Überspringen \u2014 keine IP-Bereiche nötig",
  wiz_ip_vpn_note: "Nehmen Sie VPN-Bereiche auf, wenn diese exklusiv für diesen Kunden sind.",

  // ── Wizard: SSO ──
  wiz_sso_title: "SSO-Konfiguration",
  wiz_sso_sub: "Geben Sie die OIDC-Verbindungsdaten des Identity Providers des Kunden ein.",
  wiz_sso_secret_note: "Das Secret wird gehasht gespeichert. Geben Sie das erwartete Ablaufdatum ein.",
  wiz_sso_redirect_note: "Geben Sie diese URL an den Kunden weiter, damit er sie in seinem IdP konfigurieren kann.",

  // ── Wizard: contract ──
  wiz_contract_title: "Vertrag",
  wiz_contract_sub: "Laden Sie den unterzeichneten Vertrag hoch und geben Sie die Referenzdaten ein.",

  // ── Wizard: user limit ──
  wiz_limit_title: "Nutzerlimit",
  wiz_limit_sub: "Legen Sie die maximale Anzahl von Nutzern für diesen Enterprise-Kunden fest.",

  // ── Wizard: review ──
  wiz_review_title: "Überprüfen & aktivieren",
  wiz_review_sub: "Überprüfen Sie alle Details, bevor Sie den Enterprise-Kunden aktivieren.",
  wiz_review_activate: "Kunde aktivieren",
  wiz_review_save_draft: "Als Entwurf speichern",
  wiz_review_test_email: "Test-E-Mail an technischen Kontakt senden",

  // ── Buttons ──
  btn_next: "Weiter",
  btn_back: "Zurück",
  btn_save: "Speichern",
  btn_cancel: "Abbrechen",
  btn_edit: "Bearbeiten",
  btn_delete: "Löschen",
  btn_close: "Schließen",

  // ── Client admin view ──
  cv_title: "Enterprise-Zugang",
  cv_provider: "Anbieter",
  cv_status: "Status",
  cv_secret_expires: "Secret läuft ab am",
  cv_renew_secret: "Secret erneuern",
  cv_renew_title: "Client-Secret erneuern",
  cv_renew_sub: "Geben Sie das neue Client-Secret aus Ihrem Identity Provider ein. Das System validiert es vor der Übernahme.",
  cv_renew_new_secret: "Neues Client-Secret",
  cv_renew_expiry: "Neues Ablaufdatum",
  cv_renew_confirm: "Validieren & speichern",
  cv_renew_success: "Secret erfolgreich aktualisiert.",
  cv_renew_error: "Validierung fehlgeschlagen. Das alte Secret bleibt aktiv.",

  // ── Alerts ──
  alert_title_expiry: "Secret läuft bald ab",
  alert_title_expired: "Secret abgelaufen",
  alert_title_limit: "Nutzerlimit fast erreicht",
  alert_days_prefix: "Läuft ab in",
  alert_days_suffix: "Tagen",
  alert_view_client: "Kunde anzeigen",

  // ── Enterprise request form ──
  req_form_intro: "Füllen Sie die folgenden Angaben aus, um Enterprise-Zugang zu Investment Officer anzufragen. Es dauert nur eine Minute.",
  req_org_title: "Ihre Organisation",
  req_org_sub: "Wählen Sie Ihr Land und suchen Sie Ihre Organisation. Unternehmensdaten werden automatisch abgerufen.",
  req_country: "Land",
  req_country_ph: "--- Land auswählen ---",
  req_search_company: "Organisationsname",
  req_search_ph: "Beginnen Sie mit der Eingabe Ihres Firmennamens...",
  req_search_hint: "Geben Sie mindestens 3 Zeichen ein. Wir suchen Ihr Unternehmen über Dun & Bradstreet.",
  req_address: "Adresse",
  req_kvk: "Handelsregisternummer",
  req_vat: "Umsatzsteuer-ID",
  req_duns: "DUNS-Nummer",
  req_domains_auto: "E-Mail-Domains",
  req_contact_title: "Ihre Kontaktdaten",
  req_contact_sub: "Wen dürfen wir zu dieser Anfrage kontaktieren?",
  req_contact_name: "Vollständiger Name",
  req_contact_email: "E-Mail-Adresse",
  req_contact_phone: "Telefonnummer",
  req_access_title: "Zugangspräferenzen",
  req_access_sub: "Wie sollen Ihre Mitarbeiter auf Investment Officer zugreifen?",
  req_access_type: "Wie melden sich Ihre Mitarbeiter an?",
  req_type_wl: "Firmen-E-Mail",
  req_type_wl_desc: "Alle Mitarbeiter mit Ihrer Firmen-E-Mail-Adresse (z. B. @ihrefirma.de) können ein Konto erstellen und erhalten automatisch Zugang.",
  req_type_sso: "Single Sign-On (SSO)",
  req_type_sso_desc: "Mitarbeiter melden sich mit ihrem bestehenden Firmenkonto an (Microsoft 365 oder Google Workspace). Kein separates Passwort nötig.",
  req_editions: "Welche Editionen benötigen Sie?",
  req_edition_single: "Zugang für ein Land",
  req_edition_all: "Zugang zu allen Editionen",
  req_est_users: "Geschätzte Nutzerzahl",
  req_est_select: "Auswählen...",
  req_review_title: "Anfrage überprüfen",
  req_review_sub: "Bitte überprüfen Sie die untenstehenden Angaben vor dem Absenden.",
  req_review_note: "Nach dem Absenden prüft unser Team Ihre Anfrage und kontaktiert Sie innerhalb von 2 Werktagen.",
  req_submit: "Anfrage absenden",
  req_submitted_title: "Anfrage gesendet",
  req_submitted_msg: "Vielen Dank. Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 2 Werktagen bei Ihnen.",
}

// ─────────────────────────────────────────────────────────────────────────────

export const fr = {
  lang: "fr",

  // ── App ──
  app_title: "Investment Officer",

  // ── Sidebar ──
  sidebar_section_ea: "Accès Enterprise",
  sidebar_section_request: "Demande Enterprise",
  sidebar_section_view: "Afficher en tant que",
  sidebar_section_language: "Langue",
  sidebar_clients: "Clients",
  sidebar_new_client: "Nouveau client",
  sidebar_alerts: "Alertes",
  sidebar_client_admin: "Admin client",
  sidebar_request: "Nouvelle demande",

  // ── Top bar ──
  topbar_overview: "Clients Enterprise",
  topbar_wizard: "Nouveau client Enterprise",
  topbar_alerts: "Alertes & Notifications",
  topbar_client_view: "Vue admin client",
  topbar_detail: "Détail client",
  topbar_request: "Demande d'accès Enterprise",

  // ── Demo banner ──
  demo_hint: "Ceci est un environnement de démonstration. Toutes les données sont simulées. Utilisez la barre latérale pour naviguer entre les vues.",
  demo_badge: "Enterprise Access POC",

  // ── Overview table ──
  ov_name: "Organisation",
  ov_type: "Type",
  ov_users: "Utilisateurs",
  ov_domains: "Domaines",
  ov_editions: "Éditions",
  ov_status: "Statut",
  ov_secret_expiry: "Expiration du secret",
  ov_contract: "Contrat",
  ov_type_sso: "SSO",
  ov_type_whitelist: "Whitelist",
  ov_search_placeholder: "Rechercher par nom ou domaine\u2026",
  ov_filter_all: "Tous",
  ov_filter_status: "Statut",
  ov_filter_type: "Type",
  ov_new_client: "Nouveau client Enterprise",
  ov_no_results: "Aucun client trouvé.",
  ov_contract_linked: "Lié",
  ov_contract_missing: "Manquant",

  // ── Status badges ──
  status_active: "Actif",
  status_draft: "Brouillon",
  status_suspended: "Suspendu",
  status_archived: "Archivé",
  status_configuring: "Configuration",
  status_testing: "Test",
  status_expired: "Expiré",
  status_error: "Erreur",

  // ── Expiry ──
  expiry_days: "{n} jours",
  expiry_expired: "Expiré",
  expiry_na: "N/A",

  // ── Detail tabs ──
  tab_general: "Général",
  tab_domains: "Domaines",
  tab_editions: "Éditions",
  tab_sso: "Configuration SSO",
  tab_ip_ranges: "Plages IP",
  tab_contract: "Contrat",
  tab_user_limit: "Limite utilisateurs",
  tab_blocklist: "Liste de blocage",
  tab_users: "Utilisateurs",
  tab_audit: "Journal d'audit",

  // ── Detail: general ──
  detail_org_name: "Nom de l'organisation",
  detail_status: "Statut",
  detail_type: "Type d'accès",
  detail_created: "Créé",
  detail_activated: "Activé",
  detail_notes: "Notes",
  detail_contacts: "Personnes de contact",
  detail_role_commercial: "Commercial",
  detail_role_technical: "Technique",
  detail_role_admin: "Administrateur",

  // ── Detail: domains ──
  domain_name: "Domaine",
  domain_primary: "Primaire",
  domain_added: "Ajouté",
  domain_add: "Ajouter un domaine",
  domain_remove: "Supprimer",
  domain_placeholder: "p. ex. entreprise.fr",
  domain_duplicate_error: "Ce domaine est déjà lié à un autre client.",

  // ── Detail: editions ──
  edition_nl: "Pays-Bas",
  edition_be: "Belgique",
  edition_lu: "Luxembourg",
  edition_de: "Allemagne",
  edition_fr: "France",
  edition_com: "International",
  edition_quick_nl: "NL uniquement",
  edition_quick_all: "Toutes les éditions",

  // ── Detail: SSO ──
  sso_provider: "Fournisseur d'identité",
  sso_provider_azure: "Microsoft (Azure AD / Entra ID)",
  sso_provider_google: "Google Workspace",
  sso_client_id: "Client ID",
  sso_tenant_id: "Tenant ID",
  sso_discovery_url: "URL de découverte",
  sso_redirect_uri: "URI de redirection",
  sso_secret: "Client secret",
  sso_secret_masked: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  sso_secret_expires: "Expiration du secret",
  sso_secret_updated: "Dernière mise à jour du secret",
  sso_email_claim: "Claim e-mail",
  sso_status: "État de la connexion",
  sso_test_btn: "Tester la connexion",
  sso_test_success: "Connexion réussie",
  sso_test_fail: "Connexion échouée",
  sso_allow_password: "Autoriser la création de mot de passe",
  sso_allow_password_desc: "Les utilisateurs peuvent aussi créer un mot de passe IO en plus du SSO. Activez uniquement si le VPN du client bloque OAuth mobile.",
  sso_allow_password_warn: "Si activé, les utilisateurs SSO peuvent créer un mot de passe chez IO. À utiliser lorsque le VPN empêche l'accès OAuth (mobile).",
  sso_allow_password_on: "Activé \u2014 les utilisateurs peuvent créer un mot de passe",
  sso_allow_password_off: "Désactivé \u2014 SSO uniquement (recommandé)",

  // ── Detail: IP ranges ──
  ip_from: "De",
  ip_to: "À",
  ip_label: "Libellé",
  ip_add: "Ajouter une plage IP",
  ip_remove: "Supprimer",

  // ── Detail: contract ──
  contract_sap: "Numéro SAP",
  contract_date: "Date du contrat",
  contract_duration: "Durée",
  contract_pdf: "Contrat signé",
  contract_upload: "Télécharger le contrat (PDF)",
  contract_replace: "Remplacer",
  contract_download: "Télécharger",
  contract_uploaded_by: "Téléchargé par",
  contract_uploaded_at: "Téléchargé le",

  // ── Detail: user limit ──
  user_limit_current: "Limite actuelle",
  user_limit_active: "Utilisateurs actifs",
  user_limit_edit: "Modifier la limite",
  user_limit_default: "Par défaut : 500",

  // ── Detail: blocklist ──
  bl_email: "Adresse e-mail",
  bl_reason: "Motif",
  bl_blocked_at: "Bloqué le",
  bl_blocked_by: "Bloqué par",
  bl_add: "Bloquer un utilisateur",
  bl_remove: "Débloquer",
  bl_empty: "Aucun utilisateur bloqué.",
  bl_placeholder_email: "utilisateur@entreprise.fr",
  bl_placeholder_reason: "Motif du blocage",

  // ── Detail: audit log ──
  audit_action: "Action",
  audit_actor: "Exécutant",
  audit_details: "Détails",
  audit_timestamp: "Horodatage",

  // ── Wizard: step labels ──
  wiz_step_org: "Organisation",
  wiz_step_contacts: "Contacts",
  wiz_step_domains: "Domaines",
  wiz_step_editions: "Éditions",
  wiz_step_ip: "Plages IP",
  wiz_step_sso: "SSO",
  wiz_step_contract: "Contrat",
  wiz_step_limit: "Limite utilisateurs",
  wiz_step_review: "Vérification",

  // ── Wizard: organisation ──
  wiz_org_title: "Détails de l'organisation",
  wiz_org_sub: "Saisissez le nom de l'organisation et choisissez le type d'accès.",
  wiz_org_name: "Nom de l'organisation",
  wiz_org_name_ph: "p. ex. BlackRock",
  wiz_org_type: "Type d'accès",
  wiz_org_type_wl: "Whitelist de domaines",
  wiz_org_type_wl_desc: "Reconnaissance par domaine e-mail. Les utilisateurs se connectent avec e-mail + mot de passe.",
  wiz_org_type_sso: "SSO via propre IdP (OIDC)",
  wiz_org_type_sso_desc: "Les utilisateurs se connectent via le fournisseur d'identité de leur organisation. Pas de mot de passe chez IO.",

  // ── Wizard: contacts ──
  wiz_contacts_title: "Personnes de contact",
  wiz_contacts_sub: "Ajoutez les contacts principaux de l'organisation cliente.",
  wiz_contact_commercial: "Contact commercial",
  wiz_contact_technical: "Contact technique",
  wiz_contact_admin: "Administrateur client",
  wiz_contact_name: "Nom complet",
  wiz_contact_email: "Adresse e-mail",
  wiz_contact_phone: "Numéro de téléphone",
  wiz_contact_tech_note: "Reçoit les alertes d'expiration du secret. Requis uniquement pour les clients SSO.",

  // ── Wizard: domains ──
  wiz_domains_title: "Domaines e-mail",
  wiz_domains_sub: "Ajoutez les domaines e-mail qui appartiennent à cette organisation.",

  // ── Wizard: editions ──
  wiz_editions_title: "Éditions",
  wiz_editions_sub: "Sélectionnez les éditions Investment Officer auxquelles ce client aura accès.",

  // ── Wizard: IP ranges ──
  wiz_ip_title: "Plages IP",
  wiz_ip_sub: "Ajoutez éventuellement des plages IP pour la reconnaissance automatique.",
  wiz_ip_skip: "Passer \u2014 pas de plages IP nécessaires",
  wiz_ip_vpn_note: "Incluez les plages VPN si elles sont exclusives à ce client.",

  // ── Wizard: SSO ──
  wiz_sso_title: "Configuration SSO",
  wiz_sso_sub: "Saisissez les données de connexion OIDC du fournisseur d'identité du client.",
  wiz_sso_secret_note: "Le secret sera stocké haché. Saisissez la date d'expiration prévue.",
  wiz_sso_redirect_note: "Fournissez cette URL au client pour qu'il puisse la configurer dans son IdP.",

  // ── Wizard: contract ──
  wiz_contract_title: "Contrat",
  wiz_contract_sub: "Téléchargez le contrat signé et saisissez les données de référence.",

  // ── Wizard: user limit ──
  wiz_limit_title: "Limite utilisateurs",
  wiz_limit_sub: "Définissez le nombre maximum d'utilisateurs pour ce client Enterprise.",

  // ── Wizard: review ──
  wiz_review_title: "Vérifier & activer",
  wiz_review_sub: "Vérifiez tous les détails avant d'activer le client Enterprise.",
  wiz_review_activate: "Activer le client",
  wiz_review_save_draft: "Enregistrer comme brouillon",
  wiz_review_test_email: "Envoyer un e-mail test au contact technique",

  // ── Buttons ──
  btn_next: "Continuer",
  btn_back: "Retour",
  btn_save: "Enregistrer",
  btn_cancel: "Annuler",
  btn_edit: "Modifier",
  btn_delete: "Supprimer",
  btn_close: "Fermer",

  // ── Client admin view ──
  cv_title: "Accès Enterprise",
  cv_provider: "Fournisseur",
  cv_status: "Statut",
  cv_secret_expires: "Le secret expire le",
  cv_renew_secret: "Renouveler le secret",
  cv_renew_title: "Renouveler le client secret",
  cv_renew_sub: "Saisissez le nouveau client secret de votre fournisseur d'identité. Le système le validera avant de l'appliquer.",
  cv_renew_new_secret: "Nouveau client secret",
  cv_renew_expiry: "Nouvelle date d'expiration",
  cv_renew_confirm: "Valider & enregistrer",
  cv_renew_success: "Secret mis à jour avec succès.",
  cv_renew_error: "Validation échouée. L'ancien secret reste actif.",

  // ── Alerts ──
  alert_title_expiry: "Expiration du secret imminente",
  alert_title_expired: "Secret expiré",
  alert_title_limit: "Limite utilisateurs bientôt atteinte",
  alert_days_prefix: "Expire dans",
  alert_days_suffix: "jours",
  alert_view_client: "Voir le client",

  // ── Enterprise request form ──
  req_form_intro: "Remplissez les informations ci-dessous pour demander un accès Enterprise à Investment Officer. Cela ne prend qu'une minute.",
  req_org_title: "Votre organisation",
  req_org_sub: "Sélectionnez votre pays et recherchez votre organisation. Les données de l'entreprise sont récupérées automatiquement.",
  req_country: "Pays",
  req_country_ph: "--- Sélectionnez un pays ---",
  req_search_company: "Nom de l'organisation",
  req_search_ph: "Commencez à saisir le nom de votre entreprise...",
  req_search_hint: "Saisissez au moins 3 caractères. Nous recherchons votre entreprise via Dun & Bradstreet.",
  req_address: "Adresse",
  req_kvk: "Numéro de registre",
  req_vat: "Numéro de TVA",
  req_duns: "Numéro DUNS",
  req_domains_auto: "Domaines e-mail",
  req_contact_title: "Vos coordonnées",
  req_contact_sub: "Qui devons-nous contacter au sujet de cette demande ?",
  req_contact_name: "Nom complet",
  req_contact_email: "Adresse e-mail",
  req_contact_phone: "Numéro de téléphone",
  req_access_title: "Préférences d'accès",
  req_access_sub: "Comment vos employés doivent-ils accéder à Investment Officer ?",
  req_access_type: "Comment vos employés se connectent-ils ?",
  req_type_wl: "E-mail d'entreprise",
  req_type_wl_desc: "Tous les employés avec votre adresse e-mail d'entreprise (p. ex. @votreentreprise.fr) peuvent créer un compte et obtenir un accès automatique.",
  req_type_sso: "Single Sign-On (SSO)",
  req_type_sso_desc: "Les employés se connectent avec leur compte d'entreprise existant (Microsoft 365 ou Google Workspace). Aucun mot de passe séparé nécessaire.",
  req_editions: "De quelles éditions avez-vous besoin ?",
  req_edition_single: "Accès pour un pays",
  req_edition_all: "Accès à toutes les éditions",
  req_est_users: "Nombre estimé d'utilisateurs",
  req_est_select: "Sélectionnez...",
  req_review_title: "Vérifiez votre demande",
  req_review_sub: "Veuillez vérifier les informations ci-dessous avant d'envoyer.",
  req_review_note: "Après envoi, notre équipe examinera votre demande et vous contactera dans les 2 jours ouvrables.",
  req_submit: "Envoyer la demande",
  req_submitted_title: "Demande envoyée",
  req_submitted_msg: "Merci. Nous avons reçu votre demande et vous recontacterons dans les 2 jours ouvrables.",
}
