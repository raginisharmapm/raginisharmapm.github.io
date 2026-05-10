import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_layout/work")({
  head: () => ({
    meta: [
      { title: "Case Studies - Ragini Sharma" },
      {
        name: "description",
        content:
          "Product case studies on retention, growth, marketplaces, learning systems, and decision friction across Zomato, Zepto, X, and learning platforms.",
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
        <p className="eyebrow mb-6 animate-fade-up">Case Studies</p>
        <h1 className="display-xl max-w-5xl animate-fade-up delay-100">
          Product problems, framed as
          <span className="italic text-accent"> systems</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground animate-fade-up delay-200">
          Each study reframes a product challenge from a behavior-first lens -
          showing the insight, the strategic direction, and the outcome focus.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Link
              key={cs.slug}
              to="/work/$slug"
              params={{ slug: cs.slug }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {cs.product}
                </span>
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: cs.accent }}
                />
              </div>
              <h2 className="mt-8 font-display text-2xl leading-tight md:text-3xl">
                {cs.title}
              </h2>
              <p className="mt-3 italic text-muted-foreground">{cs.tagline}</p>
              <div className="mt-auto pt-8">
                <div className="flex flex-wrap gap-2">
                  {cs.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-accent">
                  Read case study →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
