import type { Block } from "./landings";

export type Solution = {
  slug: string;
  kind: "solutions" | "industries";
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  pains: { title: string; copy: string }[];
  outcomes: { value: string; label: string }[];
  blocks: Block[];
  ctaTitle?: string;
};

export const solutions: Solution[] = [
  {
    slug: "msp",
    kind: "solutions",
    name: "MSPs",
    metaTitle: "MSP Automation — UAIO with Per-Client Proof | iTechSmart",
    metaDescription:
      "Multi-tenant autonomous IT for MSPs from $699/mo. 87% autonomous-resolution target, 90% alert dedup, per-client ProofLink receipts. Run a free Pulse scan.",
    eyebrow: "For Managed Service Providers",
    title: "Stop firefighting. Start running on autopilot.",
    lede: "One autonomous layer over your existing RMM, PSA, and monitoring — triaging, fixing, and receipting every action per client, 24/7. Nothing gets ripped out. Your clients never notice a thing, until you hand them proof.",
    pains: [
      {
        title: "Margin dies by headcount",
        copy: "Most MSPs still resolve routine incidents by hand, engineer by engineer. Every manual touch is margin you're leaving on the table.",
      },
      {
        title: "The 2 AM treadmill",
        copy: "Alert fires, engineer wakes up, 4.2 hours later it's resolved. On-call is a lifestyle, and nobody stays long-term.",
      },
      {
        title: "Screenshot QBRs",
        copy: "Three hours curating screenshots and ticket exports per review. When a client asks what happened, the best answer is a Slack thread.",
      },
    ],
    outcomes: [
      { value: "86%", label: "MTTR reduction (4.2h → 36min)" },
      { value: "87%", label: "autonomous-resolution target" },
      { value: "90%", label: "alert dedup before a human sees it" },
      { value: "$699/mo", label: "MSP tier starting price" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The MSP playbook",
        title: "Live across your client base in 30 days",
        items: [
          {
            title: "Week 1 — Connect",
            copy: "Plug into your existing RMM, PSA, and monitoring. ConnectWise, Kaseya, NinjaOne — they all stay. No migration, no downtime.",
          },
          {
            title: "Week 2 — Observe",
            copy: "UAIO learns each client environment in shadow mode. You see exactly what it would do before it does anything.",
          },
          {
            title: "Week 3 — Approve",
            copy: "Policy-gated remediation: approve categories of fixes per client as confidence builds. Arbiter enforces the boundaries you set.",
          },
          {
            title: "Week 4 — Autopilot",
            copy: "Routine incidents go fully autonomous. Every action seals a per-client ProofLink receipt from day one.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "What MSP owners ask us first",
        items: [
          {
            q: "Does this replace my RMM or PSA?",
            a: "No. UAIO overlays your existing stack — it makes your tools autonomous instead of asking you to migrate off them. Your RMM keeps surfacing alerts; UAIO resolves them and seals the receipt.",
          },
          {
            q: "How is client data separated?",
            a: "Hard tenant isolation, by architecture. Policies, credentials, execution paths, and receipt chains are scoped per client. Client A's ledger is physically separate from Client B's — and you couldn't tamper with either if you wanted to.",
          },
          {
            q: "What do I show clients in QBRs?",
            a: "The ledger. Every remediation is a SHA-256 hash-chained ProofLink receipt your client can verify themselves at verify.itechsmart.dev. QBR prep becomes an export, not a three-hour screenshot hunt.",
          },
        ],
      },
    ],
    ctaTitle: "Give every client an autonomous IT department. Keep the margin.",
  },
  {
    slug: "enterprise",
    kind: "solutions",
    name: "Enterprise",
    metaTitle: "Enterprise Autonomous IT Operations | iTechSmart",
    metaDescription:
      "Replace monitoring, ticketing, and AIOps with one autonomous loop that fixes and proves every action. MTTR down 86% (4.2h to 36min). Book a demo.",
    eyebrow: "For Enterprise IT Operations",
    title: "Three stacks replaced. One loop that proves itself.",
    lede: "Your team runs monitoring, ticketing, and AIOps across a dozen tools — and still can't prove to the board what happened after an incident. UAIO closes the loop: Detect → Decide → Do → Prove, with a cryptographic receipt for every action.",
    pains: [
      {
        title: "Six tools, zero accountability",
        copy: "The average enterprise runs 6–10 monitoring tools, separate ticketing, and an AIOps layer on top. Six dashboards, six renewal cycles — and at 2 AM someone still gets paged.",
      },
      {
        title: "45–90 minutes to a human",
        copy: "Alert fires, ticket opens, engineer gets paged. The stack observes; your team reacts. Nobody closes the loop.",
      },
      {
        title: "\"We think we fixed it\"",
        copy: "Screenshots as your audit trail. Compliance documentation as a quarterly fire drill. A CISO who can't trust the logs.",
      },
    ],
    outcomes: [
      { value: "86%", label: "MTTR reduction (4.2h → 36min)" },
      { value: "87%", label: "autonomous-resolution target" },
      { value: "96/100", label: "NIST CSF score (self-assessed)" },
      { value: "8 weeks", label: "to live, nothing ripped out" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "Enterprise deployment",
        title: "Live in 8 weeks. Zero rip-and-replace.",
        items: [
          {
            title: "Weeks 1–2 — Assess",
            copy: "Map existing tooling, baselines, and compliance posture. Zero changes to production.",
          },
          {
            title: "Weeks 3–4 — Integrate",
            copy: "Connect your monitoring stack, ITSM, and cloud APIs via native integrations — Datadog, ServiceNow, AWS, Azure, GCP, on-prem.",
          },
          {
            title: "Weeks 5–6 — Observe",
            copy: "UAIO runs in shadow mode. You see every proposed decision — and the Digital Twin simulation behind it — before anything executes.",
          },
          {
            title: "Weeks 7–8 — Automate",
            copy: "Policy-gated autonomous remediation goes live. Every action receipted from day one.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Enterprise questions",
        title: "What enterprise IT teams ask us first",
        items: [
          {
            q: "Does UAIO replace Datadog, ServiceNow, or our ITSM?",
            a: "No — it overlays them. Datadog keeps observing, ServiceNow keeps tracking. UAIO adds the autonomous decision, remediation, and cryptographic-proof loop on top. No migration, no political battles.",
          },
          {
            q: "How does UAIO handle change management and CAB approval?",
            a: "Every remediation passes through the Arbiter governance engine before execution. Configure policies to match your CAB rules — human approval for specific change categories, time windows, blast-radius limits, freeze windows. Nothing runs outside the boundaries you define.",
          },
          {
            q: "Can it work across hybrid cloud and on-prem?",
            a: "Yes. UAIO connects via SSH, WinRM, Kubernetes APIs, and the major cloud APIs — built for heterogeneous estates, not just cloud-native. Citadel extends the same loop to fully air-gapped environments.",
          },
        ],
      },
    ],
    ctaTitle: "Replace the stack. Keep the proof.",
  },
  {
    slug: "devops",
    kind: "solutions",
    name: "DevOps",
    metaTitle: "Autonomous Kubernetes Incident Response | iTechSmart",
    metaDescription:
      "OOMkills, crash loops, disk pressure, cert expiry — fixed autonomously with a signed ProofLink receipt per incident. MTTR down 86%. Run a free Pulse scan.",
    eyebrow: "For DevOps & Platform Engineering",
    title: "Your pipeline shouldn't need humans at 3 AM.",
    lede: "OOMkill. Crash loop. Disk pressure. Certificate expiry. These aren't novel problems — they have known fixes. UAIO executes those fixes autonomously, simulated against a Digital Twin first, and hands you a signed receipt instead of a page.",
    pains: [
      {
        title: "The on-call treadmill",
        copy: "PagerDuty fires, engineer wakes up, SSH into the cluster, run the same commands as last time. Deterministic failures shouldn't require human judgment.",
      },
      {
        title: "Runbooks that rot",
        copy: "Out of date before the next incident. Post-mortems live in a Confluence doc nobody reads again.",
      },
      {
        title: "Undocumented until someone writes it up",
        copy: "Every incident is invisible until a human reconstructs it from memory and log fragments. That's not a record — that's an essay.",
      },
    ],
    outcomes: [
      { value: "<2 min", label: "mean time to detect" },
      { value: "87%", label: "incidents resolved autonomously" },
      { value: "98%", label: "Digital Twin blast-radius accuracy" },
      { value: "66", label: "MCP tools on mcp.itechsmart.dev" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The platform playbook",
        title: "From pager to proof, one loop",
        items: [
          {
            title: "Connect the cluster",
            copy: "Kubernetes APIs, Datadog, Prometheus, Wazuh — UAIO ingests the signals your stack already emits. No agents to babysit.",
          },
          {
            title: "Simulate before touching prod",
            copy: "Every fix runs 10,000 times against a Digital Twin of your environment — 98% blast-radius accuracy. Nothing executes until the simulation passes.",
          },
          {
            title: "Gate by namespace",
            copy: "Manual, approval-required, or full-auto — per namespace, enforced by Arbiter. GitOps-compatible: changes can write back through ArgoCD or Flux.",
          },
          {
            title: "Receipt every fix",
            copy: "Detection timestamp, root cause, remediation path, policy-gate result — SHA-256 signed. Your post-mortem is written before the on-call engineer wakes up.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "DevOps questions",
        title: "What platform engineers ask us first",
        items: [
          {
            q: "How does UAIO handle OOMkills without causing more instability?",
            a: "It distinguishes a misconfigured memory limit (fix: adjust the limit) from a genuine leak (fix: rollback and alert), and simulates the fix against the Digital Twin before execution. Nothing touches production until the simulation passes.",
          },
          {
            q: "What happens when it can't fix something?",
            a: "It escalates with full context: detection timestamp, root-cause analysis, confidence score, and every fix it considered — with why each was rejected. The escalation includes a draft receipt so the human who resolves it completes the chain. Nothing is silently dropped.",
          },
          {
            q: "Can I wire UAIO into my AI agent workflows?",
            a: "Yes. The MCP server at mcp.itechsmart.dev exposes 66 tools covering incident queries, receipt verification, remediation triggering, and proof-chain traversal — plus REST API and the A2A protocol on the same endpoint.",
          },
        ],
      },
    ],
    ctaTitle: "Fix it before they page you.",
  },
  {
    slug: "soc",
    kind: "solutions",
    name: "SOC Teams",
    metaTitle: "Autonomous SOC Threat Remediation | iTechSmart",
    metaDescription:
      "Resolve deterministic security events autonomously with forensic-grade ProofLink receipts. 90% alert dedup, MTTR down 86% (4.2h to 36min). Book a SOC demo.",
    eyebrow: "For Security Operations",
    title: "Your SOC shouldn't spend 80% of its time on noise.",
    lede: "The average SOC receives 4,000+ alerts per day. Less than 20% require human judgment. UAIO resolves the deterministic rest autonomously — policy-gated by Arbiter — and hands your analysts a receipt they can submit as forensic-grade evidence.",
    pains: [
      {
        title: "Analysts triaging, not hunting",
        copy: "4,000+ alerts a day means 80% of every shift goes to noise with known responses. Your best people are running playbooks, not finding threats.",
      },
      {
        title: "Dwell time measured in hours",
        copy: "MTTR in hours is the window threat actors exploit. Every hour of triage is an hour of dwell.",
      },
      {
        title: "Evidence that doesn't hold up",
        copy: "Incident documentation is manual, incomplete, and legally fragile. Compliance means exporting logs auditors have to interpret — and can dispute.",
      },
    ],
    outcomes: [
      { value: "86%", label: "MTTR reduction (4.2h → 36min)" },
      { value: "90%", label: "alert dedup before an analyst sees it" },
      { value: "96/100", label: "NIST CSF score (self-assessed)" },
      { value: "90,000+", label: "receipts publicly verifiable" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The SOC playbook",
        title: "Let analysts hunt. Let the loop triage.",
        items: [
          {
            title: "Ingest from your SIEM",
            copy: "Wazuh, Prometheus, and EDR platforms feed UAIO via native connectors. Your SIEM stays — UAIO adds the execution and proof layer on top.",
          },
          {
            title: "Set Arbiter policy per threat class",
            copy: "Define what resolves autonomously, what requires analyst approval, and what is never automated — per environment, per threat class, per risk level.",
          },
          {
            title: "Contain the deterministic events",
            copy: "Routine incidents resolve before an analyst sees the alert. Deduplication kills 90% of the noise first.",
          },
          {
            title: "Escalate the novel with evidence",
            copy: "High-risk or novel incidents reach humans with OctoAI reasoning output, confidence score, every considered path — and a forensic-grade receipt already forming.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "SOC questions",
        title: "What security teams ask us first",
        items: [
          {
            q: "How does UAIO integrate with our SIEM?",
            a: "Native connectors ingest signals from Wazuh, Prometheus, and other SIEM/EDR platforms. It doesn't replace your SIEM — alerts your SIEM fires trigger UAIO remediation workflows with full policy-gate enforcement.",
          },
          {
            q: "Are ProofLink receipts usable in legal or regulatory proceedings?",
            a: "They're built for it: SHA-256 signed, hash-chained, Bitcoin-anchored via OpenTimestamps, and independently verifiable by any third party at verify.itechsmart.dev. Attributable, tamper-evident, permanent.",
          },
          {
            q: "Can UAIO operate in air-gapped or classified environments?",
            a: "Yes. Citadel packages the full stack for air-gapped, classified-adjacent, and sovereign deployments — post-quantum cryptography via OpenQuantumSafe, FIPS 140-2 aligned, fully offline. FedRAMP moderate pathway is active.",
          },
        ],
      },
    ],
    ctaTitle: "Stop paying your best analysts to run playbooks.",
  },
  {
    slug: "finance",
    kind: "solutions",
    name: "Financial Services",
    metaTitle: "Financial Services IT — SEC/FINRA-Ready | iTechSmart",
    metaDescription:
      "Hash-chained audit evidence for SOX, PCI-DSS, and GLBA that generates itself as operations run. Exam prep becomes a file export. Book a walkthrough.",
    eyebrow: "For Financial Services",
    title: "Regulators want evidence. Hand them a ledger.",
    lede: "Every change to your production environment — logged, signed, and hash-chained the moment it happens. One receipt chain covers SOX, PCI-DSS, HIPAA, and GLBA evidence requirements, because the record is the same regardless of which regulator asks.",
    pains: [
      {
        title: "The six-week exam sprint",
        copy: "Screenshots, log exports, manual attestation packages — $40–200k per cycle, rebuilt from memory every time.",
      },
      {
        title: "Evidence gaps between audits",
        copy: "Configuration changes with no timestamped proof. When the auditor questions an action after the fact, no trusted record exists.",
      },
      {
        title: "Screenshots aren't evidence",
        copy: "Every tool generates its own log format. No unified chain of custody — so auditors dispute, and push back.",
      },
    ],
    outcomes: [
      { value: "0 hrs", label: "exam prep — the ledger self-generates" },
      { value: "98%", label: "blast-radius simulation accuracy" },
      { value: "20s", label: "self-healing service recovery" },
      { value: "90,000+", label: "receipts publicly verifiable" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "Staged autonomy",
        title: "Policy gates your risk committee will actually approve",
        items: [
          {
            title: "Week 1 — Scan and map",
            copy: "Pulse scan plus environment mapping. No changes, no agents in production.",
          },
          {
            title: "Week 2 — Define policy gates",
            copy: "Built with your risk and compliance team: what runs autonomously, what needs approval, what never does.",
          },
          {
            title: "Week 3 — Run in manual or approval-required mode",
            copy: "UAIO detects, simulates, and recommends; your team executes. Live receipt generation starts — no autonomous actions yet.",
          },
          {
            title: "Week 4+ — Expand autonomy",
            copy: "As the receipt history satisfies your risk committee's threshold, widen the gates. Full autonomous mode typically lands in 30–60 days.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Compliance questions",
        title: "What compliance teams ask us first",
        items: [
          {
            q: "How does a ProofLink receipt satisfy regulators?",
            a: "Each receipt is SHA-256 hash-chained to the previous action and Bitcoin-anchored via OpenTimestamps — tamper-evident by cryptography, not by policy. Auditors verify independently at verify.itechsmart.dev, and there is no way to produce a valid receipt for an action that didn't happen.",
          },
          {
            q: "Can we start without granting autonomous execution rights?",
            a: "Yes. Manual mode and approval-required mode run first — full autonomy is opt-in, after your own receipt history demonstrates safe operation to your risk committee. At your pace, not ours.",
          },
          {
            q: "What cryptographic standards back this?",
            a: "FIPS 140-2 validated cryptography, SHA-256 hash chaining, Bitcoin anchoring via OpenTimestamps, and post-quantum cryptography via OpenQuantumSafe on Citadel-tier deployments — built for institutions whose threat model includes nation-states.",
          },
        ],
      },
    ],
    ctaTitle: "The next exam is coming. Prove what happened.",
  },
  {
    slug: "legal",
    kind: "solutions",
    name: "Legal",
    metaTitle: "LegalAI Pro — Provable AI for Law Firms | iTechSmart",
    metaDescription:
      "LegalAI Pro handles research, contract review, and case prediction — with a sealed ProofLink receipt for every AI action. Book a privilege-safe demo.",
    eyebrow: "For Law Firms & Legal Teams",
    title: "AI does the legal work. ProofLink proves every word.",
    lede: "The one question that kills AI in law: can you prove how it got that answer? LegalAI Pro does the research, review, and drafting — and seals a tamper-evident receipt for every query, source, and draft. Who asked, which model, which sources, whether a human reviewed. All on the record.",
    pains: [
      {
        title: "Fabricated citations",
        copy: "Generic chatbots invent case law. That's not a productivity risk — that's sanctions waiting to happen.",
      },
      {
        title: "Privilege leaks by default",
        copy: "Prompts and client documents sent to a shared public model. In an adversarial profession, that's disqualifying.",
      },
      {
        title: "Zero chain-of-custody",
        copy: "No record of which sources or model produced the work product. When opposing counsel challenges the process, \"trust me\" is not a defense.",
      },
    ],
    outcomes: [
      { value: "Minutes", label: "to review a 200-page agreement" },
      { value: "30 days", label: "from pilot to production" },
      { value: "On-prem", label: "or air-gapped via Citadel" },
      { value: "121,400+", label: "receipts sealed platform-wide" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "How firms deploy",
        title: "From pilot to production in 30 days",
        items: [
          {
            title: "Week 1 — Scope and secure",
            copy: "Choose your deployment: cloud, on-prem, or air-gapped Citadel. Privileged matters isolated from day one.",
          },
          {
            title: "Week 2 — Load your playbooks",
            copy: "Bring your clause libraries, research preferences, and matter types. LegalAI Pro learns how your firm actually works.",
          },
          {
            title: "Week 3 — Run in review",
            copy: "Attorneys review AI output side-by-side with sources and receipts. Confidence builds with a full record behind every result.",
          },
          {
            title: "Week 4 — Scale across matters",
            copy: "Research, review, and deposition prep at firm scale — every action sealed with a verifiable ProofLink receipt.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Straight answers",
        title: "What legal teams ask us first",
        items: [
          {
            q: "How is this different from a generic legal chatbot?",
            a: "Every answer is grounded in real, cited authority, and every action seals a ProofLink receipt — who asked, which model, which sources, whether a human reviewed. The output is work product a partner can defend, because the process is provable.",
          },
          {
            q: "Does it hallucinate citations?",
            a: "Answers are grounded in retrieved authority, and every source is captured on the receipt so it can be checked. If a proposition isn't supported, you see that — rather than a confident, fabricated cite.",
          },
          {
            q: "How do you protect privileged and confidential data?",
            a: "Matters are isolated by architecture. Deploy on-prem or fully air-gapped via Citadel, so no inference calls leave your network boundary — and every access is receipted for a complete chain-of-custody.",
          },
        ],
      },
    ],
    ctaTitle: "Give your firm an AI associate you can put on the record.",
  },
  {
    slug: "eu-ai-act",
    kind: "solutions",
    name: "EU AI Act",
    metaTitle: "EU AI Act Article 12 Compliance | iTechSmart",
    metaDescription:
      "ProofLink meets all seven EU AI Act Article 12 sub-requirements natively, with 90,000+ verifiable receipts. Book an assessment before August 2, 2026.",
    eyebrow: "EU AI Act Readiness",
    title: "AI Act compliance by architecture, not paperwork.",
    lede: "The EU AI Act demands traceability, human oversight, and robust logging for high-risk AI in production. Most platforms bolt that on. UAIO was built receipts-first — Article 12 of Regulation (EU) 2024/1689 breaks into seven enforceable sub-requirements, and ProofLink satisfies each by architecture.",
    pains: [
      {
        title: "Bolt-on logging",
        copy: "Retrofitted audit trails are log files with good intentions. Article 12 requires automatic recording throughout the system lifetime — batching and manual logging don't qualify.",
      },
      {
        title: "€15M or 3% of turnover",
        copy: "That's the Article 12 non-compliance penalty — whichever is higher. Enforcement begins August 2, 2026. The deadline does not care about your roadmap.",
      },
      {
        title: "Black-box decisions",
        copy: "If you can't reconstruct what the system saw, decided, and did, you can't demonstrate traceability. \"The model decided\" is not a compliance answer.",
      },
    ],
    outcomes: [
      { value: "7 of 7", label: "Article 12 sub-requirements met natively" },
      { value: "Aug 2, 2026", label: "enforcement deadline" },
      { value: "90,000+", label: "receipts publicly verifiable today" },
      { value: "€15M / 3%", label: "of global turnover — the penalty at stake" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The readiness playbook",
        title: "From exposure to evidence in four moves",
        items: [
          {
            title: "Map your systems to Article 12",
            copy: "Seven sub-requirements: automatic recording, tamper evidence, risk identification, post-market monitoring, traceability, third-party verifiability, retention. We mapped each to a ProofLink mechanism.",
          },
          {
            title: "Turn on receipts-first logging",
            copy: "Every autonomous action triggers a receipt at execution time — no manual logging, no batching. Altering any receipt breaks the SHA-256 hash chain, producing immediate cryptographic evidence of tampering.",
          },
          {
            title: "Configure human-oversight gates",
            copy: "Manual, approval-required, or supervised autonomy — policy gates put humans exactly where the regulation, or your risk appetite, requires. With timestamps to prove they were in the loop.",
          },
          {
            title: "Hand regulators the ledger",
            copy: "The full ledger is queryable at verify.itechsmart.dev — filter by date, actor, category, severity. Export API included. Retention is permanent on-chain, with configurable local windows per jurisdiction.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "AI Act questions",
        title: "What compliance leads ask us first",
        items: [
          {
            q: "Which Article 12 sub-requirements does ProofLink cover?",
            a: "All seven, natively: automatic event recording, tamper-evident log integrity, risk-circumstance identification, post-market monitoring support, traceability of autonomous decisions, independent third-party verifiability, and defined retention. Each maps to a specific mechanism, not a policy promise.",
          },
          {
            q: "Can auditors verify without involving iTechSmart?",
            a: "Yes. Receipts are Bitcoin-anchored via OpenTimestamps and verifiable by any party using open-source tooling. No dependence on us, our uptime, or our word.",
          },
          {
            q: "What about record retention periods?",
            a: "Receipts are permanent on-chain, with configurable local retention windows for jurisdiction-specific compliance periods. The Act's lifetime-logging requirement is the default behavior, not a setting.",
          },
        ],
      },
    ],
    ctaTitle: "Enforcement starts August 2, 2026. Be verifiable before then.",
  },
  {
    slug: "healthcare",
    kind: "industries",
    name: "Healthcare",
    metaTitle: "Healthcare IT — HIPAA-Aware Autonomy | iTechSmart",
    metaDescription:
      "HL7 self-healing for Epic and Cerner, FHIR R4 native, HIPAA 100/100 self-assessed, and receipts your auditors verify independently. Book a demo.",
    eyebrow: "For Healthcare & Hospital Systems",
    title: "Downtime here isn't measured in dollars. It's measured in patients.",
    lede: "Your EHR, your interfaces, your infrastructure — they cannot fail quietly at 2 AM. UAIO keeps clinical systems healing themselves, with HIPAA-aware policies that respect PHI boundaries and cryptographic receipts your auditors verify independently.",
    pains: [
      {
        title: "The interface engine stalls at 2 AM",
        copy: "When an HL7 feed between Epic and the lab goes down, clinicians notice before IT does. That's the wrong order.",
      },
      {
        title: "PHI boundaries vs. automation",
        copy: "Generic automation doesn't know where PHI lives. One wrong action and your incident becomes a breach report.",
      },
      {
        title: "Audits that want evidence, not explanations",
        copy: "OCR audits and Joint Commission reviews don't accept \"we believe it was resolved.\" They want a record that holds.",
      },
    ],
    outcomes: [
      { value: "86%", label: "MTTR reduction (4.2h → 36min)" },
      { value: "100/100", label: "HIPAA alignment (self-assessed)" },
      { value: "FHIR R4", label: "native, plus HL7 v2.x — Epic and Cerner" },
      { value: "20s", label: "self-healing recovery, receipt-verified" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The clinical playbook",
        title: "Autonomy that respects the boundary of care",
        items: [
          {
            title: "Connect Epic and Cerner interfaces",
            copy: "Native HL7 v2.x and FHIR R4 support — no middleware, no adapters, no custom connectors between UAIO and your EHR estate.",
          },
          {
            title: "Set PHI-aware policy boundaries",
            copy: "Policies understand PHI boundaries out of the box. Autonomous actions never cross data-handling lines your compliance team hasn't approved.",
          },
          {
            title: "Let the interfaces heal themselves",
            copy: "A stalled interface engine restarts — receipted — before a clinician notices. Self-healing recovery in 20 seconds, verified by the receipt.",
          },
          {
            title: "Walk into audits with receipts",
            copy: "Every action on clinical infrastructure produces cryptographic proof. Your next OCR audit or Joint Commission review gets evidence, not explanations.",
          },
        ],
      },
      {
        type: "checklist",
        eyebrow: "Technical specifications",
        title: "Interoperability, out of the box",
        lede: "Autonomous operations that mesh with Epic, Cerner, and Allscripts — no middleware layer to buy, deploy, or babysit.",
        good: [
          "HL7 v2.x message types: ADT, ORU, MDM, SIU, ORM/ORR",
          "FHIR R4 resources: Patient, Encounter, Observation, DiagnosticReport, Practitioner",
          "Epic MyChart and Cerner PowerChart via SMART on FHIR 2.0",
          "Allscripts Professional, DICOM WADO-RS, and Direct Protocol messaging",
        ],
      },
      {
        type: "faq",
        eyebrow: "Healthcare questions",
        title: "What hospital IT leaders ask us first",
        items: [
          {
            q: "Does autonomous remediation ever touch PHI?",
            a: "Only inside boundaries your compliance team has approved. HIPAA-aware policies define the PHI lines up front, and Arbiter blocks any action that would cross them — by architecture, not by promise.",
          },
          {
            q: "What happens when an HL7 interface goes down?",
            a: "UAIO detects the stall, restarts the interface within policy, and seals a receipt — typically before a clinician notices. See /hl7 for message-type-level detail on ADT, ORU, MDM, SIU, and ORM/ORR handling.",
          },
          {
            q: "What do we show OCR or the Joint Commission?",
            a: "The receipt chain. Every action on clinical infrastructure is cryptographically sealed and independently verifiable at verify.itechsmart.dev — evidence your auditors check themselves, without taking your word for it.",
          },
        ],
      },
    ],
    ctaTitle: "The next outage is coming. Prove what happened.",
  },
  {
    slug: "government",
    kind: "industries",
    name: "Government",
    metaTitle: "Government IT — SDVOSB Autonomous Ops | iTechSmart",
    metaDescription:
      "SDVOSB-certified (CAGE 172W2, UEI ZCPFX4N86G36) autonomous IT with FedRAMP pathway, CMMC alignment, and air-gapped Citadel. Book a private demo.",
    eyebrow: "SDVOSB · CAGE 172W2 · FedRAMP Pathway",
    title: "Government IT that fixes itself — and proves it did.",
    lede: "FISMA-aligned, NIST-oriented, veteran-owned. Every remediation receipted and tamper-evident — built for federal, defense, and state agencies that need audit-ready operations, not another compliance checklist.",
    pains: [
      {
        title: "Explaining downtime after the fact",
        copy: "Agencies can't afford outages — and can't afford to reconstruct what happened from log fragments when the IG asks.",
      },
      {
        title: "Sovereignty vs. AI",
        copy: "Most AI platforms phone home. In a SCIF or an air-gapped enclave, one external API call is one too many.",
      },
      {
        title: "Compliance theater",
        copy: "Controls documented in a PDF and forgotten. A checklist is not an architecture — and auditors know the difference.",
      },
    ],
    outcomes: [
      { value: "96/100", label: "NIST CSF alignment (self-assessed)" },
      { value: "<20s", label: "mean time to remediation" },
      { value: "218", label: "production containers, autonomously managed" },
      { value: "90,000+", label: "immutable receipts, publicly verifiable" },
    ],
    blocks: [
      {
        type: "steps",
        eyebrow: "The agency playbook",
        title: "From market research to receipts in four moves",
        items: [
          {
            title: "Verify the credentials",
            copy: "SDVOSB-certified, CAGE 172W2, UEI ZCPFX4N86G36, NAICS 541511 primary. NVIDIA Inception member. Direct-award eligible — contracting POC at contracts@itechsmart.dev.",
          },
          {
            title: "Pick the deployment model",
            copy: "Gov cloud, on-prem, or fully air-gapped Citadel. Sovereign AI runs NVIDIA Nemotron Super 49B inside your perimeter — no API calls leave the network boundary.",
          },
          {
            title: "Stage autonomy under change control",
            copy: "SSO, RBAC, and least privilege on identity; staged remediation on change control; tenant isolation on data handling. Arbiter enforces every pillar at the platform level.",
          },
          {
            title: "Prove every action",
            copy: "Each remediation seals an immutable receipt, OTS-attested within 6 hours and publicly verifiable at verify.itechsmart.dev. Audit-ready before the auditor arrives.",
          },
        ],
      },
      {
        type: "faq",
        eyebrow: "Federal questions",
        title: "What agency IT leaders ask us first",
        items: [
          {
            q: "Can this run in classified or air-gapped environments?",
            a: "Yes. Citadel packages the full UAIO stack — autonomous remediation, the 8-agent OctoAI cognitive engine, and cryptographic receipts — for SCIF and air-gapped deployment with zero external connectivity. FIPS 140-2 aligned, with NeMo Guardrails 4-rail validation on every inference.",
          },
          {
            q: "Where do you stand on FedRAMP and CMMC?",
            a: "FedRAMP moderate pathway is active, NIST CSF scores 96/100 (self-assessed), and the architecture aligns to CMMC and Zero Trust pillars. Receipts give assessors evidence at the control level — not a PDF of intentions.",
          },
          {
            q: "How do we procure from iTechSmart?",
            a: "As an SDVOSB (CAGE 172W2, UEI ZCPFX4N86G36) we're eligible for direct award and set-asides across nine NAICS codes, 541511 primary. Email contracts@itechsmart.dev for the capability statement.",
          },
        ],
      },
    ],
    ctaTitle: "Audit-ready before the auditor arrives.",
  },
];

export const solutionBySlug = (slug: string, kind?: Solution["kind"]) =>
  solutions.find((s) => s.slug === slug && (!kind || s.kind === kind));
