import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import type { LegalDoc } from "@/data/legal-types";

/** Prose layout for privacy/terms — faithful text, readable rhythm. */
export function LegalTemplate({ doc }: { doc: LegalDoc }) {
  return (
    <div className="relative overflow-hidden pt-16">
      <GridPattern />
      <Container className="relative max-w-3xl py-16 sm:py-24">
        <h1 className="font-display text-4xl font-medium tracking-tight text-bright sm:text-5xl">{doc.title}</h1>
        <div className="mt-4 space-y-1">
          {doc.intro.slice(0, 2).map((line, i) => (
            <p key={i} className="font-mono text-xs text-dim">{line}</p>
          ))}
        </div>
        {doc.intro.length > 2 && (
          <div className="mt-8 space-y-3 rounded-2xl border hairline bg-card/50 p-6">
            {doc.intro.slice(2).map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-fog">{line}</p>
            ))}
          </div>
        )}
        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 font-display text-xl font-medium text-bright sm:text-2xl">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-fog">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
