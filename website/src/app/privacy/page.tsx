import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalTemplate } from "@/components/templates/legal-template";
import { privacyDoc } from "@/data/legal";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | iTechSmart",
  description:
    "How iTechSmart Inc. collects, uses, and protects your information — including SMS opt-in data, telemetry authorization, and compliance reporting.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalTemplate doc={privacyDoc} />;
}
