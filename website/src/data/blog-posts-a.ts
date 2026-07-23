import type { Post } from "./blog";

/** Pillar posts, batch A. Owned by the blog-a author. */
export const postsA: Post[] = [
  {
    slug: "what-is-uaio",
    title: "What is UAIO? The Category Replacing Monitoring and AIOps",
    metaDescription:
      "Unified Autonomous IT Operations (UAIO) detects, fixes, verifies, and cryptographically proves IT operations autonomously. Here's the full definition and the 5 requirements.",
    excerpt:
      "Monitoring tells you something broke. AIOps tells you what probably matters. UAIO closes the loop — and seals a receipt.",
    date: "2026-04-07",
    readMinutes: 7,
    tags: ["UAIO", "Category"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "Every generation of IT operations tooling has moved the human a little further from the incident. Monitoring moved us from discovering outages via angry phone calls to discovering them via dashboards. AIOps moved us from staring at raw alerts to reading correlated, prioritized ones. But in both generations, the last mile — the actual fix — stayed exactly where it started: with an engineer, at a keyboard, often at 3am.",
          "UAIO — Unified Autonomous IT Operations — is the generation where the last mile closes. The platform detects the incident, diagnoses it, simulates the fix, executes it, verifies the result, and seals cryptographic proof of the whole journey. The human moves from doing to governing.",
        ],
      },
      {
        h2: "The loop, not the pipeline",
        paragraphs: [
          "The defining structure of UAIO is a loop: Detect → Decide → Do → Prove, feeding back into itself. Every resolution updates the policy graph that routes the next incident. A pipeline ends; the loop compounds.",
          "In iTechSmart's implementation the loop has ten steps — detection, ticket creation, autonomy routing, digital-twin simulation, execution, verification, receipt sealing, documentation, learning, and cross-environment sync. No step is optional, because each one answers a question auditors and engineers eventually ask.",
        ],
      },
      {
        h2: "The five requirements",
        paragraphs: ["A platform qualifies as UAIO only if it meets all five requirements:"],
        list: [
          "Autonomous end-to-end remediation — not alert routing with runbook links.",
          "Pre-execution simulation with blast-radius scoring — fixes rehearse in a digital twin before touching production.",
          "Independent verification — confirming the fix worked, not merely that a command exited zero.",
          "Cryptographic, tamper-evident evidence — receipts sealed at action time, anchored beyond anyone's reach.",
          "Governed autonomy — policy-routed human gates, because 'full auto or nothing' is how trust dies.",
        ],
      },
      {
        h2: "Why proof is the hill worth dying on",
        paragraphs: [
          "Autonomy without evidence is a liability with good marketing. The moment software acts on production infrastructure without a human watching, the question changes from 'did it work?' to 'can you prove what it did?' Logs don't survive that question — they're editable, they prove execution rather than outcome, and they live on the vendor's word.",
          "That's why every iTechSmart action seals a ProofLink receipt: SHA-256 hashed, Ed25519 signed, hash-chained to its predecessor, and anchored to Bitcoin via OpenTimestamps. Anyone — auditor, customer, stranger — can verify any receipt at verify.itechsmart.dev without trusting us.",
        ],
      },
    ],
  },
  {
    slug: "prooflink-explained",
    title: "What's Inside a ProofLink Receipt: SHA-256, Ed25519, Bitcoin",
    metaDescription:
      "Inside every ProofLink receipt: a SHA-256 hash, an Ed25519 signature, a hash-chain position, and a Bitcoin anchor via OpenTimestamps. Verify one yourself.",
    excerpt:
      "A receipt is not a log line with better branding. It is a four-layer cryptographic object, and each layer defeats a specific attack on the truth.",
    date: "2026-05-05",
    readMinutes: 5,
    tags: ["ProofLink", "Architecture"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "When the platform restarts a crashed service, rotates a certificate, or kills a runaway process, it does not write a log line and move on. It seals a receipt — a cryptographic object built to survive hostile questioning. There are 121,400+ of them, 90,000+ publicly verifiable by anyone with a browser.",
          "A ProofLink receipt has four layers. Each one exists because someone, somewhere, will eventually ask: how do I know this record is real? Logs answer that question with 'because we say so.' Receipts answer it with math. Here is what is actually inside.",
        ],
      },
      {
        h2: "Layer 1: The SHA-256 fingerprint",
        paragraphs: [
          "The receipt starts with the full canonical record of the action: the triggering signal, the diagnosis and its confidence score (a real one reads confidence: 0.94), the exact commands executed, the verification result, and the timestamps. That record is hashed with SHA-256 into a 256-bit fingerprint.",
          "Change one byte anywhere — a timestamp digit, a single character of a command — and the hash changes completely. The hash is a commitment: this exact record, and nothing else, is what happened.",
        ],
      },
      {
        h2: "Layer 2: The Ed25519 signature",
        paragraphs: [
          "The hash answers what. The signature answers who. The sealing service signs the hash with an Ed25519 private key; anyone holding the public key can verify the signature in microseconds. Ed25519 is small, fast, and boring — which is exactly what you want from the thing your evidence depends on.",
          "Forging a receipt now requires stealing a signing key and producing a valid signature over a fraudulent hash. And even that isn't enough, because of layer three.",
        ],
      },
      {
        h2: "Layer 3: The hash chain",
        paragraphs: [
          "Every receipt embeds the hash of the receipt sealed before it. That gives each receipt a position in an append-only chain. Delete a receipt and the gap is detectable. Alter one and its hash changes, which breaks the link in every receipt after it. The public ledger currently reports 0 chain breaks across the full chain.",
          "The chain converts 'trust every record individually' into 'check one chain once.' That is a much better deal for an auditor.",
        ],
      },
      {
        h2: "Layer 4: The Bitcoin anchor",
        paragraphs: [
          "A chain we host is still, in the worst case, a chain we could rebuild. So the chain is periodically committed to Bitcoin via OpenTimestamps — 8,219 receipts submitted and counting, landing in blocks like #845,231. Once anchored, backdating a receipt means rewriting Bitcoin's blockchain. Nobody is doing that to falsify a service restart.",
          "This is the layer that removes us from our own trust equation. 'Don't trust us. Verify us' stops being a slogan and becomes a procedure.",
        ],
      },
      {
        h2: "Verify one yourself",
        paragraphs: [
          "Go to verify.itechsmart.dev, paste a receipt ID, and watch the check complete — a warm verify runs in about 21ms. You don't need an account, a sales call, or our permission. That's the point: the evidence works even for people who don't like us.",
          "One honest note. Older v1/v2 receipts are pointer-linked, while the v3 format (2,100+ receipts, and every new seal) is strict-verifiable end to end. We publish the difference, because an evidence layer that hides its own versioning wouldn't be one. Receipts are machine-readable too — the 66 MCP tools at mcp.itechsmart.dev let your own agents seal and verify programmatically, receipts included on every call.",
        ],
      },
    ],
  },
  {
    slug: "prooflink-vs-traditional-logs",
    title: "ProofLink Receipts vs. Logs: What Auditors Actually Accept",
    metaDescription:
      "Logs are editable by the people they audit. ProofLink receipts are hash-chained, signed, and Bitcoin-anchored. See what auditors actually accept, and why.",
    excerpt:
      "Logs are the only class of evidence routinely edited by the people they're supposed to hold accountable. Auditors have noticed.",
    date: "2026-05-19",
    readMinutes: 5,
    tags: ["ProofLink", "Compliance"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "Every audit starts the same way: show us evidence of what your systems did. For fifty years the default answer has been logs. Logs are also the only class of evidence that is routinely edited, rotated, and truncated by the very people it is supposed to hold accountable.",
          "This is the honest comparison: what a log proves, what a receipt proves, and which one survives when an auditor stops being polite. It matters more now than it did last year, because the actions being recorded are increasingly taken by software, not people — and regulators have started writing that assumption into law.",
        ],
      },
      {
        h2: "What a log actually proves",
        paragraphs: [
          "A log proves exactly one thing: a process wrote a string, at some point, to storage that somebody controls. Anyone with root can edit it. Retention policies rotate it. Aggregation pipelines drop, dedupe, and reorder it. Usually that's entropy, not malice — but an auditor can't tell the difference, and shouldn't have to.",
          "Even a pristine log proves execution, not outcome. 'Restart issued' is not the same claim as 'service verified healthy.' The gap between those two statements is where incident postmortems go to argue.",
          "WORM storage and immutable SIEM tiers narrow the problem but don't solve it. Write-once retention still runs on infrastructure someone administers, under a configuration someone can change, on the strength of a vendor attestation someone has to accept. The trust chain still terminates at a party with an interest in the answer.",
        ],
      },
      {
        h2: "What a receipt proves",
        paragraphs: [
          "A ProofLink receipt is sealed at action time and makes five separately checkable claims:",
        ],
        list: [
          "Integrity — SHA-256 hash of the full action record; recompute it and compare.",
          "Origin — Ed25519 signature from the sealing service; verify with the public key.",
          "Completeness — a hash-chain position; a deleted receipt leaves a detectable break.",
          "Time — a Bitcoin anchor via OpenTimestamps; backdating means rewriting Bitcoin.",
          "Outcome — the verification result is sealed inside, not just the command that ran.",
        ],
      },
      {
        h2: "Tamper-evident beats tamper-resistant",
        paragraphs: [
          "Note the property being claimed. Not tamper-proof — nothing is. Tamper-evident: any alteration, deletion, or reordering is mathematically detectable by a third party. We don't promise nobody will try to rewrite history. The math promises nobody can do it silently. The public ledger's current score on that promise: 0 chain breaks across the full chain.",
        ],
      },
      {
        h2: "The three questions auditors actually ask",
        paragraphs: [
          "Strip away the frameworks and every auditor is asking three things. Is the record complete? Is it unaltered? And does believing it require taking the auditee's word? Logs fail the third question by construction — they live on infrastructure the audited party administers.",
          "Receipts pass because verification runs on the auditor's own laptop at verify.itechsmart.dev, against math instead of testimony. That is why the receipt model maps cleanly onto EU AI Act Article 12, NIST AI RMF, CMMC 2.0, SOC 2, and ISO 42001: each of those frameworks is, underneath, a demand for tamper-evident records of automated action.",
        ],
      },
      {
        h2: "Screenshots are not a control",
        paragraphs: [
          "Look at what actually gets submitted as evidence today: screenshots of dashboards, exported Slack threads, a CSV someone assembled the week before the audit. Burnout, blame, and screenshots as 'evidence.' Every quarter, engineers stop doing operations to go perform archaeology on their own systems.",
          "The receipt model inverts this. Evidence is a byproduct of operation, not a project bolted onto it. When 121,400+ actions have sealed their own proof, audit preparation stops being a fire drill and becomes a URL. Pick any of the 90,000+ public receipts and run the comparison yourself — that's the whole pitch.",
        ],
      },
    ],
  },
  {
    slug: "self-healing-infrastructure",
    title: "Self-Healing Infrastructure: $5,600 a Minute vs. 20 Seconds",
    metaDescription:
      "Downtime runs $5,600 a minute. Human-mediated recovery averages 4.2 hours. Self-healing closes known incidents in 20 seconds. Run the incident cost math.",
    excerpt:
      "Everyone quotes the $5,600-per-minute downtime number. Almost nobody multiplies it by their actual MTTR. Let's do the math nobody puts on a slide.",
    date: "2026-04-28",
    readMinutes: 5,
    tags: ["Ops Math", "UAIO"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "The most quoted number in IT operations is $5,600 — the industry-benchmark cost of one minute of downtime. People put it in slide decks, nod solemnly, and then keep an incident process whose fastest possible response is measured in hours.",
          "The problem isn't that the number is wrong. The problem is that nobody multiplies it by their actual MTTR. So let's multiply.",
        ],
      },
      {
        h2: "The anatomy of a human-mediated fix",
        paragraphs: [
          "An alert fires. A page goes out. An engineer wakes up, finds a laptop, connects to the VPN, orients, SSHes in, diagnoses, applies a fix, watches to see if it held, and writes it up. Before automation, the measured average across that sequence was 4.2 hours of MTTR.",
          "That's not because engineers are slow. It's because the process is serialized around human availability — and none of those steps parallelize when the bottleneck is one person waking up. Add an escalation or a cross-team handoff and the clock runs while two calendars negotiate.",
        ],
      },
      {
        h2: "The incident cost math",
        paragraphs: [
          "Take the same incident at three different speeds, priced at the benchmark rate:",
        ],
        list: [
          "4.2 hours of human-mediated recovery: 252 minutes × $5,600 = $1,411,200.",
          "36 minutes — the post-automation average behind the measured 86% MTTR reduction: $201,600.",
          "20 seconds of autonomous self-healing on a known pattern: roughly $1,900.",
        ],
      },
      {
        h2: "Where the 20 seconds comes from",
        paragraphs: [
          "The 20-second figure applies to known-pattern Tier 1-2 incidents — full disks, expiring certificates, OOM kills, hung services. For those, the loop runs with no human in the path: detect, simulate the fix in the Digital Twin, execute under policy, verify the result, seal a ProofLink receipt. Machines don't need to find their laptop.",
          "Deduplication does the quieter half of the work: 90% of alert pages are eliminated before they ever reach a human, so the incidents that do need people arrive without a noise storm around them.",
        ],
      },
      {
        h2: "Now multiply by a year",
        paragraphs: [
          "Per-incident math understates the case, because incidents don't come one at a time. The ROI calculator's default profile — 10 engineers at $95K, 80 incidents a month, 4-hour MTTR, $5,000/hour downtime — prices current operations around $20M a year. The same profile under UAIO lands near $1M: roughly $19M in annual savings and about 3,800 engineer hours recovered. Those defaults are adjustable; the shape of the curve is not.",
        ],
      },
      {
        h2: "What the humans do instead",
        paragraphs: [
          "One caveat worth stating plainly: self-healing without verification is self-harm at machine speed. That's why the loop's Verify phase is not optional — the system confirms the service is actually healthy, not merely that a command exited zero, before it seals the ProofLink receipt and closes the incident. A fast wrong answer is still a wrong answer; the 20 seconds includes proving it was right.",
          "The target is 87% autonomous resolution. The engineers who used to be the retry mechanism now govern policy, review receipts, and take the genuinely novel failures — the ones worth a human brain. Nothing about incident severity changed in the math above. Only who fixes it, and how fast.",
          "If you want your own numbers instead of ours, start with the free Pulse scan at /pulse, or bring your incident volume and MTTR to a demo at /contact. The multiplication is not going to get friendlier by waiting.",
        ],
      },
    ],
  },
  {
    slug: "uaio-vs-aiops",
    title: "UAIO vs. AIOps: The Category Shift From Insight to Action",
    metaDescription:
      "AIOps correlates alerts and recommends. UAIO senses, analyzes, decides, acts, and verifies — then seals proof. Compare the five-phase loop to analytics.",
    excerpt:
      "AIOps compressed the alert queue. It never emptied it. The category shift isn't smarter analytics — it's closing the loop.",
    date: "2026-06-02",
    readMinutes: 6,
    tags: ["UAIO"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "AIOps was a genuine improvement. It deduplicated alert storms, correlated symptoms across tools, and surfaced credible root-cause hypotheses. If you ran operations in the raw-pager era, AIOps felt like relief.",
          "But every AIOps workflow ends the same way: with a recommendation, waiting for a human. The analysis got smarter; the fix stayed manual. The shift from AIOps to UAIO — Unified Autonomous IT Operations — is not smarter analytics. It's closing the loop.",
        ],
      },
      {
        h2: "Analytics is not an outcome",
        paragraphs: [
          "A perfectly correlated, perfectly prioritized alert still wakes a human at 3am. AIOps compresses the queue; it never empties it. Once correlation is solved, analysis stops being the bottleneck and action becomes it — and action is exactly where AIOps platforms list 'zero-touch remediation' as partial, or as roadmap.",
          "That's the action gap, and no amount of better ranking closes it. Something has to actually run the fix, verify it worked, and answer for it afterward. The established AIOps names — Moogsoft, BigPanda, OpsRamp — are genuinely good at correlation. Correlation was the hard problem of 2018. It is not the hard problem now.",
        ],
      },
      {
        h2: "The five-phase loop",
        paragraphs: [
          "UAIO closes the gap with a loop — Detect → Decide → Do → Prove — that expands into five phases. AIOps implements the first two and calls it a platform. UAIO is defined by the last three:",
        ],
        list: [
          "Sense — deterministic, signal-first detection. Facts, not noise.",
          "Analyze — root cause with a confidence score attached, not a shrug.",
          "Decide — policy routing: this fix runs auto, that one needs approval, that one stays manual.",
          "Act — governed execution, rehearsed in a Digital Twin before it touches production.",
          "Verify — confirm the outcome, then seal a ProofLink receipt.",
        ],
      },
      {
        h2: "Proof is the dividing line",
        paragraphs: [
          "Why did AIOps stop at recommending? Because acting on production without evidence is a liability, and vendors knew it. The moment software executes a fix unattended, 'did it work?' becomes 'can you prove what it did?' — and a dashboard cannot answer that question.",
          "That's why the receipt layer is not a UAIO feature but its precondition. Every autonomous action seals a cryptographic receipt — SHA-256 hashed, hash-chained, Bitcoin-anchored via OpenTimestamps — 121,400+ so far, 90,000+ publicly verifiable. Autonomy became governable the day its evidence stopped depending on the vendor's word.",
          "There's a structural difference too. Analytics pipelines end: signal in, insight out, done. A loop compounds — every verified resolution updates the policy that routes the next incident, so the system that fixed last month's failures is measurably better at this month's. AIOps gets smarter dashboards over time. UAIO gets a smaller pager queue.",
        ],
      },
      {
        h2: "How to tell which one you're buying",
        paragraphs: ["Ignore the category label on the datasheet and ask four questions:"],
        list: [
          "Can it execute a fix end to end without a human, under policy — or does 'automation' mean a runbook link?",
          "Does it simulate before executing, with a blast-radius score?",
          "Does it verify the outcome, or just check that a command exited zero?",
          "Can a third party verify what it did without trusting the vendor?",
        ],
      },
      {
        h2: "The numbers after the shift",
        paragraphs: [
          "Four yeses is UAIO. Anything less is analytics with ambition. And the difference shows up where it counts: MTTR down 86%, from 4.2 hours to 36 minutes, with an 87% autonomous-resolution target — every resolution backed by a receipt you can check at verify.itechsmart.dev. Start at /start, or watch it run against your own stack via /contact.",
        ],
      },
    ],
  },
  {
    slug: "digital-twin-blast-radius",
    title: "Why Every Fix Is Simulated First: The 98% Blast Radius",
    metaDescription:
      "Every autonomous fix rehearses in a Digital Twin with 98% blast-radius accuracy before touching production. No safe path, no action. See how it works.",
    excerpt:
      "The reasonable fear about autonomous remediation was never the AI. It's the blast radius. So we made the software hesitate by design.",
    date: "2026-05-26",
    readMinutes: 5,
    tags: ["Architecture", "UAIO"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "The reasonable objection to autonomous remediation has never been 'can the AI find the right fix?' It's 'what happens if the fix makes things worse?' A human, at minimum, hesitates before running something destructive. Software, people assume, doesn't.",
          "Ours hesitates by design. No fix executes against production until it has run somewhere consequence-free first: the Digital Twin. Humans rehearse risky changes in staging too — when there's time, when staging matches production, when it isn't 3am. The twin makes the rehearsal unconditional.",
        ],
      },
      {
        h2: "Rehearsal before production",
        paragraphs: [
          "The Digital Twin is a live model of the environment — topology, dependencies, current state. When the cognition layer proposes a remediation, that candidate executes against the twin before anything touches a real host. It's not an optional dry-run flag; it is a hard gate in the loop, sitting between Decide and Act.",
          "This is what 'simulate the fix before executing' means in practice: a candidate remediation can be exercised thousands of times against the twin before production sees it once. The fix has already happened, in a place where being wrong costs nothing.",
        ],
      },
      {
        h2: "Blast-radius scoring at 98%",
        paragraphs: [
          "The twin's real job is prediction: what else moves when you restart this service, drain that node, rotate that certificate? The simulation emits a blast-radius score — the predicted scope of impact — and measured accuracy on that prediction is 98%.",
          "Two numbers then ride into governance together: the diagnosis confidence and the blast radius. Arbiter's policy gates route on both. High confidence and a small radius clears for autonomous execution; a medium case routes to human approval; low confidence or a wide radius stays manual. Autonomy is staged — manual → approval → auto — never assumed.",
          "This is also why 'just add automation' retrofits fail. Confidence without a radius estimate approves fixes that cascade; a radius estimate without confidence blocks fixes that were safe. You need both numbers, produced before execution, or the policy gate is guessing.",
        ],
      },
      {
        h2: "No safe path? Escalate.",
        paragraphs: [
          "The most important behavior in the whole system is refusal. When no simulated remediation clears the policy thresholds, the platform does not pick the least-bad option and gamble. It stops, and escalates to a human — with the simulation results attached: the candidate fixes it tried, ranked, each with its predicted radius.",
          "The engineer starts at the decision instead of at a blank terminal. That's the difference between autonomy replacing judgment and autonomy preparing it. A system you can trust with production is defined less by what it does than by when it declines to act.",
        ],
      },
      {
        h2: "The rehearsal is in the receipt",
        paragraphs: [
          "Simulation output is sealed into the ProofLink receipt alongside the execution record, so an auditor sees not just what was done but what was predicted — and whether prediction matched reality. When the two diverge, that delta feeds the learning step, and the twin gets sharper.",
          "Every fix your infrastructure will need has a rehearsal waiting. See one run against a live environment — book a walkthrough at /contact. No sales deck. Just proof.",
        ],
      },
    ],
  },
  {
    slug: "3am-test",
    title: "The 3AM Test: Who Actually Fixes It When It Breaks Tonight?",
    metaDescription:
      "Most 3am pages are Tier 1-2 patterns a machine resolves in 20 seconds. Do the burnout math on human on-call, then run the 3AM test on your own stack.",
    excerpt:
      "It's 3:04am and a disk just filled on something customer-facing. Three questions: who finds out, how fast is it fixed, and what did it cost the human?",
    date: "2026-06-16",
    readMinutes: 5,
    tags: ["Ops Math", "MSP"],
    pillar: true,
    sections: [
      {
        paragraphs: [
          "Here is a test any IT organization can run without buying anything. It's 3:04am. A pod crashes, or a disk fills, on something customer-facing. Three questions: Who finds out? How fast does it get fixed? And what did it cost — in dollars, and in the person who fixed it?",
          "For most organizations the honest answers are: a monitoring tool finds out, an on-call engineer fixes it whenever they manage to get oriented, and it costs more than anyone is tracking.",
        ],
      },
      {
        h2: "The burnout math",
        paragraphs: [
          "The on-call treadmill has one shape everywhere: the page fires, the engineer wakes, the SSH session opens. Every nighttime page taxes sleep, next-day capacity, and eventually the will to stay in the job. The production numbers on removing that tax are the platform's own: 90% of alert volume deduplicated before a human sees it, tier-1/2 incidents self-healing in about 20 seconds, and average MTTR down 86% — from 4.2 hours to 36 minutes.",
          "Then there's the attrition line. Burned-out engineers leave, and you re-recruit and re-train at $95K-plus salaries. The pager is the most expensive line item that appears in no budget. For MSPs the math is sharper still — on-call cost scales with tenant count, which is why the working model under UAIO becomes one engineer governing 100+ tenants instead of ten engineers losing sleep over them.",
        ],
      },
      {
        h2: "Most 3am pages don't need a human",
        paragraphs: [
          "Audit your own pager history and count the shapes: disk full, certificate expiring, OOM kill, hung service, restart-and-it's-fine. These are Tier 1-2 patterns — known problems with known fixes. They are precisely the work a machine executes better than a half-asleep human, because the machine's version runs the full loop: detect, simulate in the Digital Twin, execute under policy, verify, seal a ProofLink receipt.",
          "The genuinely novel failures — the ones actually worth waking a senior engineer for — are the minority. The target is 87% autonomous resolution; humans get paged for the novel 13%, not the routine 87%.",
        ],
      },
      {
        h2: "3:04am, with the loop closed",
        paragraphs: [
          "Same scenario, different system. 3:04:00 — the signal lands. The fix is simulated against the Digital Twin and cleared through policy. Roughly 20 seconds later, the fix is executed, verified, and sealed into a receipt. No phone lit up. The engineer reads the receipt at 9am, with coffee.",
          "And most nights, nothing fires at all: deduplication eliminates 90% of alert pages before they reach anyone. When a pod crashes at 3am, the system fixes it and hands you a cryptographic receipt. That's the whole job description.",
        ],
      },
      {
        h2: "Passing the test",
        paragraphs: ["Your organization passes the 3AM test when all three hold:"],
        list: [
          "Known-pattern incidents resolve without waking anyone — 20-second self-healing, receipt sealed.",
          "Morning review means reading receipts at verify.itechsmart.dev, not doing archaeology in log files.",
          "Humans are paged for judgment calls, not restart-shaped problems.",
        ],
      },
      {
        h2: "Run it on your stack",
        paragraphs: [
          "The 3AM test isn't about tooling pride. It's about whether your operation runs on architecture or on unpaid cortisol. Start with the free Pulse scan at /pulse to see what your environment looks like to an autonomous platform — or book a demo at /contact and bring last month's pager log. We'll do the math together.",
        ],
      },
    ],
  },
];
