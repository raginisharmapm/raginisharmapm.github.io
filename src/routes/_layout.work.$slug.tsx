import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_layout/work/$slug")({
  loader: ({ params }): CaseStudy => {
    const cs = caseStudies.find((c) => c.slug === params.slug);
    if (!cs) throw notFound();
    return cs;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} - Ragini Sharma` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: CaseStudyPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="eyebrow mb-4">Error</p>
        <h1 className="display-md mb-4">Couldn't load this case study</h1>
        <p className="mb-8 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="rounded-full bg-primary px-6 py-3 text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  },
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return <NotFoundState slug={slug} />;
  },
});

function NotFoundState({ slug }: { slug?: string }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display-md mb-4">Case study not found</h1>
      <p className="mb-8 text-muted-foreground">
        {slug ? (
          <>We couldn't find a case study at <span className="font-mono">"{slug}"</span>.</>
        ) : (
          <>That case study doesn't exist or has been moved.</>
        )}
      </p>
      <Link
        to="/work"
        className="inline-block rounded-full bg-primary px-6 py-3 text-primary-foreground"
      >
        ← Back to all work
      </Link>
    </div>
  );
}

function CaseStudyPage() {
  const { slug } = Route.useParams();
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return <NotFoundState slug={slug} />;
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      {/* HERO */}
      <header
        className="border-b border-border"
        style={{
          backgroundImage: `linear-gradient(180deg, color-mix(in oklab, ${cs.accent} 12%, transparent), transparent)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:px-10 md:pt-20 md:pb-24">
          <Link to="/work" className="eyebrow underline-link">
            ← All case studies
          </Link>
          <div className="mt-10 flex items-center gap-3 animate-fade-up">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: cs.accent }}
            />
            <span className="font-mono text-sm">{cs.product}</span>
          </div>
          <h1 className="display-lg mt-6 max-w-5xl animate-fade-up delay-100">{cs.title}</h1>
          <p className="mt-6 max-w-3xl font-display text-xl italic text-muted-foreground md:text-2xl animate-fade-up delay-200">
            {cs.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 animate-fade-up delay-300">
            {cs.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <Section eyebrow="01" title="The problem">
          <p>{cs.problem}</p>
        </Section>

        <Pull accent={cs.accent}>{cs.insight}</Pull>

        <Section eyebrow="02" title="What I explored">
          <List items={cs.explored} accent={cs.accent} />
        </Section>

        <Section eyebrow="03" title="Strategic direction">
          <p>{cs.direction}</p>
          {cs.initiatives && (
            <div className="mt-8">
              <p className="eyebrow mb-4">Key initiatives</p>
              <List items={cs.initiatives} accent={cs.accent} />
            </div>
          )}
        </Section>

        <Section eyebrow="04" title="Outcome focus">
          <List items={cs.outcomes} accent={cs.accent} />
        </Section>

        <Section eyebrow="05" title="Key learning">
          <p className="font-display text-2xl italic leading-snug">
            {cs.learning}
          </p>
        </Section>

        {cs.proofOfWork && (
          <Section eyebrow="06" title="Proof of work">
            <div className="flex flex-wrap gap-3">
              <a
                href={cs.proofOfWork}
                download
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: cs.accent }}
              >
                ↓ Download PDF
              </a>
              <a
                href={cs.proofOfWork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary"
              >
                Open in new tab ↗
              </a>
            </div>
            <div
              className="mt-6 overflow-hidden rounded-2xl border border-border bg-secondary/30"
              style={{ aspectRatio: "4 / 5" }}
            >
              <iframe
                src={cs.proofOfWork}
                title={`${cs.title} — Proof of work`}
                loading="lazy"
                className="h-full w-full"
              >
                <p className="p-6 text-sm text-muted-foreground">
                  Your browser can't preview PDFs inline. Please download the file instead.
                </p>
              </iframe>
            </div>
          </Section>
        )}
      </div>

      {/* NEXT */}
      <nav className="border-t border-border bg-secondary/30">
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-7xl flex-col gap-3 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10"
        >
          <div>
            <p className="eyebrow mb-2">Next case study</p>
            <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent transition-colors">
              {next.title}
            </h3>
          </div>
          <span className="font-mono text-sm">{next.product} →</span>
        </Link>
      </nav>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="mb-16 grid grid-cols-1 gap-4 md:mb-20 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <p className="font-mono text-xs text-muted-foreground">- {eyebrow}</p>
        <h2 className="mt-2 font-display text-2xl md:text-3xl">{title}</h2>
      </div>
      <div className="text-base leading-relaxed text-foreground/90 md:col-span-8 md:text-lg">
        {children}
      </div>
    </Reveal>
  );
}

function List({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-4">
          <span
            className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Pull({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <blockquote
      className="my-12 border-l-4 pl-6 font-display text-2xl leading-snug italic md:my-16 md:pl-8 md:text-4xl"
      style={{ borderColor: accent }}
    >
      "{children}"
    </blockquote>
  );
}
