export const site = {
  name: "iTechSmart",
  legalName: "iTechSmart Inc.",
  url: "https://itechsmart.dev",
  tagline: "Your infrastructure fixes itself. You get the proof.",
  description:
    "iTechSmart is the Unified Autonomous IT Operations (UAIO) platform — it detects, diagnoses, and fixes infrastructure issues on its own, then cryptographically proves every action with a Bitcoin-anchored ProofLink receipt.",
  calendly: "https://calendly.com/djuane-itechsmart/new-meeting",
  subdomains: {
    mcp: "https://mcp.itechsmart.dev",
    prooflink: "https://prooflink.itechsmart.dev",
    verify: "https://verify.itechsmart.dev",
    accounts: "https://accounts.itechsmart.dev",
  },
  twitter: "@itechsmart",
} as const;

export type NavLink = { label: string; href: string; description?: string; badge?: string };
export type NavGroup = { label: string; href?: string; columns?: { title: string; links: NavLink[] }[] };

/** Header navigation — mega-menu groups ordered by buying intent. */
export const nav: NavGroup[] = [
  {
    label: "Platform",
    columns: [
      {
        title: "The Loop",
        links: [
          { label: "iTechSmart Suite", href: "/suite", description: "All products, one autonomous loop" },
          { label: "UAIO Platform", href: "/uaio", description: "What Unified Autonomous IT Operations means" },
          { label: "ProofLink", href: "/prooflink", description: "Cryptographic receipts for every action" },
          { label: "ProofLink AI", href: "/prooflink-ai", description: "Ask your evidence anything" },
          { label: "ProofLinkPlus", href: "/prooflinkplus", description: "Article 12 record-keeping for your AI", badge: "New" },
          { label: "Architecture", href: "/architecture", description: "How the loop is wired end-to-end" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "Pulse", href: "/pulse", description: "Free scan — find what's broken in 60s", badge: "Free" },
          { label: "OctoAI", href: "/octoai", description: "The cognitive engine behind every fix" },
          { label: "Citadel", href: "/citadel", description: "Zero-trust security enforcement" },
          { label: "Hermes", href: "/hermes", description: "Cross-environment knowledge sync" },
          { label: "ITSM", href: "/itsm", description: "Ticketing with a hash-chained audit trail" },
          { label: "All products →", href: "/suite" },
        ],
      },
      {
        title: "For Developers",
        links: [
          { label: "MCP & A2A", href: "/mcp", description: "66 tools for Claude, LangGraph, CrewAI", badge: "66 tools" },
          { label: "Live Proof Ledger", href: "/proof", description: "Public, independently verifiable" },
          { label: "ProofLink API", href: "/prooflink-api", description: "Seal receipts from your own stack" },
          { label: "Changelog", href: "/changelog", description: "What shipped, receipt-sealed" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By team",
        links: [
          { label: "MSPs", href: "/solutions/msp", description: "1 engineer, 100 tenants" },
          { label: "Enterprise IT", href: "/solutions/enterprise", description: "Autonomy with governance gates" },
          { label: "DevOps & SRE", href: "/solutions/devops", description: "Kill the 3am page" },
          { label: "Security / SOC", href: "/solutions/soc", description: "Close the SIEM loop" },
        ],
      },
      {
        title: "By industry",
        links: [
          { label: "Healthcare", href: "/industries/healthcare", description: "HL7 uptime, HIPAA evidence" },
          { label: "Government", href: "/industries/government", description: "FedRAMP & CMMC continuous monitoring" },
          { label: "Finance", href: "/solutions/finance", description: "Audit-grade operational evidence" },
          { label: "Legal", href: "/solutions/legal", description: "Defensible chain of custody" },
        ],
      },
      {
        title: "By mandate",
        links: [
          { label: "EU AI Act", href: "/eu-ai-act", description: "Article 12 logging, solved" },
          { label: "FedRAMP", href: "/fedramp-automation", description: "ConMon evidence as a byproduct" },
          { label: "CMMC", href: "/cmmc-automation", description: "Continuous compliance for the DIB" },
          { label: "Compare platforms", href: "/compare", description: "vs Datadog, ServiceNow, PagerDuty…" },
        ],
      },
    ],
  },
  {
    label: "Proof",
    href: "/proof",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "What is UAIO?", href: "/what-is-uaio", description: "The category, defined" },
          { label: "UAIO vs AIOps", href: "/compare/uaio-vs-aiops", description: "Why analytics isn't autonomy" },
          { label: "Blog", href: "/blog", description: "Field notes from autonomous ops" },
          { label: "FAQ", href: "/faq", description: "Straight answers" },
        ],
      },
      {
        title: "Evidence",
        links: [
          { label: "Credibility", href: "/credibility", description: "Verify every claim we make" },
          { label: "Metrics", href: "/metrics", description: "Live platform numbers" },
          { label: "Security", href: "/security", description: "How we protect your stack" },
          { label: "State of Autonomous IT 2026", href: "/state-of-autonomous-it-2026", description: "The annual report" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "News", href: "/news" },
          { label: "Investors", href: "/investors" },
          { label: "Partners", href: "/partners" },
          { label: "Media kit", href: "/media-kit" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "iTechSmart Suite", href: "/suite" },
      { label: "UAIO Platform", href: "/uaio" },
      { label: "ProofLink", href: "/prooflink" },
      { label: "ProofLink AI", href: "/prooflink-ai" },
      { label: "ProofLinkPlus", href: "/prooflinkplus" },
      { label: "Pulse Free Scan", href: "/pulse" },
      { label: "MCP & A2A for Agents", href: "/mcp" },
      { label: "Live Proof Ledger", href: "/proof" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "MSPs", href: "/solutions/msp" },
      { label: "Enterprise IT", href: "/solutions/enterprise" },
      { label: "DevOps & SRE", href: "/solutions/devops" },
      { label: "Security / SOC", href: "/solutions/soc" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Government", href: "/industries/government" },
      { label: "EU AI Act", href: "/eu-ai-act" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "What is UAIO?", href: "/what-is-uaio" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Whitepaper", href: "/whitepaper" },
      { label: "Metrics", href: "/metrics" },
      { label: "Get Started", href: "/start" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Credibility", href: "/credibility" },
      { label: "Security", href: "/security" },
      { label: "News", href: "/news" },
      { label: "Investors", href: "/investors" },
      { label: "Partners", href: "/partners" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/** Primary conversion points, reused across pages. */
export const cta = {
  primary: { label: "Get started free", href: "/start" },
  demo: { label: "Book a 20-min demo", href: site.calendly },
  proof: { label: "See live proof", href: site.subdomains.verify },
  scan: { label: "Run a free Pulse scan", href: "/pulse" },
} as const;
