import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { LegalTemplate } from "@/components/templates/legal-template";
import { termsDoc } from "@/data/legal";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service | iTechSmart",
  description:
    "Terms governing use of the iTechSmart UAIO platform: services, SMS messaging compliance, acceptable use, autonomous operations authorization, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalTemplate doc={termsDoc} />;
}
