export type CompareRow = {
  capability: string;
  us: string;
  them: string;
  advantage: "us" | "them" | "tie";
};

export type ComparePage = {
  /** Canonical slug, e.g. "itechsmart-vs-datadog". */
  slug: string;
  /** Extra slugs that render the same page (e.g. "datadog"). */
  aliases?: string[];
  competitor: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow?: string;
  title: string;
  lede: string;
  /** One-paragraph honest verdict shown before the table. */
  verdict: string;
  rows: CompareRow[];
  /** Honesty section — when the competitor is genuinely the better pick. */
  whenThem: string[];
  faq: { q: string; a: string }[];
};

export const comparePages: ComparePage[] = [
  {
    slug: "uaio-vs-aiops",
    competitor: "AIOps",
    metaTitle: "UAIO vs AIOps — The Category Shift | iTechSmart",
    metaDescription:
      "AIOps correlates alerts and recommends. UAIO simulates the fix, executes it, verifies it, and seals a cryptographic receipt. See the gap — run a Pulse scan.",
    eyebrow: "Category comparison",
    title: "AIOps recommends. UAIO acts, fixes, and proves.",
    lede: "AIOps was a real step forward — for its era. Platforms like Moogsoft, BigPanda, and OpsRamp correlate alerts and suggest causes. Then a human does the work. UAIO — Unified Autonomous IT Operations — closes the loop the human used to be: Detect → Decide → Do → Prove.",
    verdict:
      "If your team wants better analysis of incidents with humans firmly in the loop, AIOps delivers. If you want incidents resolved autonomously — twin-simulated first, independently verified after, with a cryptographic receipt an auditor can check — that's UAIO. A different category, not a better AIOps.",
    rows: [
      {
        capability: "Alert correlation & dedup",
        us: "Autonomous — 90% alert volume cut in production",
        them: "Core strength; the reason the category exists",
        advantage: "tie",
      },
      {
        capability: "Root-cause reasoning",
        us: "OctoAI diagnosis feeds directly into a fix decision",
        them: "Genuinely good probable-cause analysis — for humans",
        advantage: "tie",
      },
      {
        capability: "Digital-twin simulation",
        us: "Every fix rehearsed first — 98% blast-radius accuracy",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Zero-touch remediation",
        us: "87% autonomous-resolution target; 20-second self-healing on known failures",
        them: "Partial — scripted runbooks humans write and maintain",
        advantage: "us",
      },
      {
        capability: "Verification the fix worked",
        us: "Independent post-fix verification with auto-retry",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Evidence & audit trail",
        us: "SHA-256 receipts, hash-chained, Bitcoin-anchored — 121,400+ sealed",
        them: "Editable logs and dashboards",
        advantage: "us",
      },
      {
        capability: "Human governance",
        us: "Arbiter routes autonomy per incident, with approval gates",
        them: "Humans do everything, so trivially 'governed'",
        advantage: "us",
      },
      {
        capability: "MTTR",
        us: "36 minutes average — 86% below the 4.2-hour baseline",
        them: "Faster triage; repair stays human-speed",
        advantage: "us",
      },
    ],
    whenThem: [
      "You only want smarter triage and correlation, and you have a fully-staffed 24/7 ops team that prefers doing remediation by hand.",
      "Your change-control policy forbids any automated action — even simulated, verified, and human-approved ones.",
      "You already own an AIOps platform your NOC knows well and your only pain is alert noise, not resolution time.",
    ],
    faq: [
      {
        q: "Is UAIO replacing our AIOps tool or sitting next to it?",
        a: "Either. Many teams keep their AIOps analytics and let UAIO consume its alerts as one more signal source — the loop closes downstream of whatever detection you already trust.",
      },
      {
        q: "What does 'proof' add over good logging?",
        a: "Logs can be edited and prove only that a command ran. Receipts are sealed at action time, hash-chained, anchored to Bitcoin, and record that the fix was verified to work. Check any of the 90,000+ public ones at verify.itechsmart.dev.",
      },
      {
        q: "Doesn't 'autonomous' just mean runbooks with extra steps?",
        a: "No. Runbooks are scripts humans wrote for failures they predicted. UAIO's five-phase loop — Sense, Analyze, Decide, Act, Verify — reasons about the incident in front of it, simulates the fix in a Digital Twin, and rolls back if verification fails.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-datadog",
    aliases: ["datadog"],
    competitor: "Datadog",
    metaTitle: "iTechSmart vs Datadog: Monitoring vs Autonomy",
    metaDescription:
      "Datadog shows you what broke. iTechSmart simulates the fix in a Digital Twin, ships it autonomously, and seals a verifiable receipt. Run a free Pulse scan.",
    eyebrow: "iTechSmart vs Datadog",
    title: "Datadog monitors. iTechSmart fixes and proves.",
    lede: "Datadog is one of the best observability platforms available — deep APM, distributed tracing, logs, metrics, dashboards. It tells you what broke, fast. Then the graph waits for a human. iTechSmart closes the loop: detect, simulate, remediate, verify, seal a receipt.",
    verdict:
      "If comprehensive visibility is the goal, Datadog is an industry leader and a fair pick. If the goal is incidents that end without a human touching them — with cryptographic evidence they ended correctly — that's a different product. Many teams run both: Datadog watches, UAIO acts.",
    rows: [
      {
        capability: "Observability depth (APM, tracing, logs)",
        us: "Detection is the trigger, not the product",
        them: "Industry benchmark — deep APM, tracing, dashboards",
        advantage: "them",
      },
      {
        capability: "Root-cause reasoning",
        us: "OctoAI 8-agent engine turns diagnosis into a fix decision",
        them: "Anomaly detection flags it; humans interpret",
        advantage: "us",
      },
      {
        capability: "Pre-production fix simulation",
        us: "Digital Twin rehearses every change — 98% blast-radius accuracy",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Autonomous remediation",
        us: "Policy-routed fixes; 87% autonomous-resolution target",
        them: "Workflow triggers exist; a human owns the fix",
        advantage: "us",
      },
      {
        capability: "Verification the fix worked",
        us: "Independent post-fix checks with auto-rollback",
        them: "You watch the graph recover",
        advantage: "us",
      },
      {
        capability: "Evidence & audit trail",
        us: "SHA-256 receipts, hash-chained, Bitcoin-anchored — 121,400+ sealed",
        them: "Editable logs and audit events",
        advantage: "us",
      },
      {
        capability: "Alert noise reduction",
        us: "90% dedup in production",
        them: "Correlation and event grouping",
        advantage: "tie",
      },
      {
        capability: "MTTR",
        us: "36 minutes average — 86% below the 4.2-hour human baseline",
        them: "Faster detection; human-speed repair",
        advantage: "us",
      },
    ],
    whenThem: [
      "You need best-in-class APM and distributed tracing across a large polyglot microservice estate — Datadog's instrumentation ecosystem is the benchmark.",
      "Your mandate is dashboards, SLOs, and visibility; remediation is explicitly someone else's job.",
      "You already automate fixes elsewhere and only need a world-class window into production.",
    ],
    faq: [
      {
        q: "Does iTechSmart replace Datadog?",
        a: "It doesn't have to. UAIO can consume Datadog alerts as a signal source and close the loop downstream — simulate the fix, execute it, verify it, seal the receipt. Keep the dashboards; retire the 3am page.",
      },
      {
        q: "What does a ProofLink receipt prove that Datadog logs don't?",
        a: "Logs prove a command ran and can be edited afterward. A receipt is sealed at action time with a SHA-256 hash, chained to every prior receipt, and anchored to Bitcoin via OpenTimestamps — independently verifiable at verify.itechsmart.dev.",
      },
      {
        q: "How do we see the difference without a migration?",
        a: "Run the free Pulse scan at /pulse, then verify a live receipt at verify.itechsmart.dev. No sales deck. Just proof.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-dynatrace",
    aliases: ["dynatrace"],
    competitor: "Dynatrace",
    metaTitle: "iTechSmart vs Dynatrace: Answers vs Autonomy",
    metaDescription:
      "Dynatrace explains why it broke. iTechSmart rehearses the fix in a Digital Twin, executes, verifies, and proves it cryptographically. Run a free Pulse scan.",
    eyebrow: "iTechSmart vs Dynatrace",
    title: "Dynatrace explains. iTechSmart fixes and proves.",
    lede: "Dynatrace is the strongest 'why' engine in observability — Davis AI's causal analysis and OneAgent's automatic instrumentation are genuinely impressive. But an explanation is not a resolution. iTechSmart takes the answer and finishes the job: simulate, fix, verify, seal a receipt.",
    verdict:
      "If you want the best automatic answer to 'what is the root cause?', Dynatrace earns its reputation. If you want the root cause fixed before anyone reads the answer — with independent verification and a Bitcoin-anchored receipt — that's UAIO. Dynatrace ends at insight; the UAIO loop ends at proof.",
    rows: [
      {
        capability: "Full-stack auto-instrumentation",
        us: "42 modules cover the ops loop, not every trace",
        them: "OneAgent — best-in-class automatic coverage",
        advantage: "them",
      },
      {
        capability: "Root-cause analysis",
        us: "OctoAI turns root cause into an executable decision",
        them: "Davis AI pinpoints probable cause — for humans",
        advantage: "tie",
      },
      {
        capability: "Pre-flight simulation",
        us: "Digital Twin — 98% blast-radius accuracy before any change",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Autonomous remediation",
        us: "Closed loop: Detect → Decide → Do → Prove",
        them: "Automation workflows your engineers author and maintain",
        advantage: "us",
      },
      {
        capability: "Independent verification",
        us: "Every fix re-checked; failed fixes rolled back automatically",
        them: "Re-run the analysis and observe",
        advantage: "us",
      },
      {
        capability: "Cryptographic proof of action",
        us: "ProofLink receipts — sealed, hash-chained, Bitcoin-anchored",
        them: "Platform logs and audit events",
        advantage: "us",
      },
      {
        capability: "Time to resolution",
        us: "36 minutes average; 20-second self-healing on known patterns",
        them: "Fast answers; the repair still waits for a human",
        advantage: "us",
      },
    ],
    whenThem: [
      "You need deterministic causal analysis across a massive hybrid estate — Davis AI plus OneAgent is a genuinely strong combination.",
      "You have platform engineers who want to author and own their automation workflows, and a vendor platform to build them on.",
      "Full-stack observability is the mandate and automated remediation is explicitly out of scope for your org.",
    ],
    faq: [
      {
        q: "Dynatrace has automation workflows. Isn't that the same loop?",
        a: "It's automation you build. UAIO is autonomy you govern: OctoAI decides per incident, the Digital Twin simulates the blast radius first, verification confirms the outcome, and Arbiter enforces your approval policies. No workflow authoring backlog.",
      },
      {
        q: "Can iTechSmart use Dynatrace as a signal source?",
        a: "Yes. UAIO ingests alerts from the tools you already trust and closes the loop downstream. Detection stays wherever it's best; resolution and proof move to UAIO.",
      },
      {
        q: "How is 'proof' different from Dynatrace's audit logs?",
        a: "Audit logs live inside the platform and can be altered by whoever controls it. Receipts are sealed at action time, hash-chained, and anchored to Bitcoin — 90,000+ are publicly verifiable at verify.itechsmart.dev, by anyone, without trusting us.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-moogsoft",
    aliases: ["moogsoft"],
    competitor: "Moogsoft",
    metaTitle: "iTechSmart vs Moogsoft: AIOps vs UAIO",
    metaDescription:
      "Moogsoft quiets alert noise. iTechSmart cuts noise 90%, then fixes the incident autonomously and seals a Bitcoin-anchored receipt. Compare, then book a demo.",
    eyebrow: "iTechSmart vs Moogsoft",
    title: "Moogsoft quiets the noise. iTechSmart ends the incident.",
    lede: "Moogsoft helped invent AIOps — correlation, noise reduction, Situations for collaborative triage. Real progress over raw alerting. But when the Situation is built, a human still fixes the problem. UAIO keeps going: decide, simulate, act, verify, prove.",
    verdict:
      "If your pain is purely alert noise and your NOC wants to stay hands-on, Moogsoft's correlation does its job. If your pain is that incidents take hours of human time to resolve, noise reduction is step one of five. UAIO runs all five — and hands you a receipt when it's done.",
    rows: [
      {
        capability: "Alert correlation & noise reduction",
        us: "90% dedup in production — then the loop keeps going",
        them: "Category pioneer; correlation is the core product",
        advantage: "tie",
      },
      {
        capability: "Collaborative triage for NOC teams",
        us: "Less triage to do; approval gates where policy demands",
        them: "Situations built for human team workflows",
        advantage: "them",
      },
      {
        capability: "Root-cause reasoning",
        us: "OctoAI 8-agent diagnosis feeds an executable decision",
        them: "Probable cause surfaced for operators",
        advantage: "us",
      },
      {
        capability: "Digital-twin simulation",
        us: "98% blast-radius accuracy before production is touched",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Remediation",
        us: "Autonomous, policy-routed, twin-simulated first",
        them: "Hands off to humans or external runbook tools",
        advantage: "us",
      },
      {
        capability: "Verification & receipts",
        us: "Independent post-fix checks; 121,400+ receipts sealed",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Outcome",
        us: "87% autonomous-resolution target; 36-minute average MTTR",
        them: "A cleaner queue, same human bottleneck",
        advantage: "us",
      },
    ],
    whenThem: [
      "You need proven correlation across a sprawling legacy monitoring estate and your policy keeps humans in the driver's seat for every action.",
      "Your NOC workflow is built around collaborative triage and you want tooling designed for that human process.",
    ],
    faq: [
      {
        q: "We already run Moogsoft. Rip and replace?",
        a: "No. UAIO can sit downstream of your existing correlation — consuming its output as a signal source — and close the loop from there. You keep the noise reduction you paid for and add resolution and proof.",
      },
      {
        q: "Moogsoft is AIOps. What makes UAIO a different category?",
        a: "AIOps ends at recommendation. UAIO's five-phase loop — Sense, Analyze, Decide, Act, Verify — ends at a cryptographically sealed receipt proving the fix worked. Analysis is a component, not the product.",
      },
      {
        q: "How fast is 'autonomous' in practice?",
        a: "20-second self-healing on known failure patterns, 36-minute average MTTR overall — 86% below the 4.2-hour human baseline. Every one of those fixes has a receipt you can verify.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-pagerduty",
    aliases: ["pagerduty"],
    competitor: "PagerDuty",
    metaTitle: "iTechSmart vs PagerDuty: Fixed Before the Page",
    metaDescription:
      "PagerDuty pages an engineer at 3am. iTechSmart resolves incidents in 36 minutes on average — 86% faster — and proves it. Compare, then run a free Pulse scan.",
    eyebrow: "iTechSmart vs PagerDuty",
    title: "PagerDuty wakes you up. iTechSmart already fixed it.",
    lede: "PagerDuty is the industry standard for getting the right human on an incident — escalations, on-call schedules, runbook integrations. It manages the human loop brilliantly. iTechSmart's premise is different: for most incidents, there shouldn't be a human loop.",
    verdict:
      "When humans must respond, PagerDuty coordinates them better than anyone. But every page is a cost — sleep, focus, morale — and UAIO's job is to make most pages unnecessary: detect, simulate, fix, verify, and seal a receipt before anyone's phone lights up. Average remediation is 36 minutes, 86% faster than the 4.2-hour human baseline. The post-mortem is already written.",
    rows: [
      {
        capability: "On-call scheduling & escalation",
        us: "Fewer pages to route in the first place",
        them: "The industry standard — schedules, escalations, comms",
        advantage: "them",
      },
      {
        capability: "Detects issues",
        us: "42 modules and 66 MCP tools feeding the loop",
        them: "Ingests alerts from your monitoring stack",
        advantage: "tie",
      },
      {
        capability: "Root-cause reasoning",
        us: "OctoAI diagnoses before a human is involved",
        them: "Partial — AI features assist human triage",
        advantage: "us",
      },
      {
        capability: "Zero-touch remediation",
        us: "Autonomous fixes; 20-second self-healing on known failures",
        them: "Automation runs playbooks humans wrote and maintain",
        advantage: "us",
      },
      {
        capability: "Digital-twin simulation",
        us: "Fix rehearsed first — 98% blast-radius accuracy",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Proof the incident was resolved",
        us: "ProofLink receipt sealed per action, Bitcoin-anchored",
        them: "Timeline and post-mortem notes",
        advantage: "us",
      },
      {
        capability: "MTTR",
        us: "36 minutes average — 86% below the 4.2-hour human baseline",
        them: "Bounded by how fast a human answers the page",
        advantage: "us",
      },
    ],
    whenThem: [
      "Your policy requires a human in the loop for every incident, and you need world-class on-call scheduling and escalation to support that.",
      "You coordinate cross-team major-incident response with stakeholder comms — PagerDuty's process tooling is the standard there.",
      "You've already invested in runbook automation your team authors and maintains, and it covers your failure modes.",
    ],
    faq: [
      {
        q: "Do we drop PagerDuty on day one?",
        a: "No. Most teams keep PagerDuty for the incidents UAIO routes to humans — Arbiter's policies decide which those are. What changes is volume: the 87% autonomous-resolution target means most incidents never reach the pager.",
      },
      {
        q: "What happens when UAIO can't fix something?",
        a: "It escalates — with the diagnosis, the Digital Twin simulation results, and a sealed record of everything attempted. Your engineer starts at step four instead of step zero.",
      },
      {
        q: "How do we trust an autonomous fix at 3am?",
        a: "You don't have to trust it. Every action is simulated first, verified after, and sealed in a receipt that's hash-chained and Bitcoin-anchored. Check one yourself at verify.itechsmart.dev.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-servicenow",
    aliases: ["servicenow"],
    competitor: "ServiceNow",
    metaTitle: "iTechSmart vs ServiceNow: Tickets vs Fixes",
    metaDescription:
      "ServiceNow routes the ticket. iTechSmart fixes the incident first and attaches a cryptographic receipt. Compare UAIO vs ITSM, then book a 30-minute demo.",
    eyebrow: "iTechSmart vs ServiceNow",
    title: "ServiceNow creates tickets. iTechSmart fixes and proves.",
    lede: "ServiceNow is the gold standard for enterprise ITSM — workflow orchestration, CMDB, structured approvals at scale. It records and routes work superbly. iTechSmart does the work: when a pod crashes at 3am, UAIO fixes it autonomously and hands you a cryptographic receipt. Different job to be done.",
    verdict:
      "If your organization needs human-in-the-loop process at enterprise scale, ServiceNow excels and nothing here changes that. But a ticket is a record of work waiting to happen. UAIO resolves the incident first — twin-simulated, independently verified — and can file the closed ticket with the receipt attached. ITSM stays your system of record; UAIO becomes your system of action.",
    rows: [
      {
        capability: "Enterprise workflow & approvals",
        us: "Arbiter routes autonomy per policy; approvals when required",
        them: "Gold standard for structured, human-scale workflow",
        advantage: "them",
      },
      {
        capability: "System of record (ITSM, CMDB)",
        us: "Integrates with your ITSM; receipts attach to tickets",
        them: "Deep, mature, enterprise-wide",
        advantage: "them",
      },
      {
        capability: "Root-cause reasoning",
        us: "OctoAI 8-agent diagnosis at machine speed",
        them: "Categorization, routing, and assignment",
        advantage: "us",
      },
      {
        capability: "Remediation",
        us: "Fixed before a ticket would have been opened",
        them: "A ticket is created; a human resolves it",
        advantage: "us",
      },
      {
        capability: "Digital-twin simulation",
        us: "98% blast-radius accuracy before production is touched",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Evidence & audit",
        us: "SHA-256 receipts, hash-chained, independently verifiable",
        them: "Ticket history — editable by admins",
        advantage: "us",
      },
      {
        capability: "MTTR",
        us: "36 minutes average vs the 4.2-hour human baseline",
        them: "Measured in ticket SLAs, not minutes",
        advantage: "us",
      },
    ],
    whenThem: [
      "You need enterprise workflow orchestration, CMDB, and structured approvals across the whole business — ServiceNow is the gold standard.",
      "Your incident processes are human-in-the-loop by design or by regulation, and the workflow is the product you need.",
      "You're standardizing HR, finance, and facilities service delivery too — that's ServiceNow's home turf, not ours.",
    ],
    faq: [
      {
        q: "Does UAIO replace ServiceNow?",
        a: "It replaces the ticket for incidents machines can fix — the 87% autonomous-resolution target. For the rest, UAIO can open, update, and close ServiceNow tickets automatically, with the ProofLink receipt attached as evidence.",
      },
      {
        q: "Our auditors live in ServiceNow. What do receipts add?",
        a: "Ticket history is editable by anyone with admin rights. Receipts are sealed at action time, hash-chained, and Bitcoin-anchored — auditors can verify them independently at verify.itechsmart.dev without trusting us or you.",
      },
      {
        q: "Can Arbiter enforce our change-approval policy?",
        a: "Yes. Arbiter routes each incident by policy: full autonomy, autonomy with notification, or human approval required. Governance is a first-class phase of the loop, not a bolt-on.",
      },
    ],
  },
  {
    slug: "itechsmart-vs-splunk",
    aliases: ["splunk"],
    competitor: "Splunk",
    metaTitle: "iTechSmart vs Splunk: Search vs Self-Healing",
    metaDescription:
      "Splunk finds the answer in your logs. iTechSmart acts on it — simulate, fix, verify, seal a receipt. Compare search vs self-healing, then run a Pulse scan.",
    eyebrow: "iTechSmart vs Splunk",
    title: "Splunk finds the answer. iTechSmart acts on it — and proves it.",
    lede: "Splunk is where enterprises go to ask hard questions of their machine data — petabyte-scale search, a battle-tested SIEM, SOAR playbooks. It's a formidable analysis engine. But the answer to 'what happened?' still needs someone to do something about it. UAIO is the something.",
    verdict:
      "For log analytics, security investigation, and compliance retention, Splunk has earned its position. The gap is between authored automation and governed autonomy: SOAR runs the playbooks your team writes; UAIO reasons about the incident in front of it, simulates the fix in a Digital Twin, verifies the outcome, and seals a receipt. One scales with your headcount. The other doesn't have to.",
    rows: [
      {
        capability: "Log search & SIEM at scale",
        us: "We consume signals; we don't archive petabytes",
        them: "Battle-tested — SPL plus a market-leading SIEM",
        advantage: "them",
      },
      {
        capability: "Automation model",
        us: "OctoAI decides per incident — no playbook backlog",
        them: "SOAR runs playbooks your team authors and maintains",
        advantage: "us",
      },
      {
        capability: "Root-cause reasoning",
        us: "8-agent diagnosis feeding an executable decision",
        them: "You write the search; you draw the conclusion",
        advantage: "us",
      },
      {
        capability: "Pre-flight simulation",
        us: "Digital Twin — 98% blast-radius accuracy",
        them: "Not in scope",
        advantage: "us",
      },
      {
        capability: "Verification the fix worked",
        us: "Independent post-fix checks with auto-retry",
        them: "Re-run the search and see",
        advantage: "us",
      },
      {
        capability: "Evidence integrity",
        us: "Receipts sealed at action time, hash-chained, Bitcoin-anchored",
        them: "Indexed logs — mutable upstream of the index",
        advantage: "us",
      },
      {
        capability: "Long-horizon forensics & retention",
        us: "Receipts prove actions; we're not a forensics archive",
        them: "Core strength for compliance retention",
        advantage: "them",
      },
    ],
    whenThem: [
      "You need a SIEM and petabyte-scale log search for a SOC — Splunk Enterprise Security is battle-tested and deeply integrated.",
      "Years of SPL dashboards, saved searches, and playbooks are your team's center of gravity, and they cover your needs.",
      "Compliance requires long-horizon log retention and forensic search — that's an archive job, and Splunk does it well.",
    ],
    faq: [
      {
        q: "We have Splunk SOAR. Why isn't that enough?",
        a: "SOAR automates what you predicted and scripted. UAIO handles what you didn't: OctoAI reasons about each incident, the Digital Twin simulates the fix before production, and verification confirms it worked. Playbooks are a ceiling; autonomy is a floor.",
      },
      {
        q: "Can UAIO trigger from Splunk alerts?",
        a: "Yes. Splunk stays your analysis and detection layer; UAIO consumes its alerts as signals and closes the loop — decide, simulate, act, verify, seal a receipt.",
      },
      {
        q: "Splunk logs everything. Isn't that already an audit trail?",
        a: "Logs record what was written to them and can be altered before indexing. Receipts are sealed at the moment of action with SHA-256, hash-chained, and anchored to Bitcoin — 90,000+ are publicly verifiable today at verify.itechsmart.dev.",
      },
    ],
  },
];

export const compareBySlug = (slug: string) =>
  comparePages.find((c) => c.slug === slug || c.aliases?.includes(slug));

/** All routable compare slugs (canonical + aliases). */
export const allCompareSlugs = () => comparePages.flatMap((c) => [c.slug, ...(c.aliases ?? [])]);
