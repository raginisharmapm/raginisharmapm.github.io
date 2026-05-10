import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies, principles } from "@/lib/case-studies";

export const Route = createFileRoute("/_layout/")({
  head: () => ({
    meta: [
      { title: "Ragini Sharma — Product Manager | Growth & Retention" },
      {
        name: "description",
        content:
          "Product Manager with 6+ years across SaaS, marketplaces, AI-first products and consumer platforms. Building products that reduce decision friction and create long-term user trust.",
      },
      { property: "og:title", content: "Ragini Sharma — Product Manager" },
      {
        property: "og:description",
        content:
          "I build products that reduce decision friction, improve engagement, and create long-term user trust.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
        <p className="eyebrow mb-8">Available · Product Manager · 6+ yrs</p>
        <h1 className="display-xl max-w-5xl">
          I build products that reduce
          <span className="italic text-accent"> decision friction</span>,
          improve engagement, and earn long-term user trust.
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-7">
            Working across SaaS, marketplaces, AI-first products, workflow automation,
            and consumer platforms — solving ambiguous problems through user behavior
            analysis, structured prioritization, and scalable execution.
          </p>
          <div className="flex flex-col gap-3 text-sm md:col-span-5 md:items-end">
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-primary-foreground hover:opacity-90"
              >
                See case studies →
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground md:justify-end">
              <a className="underline-link" href="#">Resume</a>
              <a className="underline-link" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="underline-link" href="mailto:hello@raginisharma.com">Email</a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE OF FOCUS AREAS */}
      <section className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 px-6 font-display text-xl md:text-2xl">
          {[
            "Growth & Retention",
            "Product Strategy",
            "Habit Loops",
            "Marketplaces",
            "AI-Assisted Workflows",
            "Decision Friction",
          ].map((s, i) => (
            <span key={s} className="flex items-center gap-10">
              <span className={i % 2 === 0 ? "" : "italic text-accent"}>{s}</span>
              <span className="text-rule">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">01 — Featured Work</p>
            <h2 className="display-lg max-w-2xl">Selected case studies</h2>
          </div>
          <Link to="/work" className="underline-link hidden text-sm md:inline">
            View all →
          </Link>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              to="/work/$slug"
              params={{ slug: cs.slug }}
              className="group grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-secondary/50"
            >
              <span className="col-span-2 font-mono text-xs text-muted-foreground md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-display text-2xl leading-tight md:text-3xl">
                  {cs.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground italic">{cs.tagline}</p>
              </div>
              <div className="col-span-8 hidden flex-wrap gap-2 md:col-span-3 md:flex">
                {cs.focus.slice(0, 2).map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <span
                className="col-span-12 hidden h-3 w-3 rounded-full md:col-span-1 md:inline-block md:justify-self-end"
                style={{ backgroundColor: cs.accent }}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow mb-3">02 — Operating Principles</p>
          <h2 className="display-lg mb-16 max-w-3xl">
            How I think about <span className="italic text-accent">product</span>.
          </h2>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-border md:grid-cols-2">
            {principles.map((p, i) => (
              <li
                key={p}
                className="flex gap-6 bg-background p-8"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="display-lg max-w-3xl">
            Have a product problem worth thinking through together?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground"
          >
            Let's talk →
          </Link>
        </div>
      </section>
    </div>
  );
}
