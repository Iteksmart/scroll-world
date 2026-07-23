export type Integration = {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  lede: string;
  /** What flows in / what flows back. */
  loop: { inbound: string; outbound: string };
  capabilities: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faq: { q: string; a: string }[];
};

export const integrations: Integration[] = [
  {
    slug: "servicenow",
    name: "ServiceNow",
    category: "ITSM",
    metaTitle: "ServiceNow + iTechSmart — Tickets That Close Themselves",
    metaDescription:
      "Connect ServiceNow to iTechSmart UAIO: incidents classified at 94% confidence, resolved autonomously, closed with proof-of-fix attached. Setup takes 10 minutes.",
    tagline: "Your system of record, now with proof of work",
    lede: "ServiceNow stays the front door. The UAIO loop does the work behind it — incidents classified in 0.4 seconds, resolved autonomously, and closed with a cryptographic receipt attached before anyone touches the queue.",
    loop: {
      inbound:
        "A Business Rule fires on incident insert or update and POSTs the short description, category, priority, CI, and assignment group to the UAIO classify endpoint.",
      outbound:
        "Classification, root cause, remediation output, and the sealed ProofLink receipt flow back as work notes; incidents above your confidence threshold resolve automatically with proof-of-fix in the close notes.",
    },
    capabilities: [
      {
        title: "One Business Rule, no MID Server",
        copy: "The rule calls the iTechSmart API directly over TLS 1.3. No MID Server, no VPN tunnel, no on-premise agent — one scoped API key and you are live.",
      },
      {
        title: "Auto-close with proof attached",
        copy: "When remediation verifies, UAIO writes terminal output, log diffs, and before/after state to the ticket and resolves it. 100% of auto-closed incidents carry proof-of-fix.",
      },
      {
        title: "Your threshold, your scope",
        copy: "Set the confidence bar for auto-resolution and filter by category, assignment group, CI, or priority. Most teams start with P3/P4 and expand once the numbers hold up.",
      },
    ],
    steps: [
      {
        title: "Generate a scoped API key",
        copy: "Create it from the iTechSmart dashboard with classify and remediate permissions for your ServiceNow instance.",
      },
      {
        title: "Install the Business Rule",
        copy: "Copy the drop-in rule (async, on insert/update), set itechsmart.api_key as a system property, and incidents start routing to the loop.",
      },
      {
        title: "Watch tickets close themselves",
        copy: "Above your confidence threshold, incidents resolve with proof-of-fix in the close notes. Below it, UAIO adds a work note with its analysis and leaves the ticket for a human.",
      },
    ],
    faq: [
      {
        q: "Does iTechSmart replace ServiceNow?",
        a: "No — it does the work ServiceNow tracks. Keep your instance as the system of record; the loop resolves what lands there and leaves the evidence on the ticket.",
      },
      {
        q: "Which ServiceNow releases are supported?",
        a: "Tokyo, Utah, Vancouver, Washington DC, and Xanadu. The integration uses standard REST and Business Rule APIs available in all supported versions.",
      },
    ],
  },
  {
    slug: "wazuh",
    name: "Wazuh",
    category: "SIEM",
    metaTitle: "Wazuh + iTechSmart — SIEM Fixes We Run in Production",
    metaDescription:
      "Wire Wazuh active responses into iTechSmart UAIO — the pipeline we run in production, 131+ incidents indexed. Every alert ends in a sealed receipt. Book a demo.",
    tagline: "The integration we run on ourselves",
    lede: "wazuh.itechsmart.dev is our live production Wazuh instance — v4.7.3, 131+ incidents indexed. Every alert on our own infrastructure goes through this exact pipeline: classified in 0.4 seconds, remediated autonomously, sealed with Bitcoin-anchored proof. This is not a demo.",
    loop: {
      inbound:
        "A custom active response on the Wazuh manager fires at your chosen rule level (we run 8+) and sends the full alert payload — rule ID, level, agent name, raw log — to the UAIO classify endpoint.",
      outbound:
        "UAIO executes the matching remediation runbook on the affected agent, then anchors the proof-of-fix — terminal output, log diffs, before/after state — to Bitcoin. The receipt link comes back with the response.",
    },
    capabilities: [
      {
        title: "Production-proven pipeline",
        copy: "File integrity changes, rootkit activity, brute-force attempts, log anomalies — the same rules that protect our own stack route straight into autonomous remediation. 0.6h mean time to remediate.",
      },
      {
        title: "Smarter than a static script",
        copy: "Built-in active responses execute one fixed action. UAIO classifies, finds root cause, picks the remediation, executes, and verifies the fix — no analyst in the loop.",
      },
      {
        title: "Bitcoin-anchored proof-of-fix",
        copy: "Every remediation is captured, hashed, and anchored to Bitcoin. An immutable audit trail for every action your SIEM triggered, verifiable at verify.itechsmart.dev.",
      },
    ],
    steps: [
      {
        title: "Register the command",
        copy: "Add the itechsmart-uaio active response block to your manager's ossec.conf, scoped to the rule levels you want routed (1–15; we run 8+).",
      },
      {
        title: "Drop in the script",
        copy: "Place itechsmart-uaio.sh in /var/ossec/active-response/bin/, make it executable, and set your API key. It reads the alert JSON from stdin and calls the classify endpoint.",
      },
      {
        title: "Tune the threshold",
        copy: "Most teams start at level 10+ for critical events, then lower it as results validate. You can also target specific rule IDs or groups instead of levels.",
      },
    ],
    faq: [
      {
        q: "Is this really the same Wazuh instance iTechSmart runs?",
        a: "Yes. wazuh.itechsmart.dev is our production security stack, running v4.7.3 with 131+ incidents indexed and counting. Every alert on our infrastructure goes through this exact pipeline.",
      },
      {
        q: "Does it work with Wazuh Cloud or only self-hosted?",
        a: "Both. The active response configuration is identical; the only requirement is that the manager can reach the iTechSmart API. On Wazuh Cloud, configure it through the management console.",
      },
    ],
  },
  {
    slug: "datadog",
    name: "Datadog",
    category: "Observability",
    metaTitle: "Datadog + iTechSmart — Alerts That Fix Themselves",
    metaDescription:
      "Point Datadog webhooks at iTechSmart UAIO: alerts classified in under 400ms, remediated autonomously, sealed with Bitcoin-anchored proof. Connect in 10 minutes.",
    tagline: "Datadog detects it. UAIO fixes it.",
    lede: "Keep every dashboard, monitor, and trace. Point your Datadog webhooks at the UAIO API and every alert gets classified, diagnosed, and resolved autonomously — with an immutable proof-of-fix before the pager even rings.",
    loop: {
      inbound:
        "The Datadog webhook integration POSTs the full alert payload — title, tags, priority, monitor ID, snapshot link — to the UAIO classify endpoint the moment a monitor crosses its threshold.",
      outbound:
        "UAIO classifies in under 400ms, executes the matching runbook, and posts a resolution comment with the proof link back to the Datadog event stream. The receipt is hashed and anchored to Bitcoin.",
    },
    capabilities: [
      {
        title: "Every monitor type, zero changes",
        copy: "Metric, log, APM trace, synthetic, composite, SLO, and anomaly monitors all work as-is. If Datadog can fire a webhook, UAIO can classify and remediate it.",
      },
      {
        title: "Never a silent failure",
        copy: "If a remediation does not produce a verified fix, the incident escalates to your on-call team with full context: what was tried, what failed, recommended next steps. The alert stays open.",
      },
      {
        title: "Audit trail built for auditors",
        copy: "Each fix produces a proof bundle — terminal output, log diffs, before/after state, confidence score — hashed and Bitcoin-anchored. Tamper-proof evidence for SOC 2, HIPAA, and FedRAMP.",
      },
    ],
    steps: [
      {
        title: "Add the webhook",
        copy: "Datadog → Integrations → Webhooks. Paste the UAIO classify endpoint with your API key in the Bearer header. No agents to install, no code to deploy.",
      },
      {
        title: "Attach it to monitors",
        copy: "Add the webhook to the monitors you want in the loop. Start with a service, expand as MTTR drops.",
      },
      {
        title: "Test from your terminal",
        copy: "curl a sample alert and watch the classification, root cause, and remediation summary come back in under a second — proof link included.",
      },
    ],
    faq: [
      {
        q: "Does this replace Datadog?",
        a: "No. Datadog stays exactly where it is as your monitoring and observability layer. UAIO sits downstream: Datadog detects the problem, UAIO fixes it and proves it.",
      },
      {
        q: "How long does setup take?",
        a: "About 10 minutes. One webhook, one API key. Existing monitors, synthetics, and log alerts work without changes.",
      },
    ],
  },
  {
    slug: "jira",
    name: "Jira",
    category: "Ticketing",
    metaTitle: "Jira + iTechSmart — Issues Closed With Proof",
    metaDescription:
      "Sync Jira with iTechSmart UAIO: issues open, update, and close themselves — every closure carries a verifiable ProofLink receipt. Connect in minutes.",
    tagline: "Close the ticket. Keep the proof.",
    lede: "Jira stays your tracker. The UAIO loop works the queue — issues spawned by detections resolve autonomously, transition through your workflow, and close with a ProofLink receipt in the comments.",
    loop: {
      inbound:
        "Issues, status changes, and priority updates flow into the UAIO Brain for classification and routing. Detections from Pulse and connected monitors can open issues automatically.",
      outbound:
        "Resolution comments, workflow transitions, and sealed receipt IDs flow back onto the issue. Every autonomous closure links to its receipt on the public ledger.",
    },
    capabilities: [
      {
        title: "Bidirectional status sync",
        copy: "UAIO transitions issues through your existing workflow as work progresses — no parallel tracker, no swivel-chair updates. What Jira shows is what actually happened.",
      },
      {
        title: "Receipts in the comments",
        copy: "Each autonomous resolution posts what was done, when, where, and why — with the ProofLink receipt ID. Verify any of them at verify.itechsmart.dev.",
      },
      {
        title: "Scoped by project and issue type",
        copy: "Arbiter governance maps projects, issue types, and priorities to autonomy modes. Route bugs in one project to full autonomy while another stays recommend-only.",
      },
    ],
    steps: [
      {
        title: "Connect",
        copy: "Authenticate with an API token scoped to the projects you want in the loop. Cloud and Data Center both work.",
      },
      {
        title: "Map projects to autonomy modes",
        copy: "Decide which projects and issue types UAIO can resolve autonomously and which get analysis-only comments.",
      },
      {
        title: "Watch issues transition with proof",
        copy: "Resolved issues carry the full evidence chain in their comment history — useful in the sprint retro, decisive in the audit.",
      },
    ],
    faq: [
      {
        q: "Does iTechSmart replace Jira?",
        a: "No. Jira remains your source of truth for work tracking. UAIO does the work behind the issues and leaves verifiable evidence where your team already looks.",
      },
      {
        q: "What happens when UAIO cannot fix an issue?",
        a: "The issue stays open. UAIO posts a comment with its classification, root cause analysis, and recommended next steps, then leaves the transition to a human.",
      },
    ],
  },
  {
    slug: "pagerduty",
    name: "PagerDuty",
    category: "Incident Mgmt",
    metaTitle: "PagerDuty + iTechSmart — Fewer Pages, Sealed Proof",
    metaDescription:
      "Route PagerDuty through iTechSmart UAIO: 90% alert dedup, fixes attempted before the page, and a sealed receipt on every resolution. Book a demo.",
    tagline: "The best page is the one that never fires",
    lede: "PagerDuty keeps the escalation chain. UAIO gets first crack at the incident — known failure classes self-heal in 20 seconds, duplicates get deduplicated at 90%, and what still escalates arrives with the diagnosis already done.",
    loop: {
      inbound:
        "Incidents, service mappings, and escalation policies flow into the UAIO Brain. New incidents route to autonomous triage before they reach a human pager.",
      outbound:
        "Resolved incidents close with notes and a sealed ProofLink receipt. Unresolved ones escalate through your existing policies carrying full diagnostic context — what was tried, what failed, what to do next.",
    },
    capabilities: [
      {
        title: "Fix before the page",
        copy: "Known failure classes trigger 20-second self-healing. The incident resolves, the receipt seals, and on-call sleeps through it.",
      },
      {
        title: "90% alert dedup",
        copy: "The loop correlates the storm into the incident. One root cause gets one incident, not forty pages across three services.",
      },
      {
        title: "Escalation with evidence",
        copy: "When autonomy is not the right call, the page that fires includes classification, root cause, and attempted remediation. On-call starts at step five, not step one.",
      },
    ],
    steps: [
      {
        title: "Connect",
        copy: "Authorize with a scoped API token. Your services, schedules, and escalation policies sync automatically — nothing to rebuild.",
      },
      {
        title: "Pick services for the loop",
        copy: "Route selected services through UAIO triage first. Arbiter enforces which failure classes may self-heal and which must page.",
      },
      {
        title: "Watch page volume drop",
        copy: "Incidents that used to wake someone now close themselves with receipts. The ones that still page arrive pre-diagnosed.",
      },
    ],
    faq: [
      {
        q: "Does iTechSmart replace PagerDuty?",
        a: "No. PagerDuty keeps on-call scheduling and escalation for the incidents that earn a human. UAIO just makes sure most of them never do.",
      },
      {
        q: "What does on-call actually see?",
        a: "For auto-resolved incidents: closure notes plus the receipt ID, verifiable at verify.itechsmart.dev. For escalations: the full trail of what UAIO tried, what failed, and recommended next steps.",
      },
    ],
  },
  {
    slug: "splunk",
    name: "Splunk",
    category: "SIEM",
    metaTitle: "Splunk + iTechSmart — Detections Become Fixes",
    metaDescription:
      "Turn Splunk detections into autonomous fixes: iTechSmart UAIO remediates what your searches find and seals every action with a ProofLink receipt. Request it.",
    tagline: "From search results to sealed fixes",
    lede: "Your correlation searches already find the problems. The UAIO loop takes it from there — classify, remediate, verify — and writes the receipt back where your analysts can search it.",
    loop: {
      inbound:
        "Splunk alert actions forward triggered search results — detection name, severity, affected hosts, raw events — to the UAIO classify endpoint.",
      outbound:
        "Remediation results and sealed ProofLink receipt IDs flow back as events, so resolution evidence is indexed, searchable, and correlatable alongside the original detection.",
    },
    capabilities: [
      {
        title: "Alert actions as triggers",
        copy: "Any scheduled or real-time search that can fire an alert action can hand off to the loop. Your detection engineering carries over untouched.",
      },
      {
        title: "Remediate and verify, not just notify",
        copy: "UAIO classifies the detection, executes the matching runbook, and verifies the fix before declaring it done. Detect → Decide → Do → Prove, end to end.",
      },
      {
        title: "Receipts you can search",
        copy: "Resolution events land back in the index with receipt IDs, giving analysts one query for detection-to-resolution timelines — and auditors a verifiable trail at verify.itechsmart.dev.",
      },
    ],
    steps: [
      {
        title: "Request the connector",
        copy: "The Splunk connector is in development. Tell us you need it and we will prioritize it — we build new connectors fast.",
      },
      {
        title: "Wire your alert actions",
        copy: "Point the searches you trust at the UAIO classify endpoint. Start with high-fidelity detections, expand as results validate.",
      },
      {
        title: "Verify the receipts",
        copy: "Search resolution events next to detections, and spot-check any receipt on the public ledger. Don't trust us. Verify us.",
      },
    ],
    faq: [
      {
        q: "Is the Splunk integration available today?",
        a: "It is in development. The Wazuh pipeline — the same detect-to-receipt pattern — runs in our production today, so the path is proven. Ask for Splunk and we will scope it on a call.",
      },
      {
        q: "Does UAIO replace Splunk?",
        a: "No. Splunk stays your detection and investigation layer. UAIO closes the loop after detection: autonomous remediation, verification, and a receipt indexed back for your analysts.",
      },
    ],
  },
];

export const integrationBySlug = (slug: string) => integrations.find((i) => i.slug === slug);
