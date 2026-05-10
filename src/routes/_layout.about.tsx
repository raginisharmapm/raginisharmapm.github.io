import { createFileRoute, Link } from "@tanstack/react-router";
import { skills } from "@/lib/case-studies";
import portrait from "@/assets/ragini-portrait.jpeg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_layout/about")({
  head: () => ({
    meta: [
      { title: "About - Ragini Sharma" },
      {
        name: "description",
        content:
          "Product Manager focused on growth, retention, user behavior, and decision-friction reduction across SaaS, marketplaces, and AI-first products.",
      },
    ],
  }),
  component: About,
});

const interests = [
  "Growth & retention systems",
  "Product strategy",
  "User behavior & habit loops",
  "Marketplace and platform products",
  "AI-assisted workflows",
  "Decision-friction reduction",
];

function About() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
        <p className="eyebrow mb-6 animate-fade-up">About</p>
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-14">
          <div className="relative flex-shrink-0 animate-scale-in">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 to-primary/30 blur-2xl animate-pulse" />
            <img
              src={portrait}
              alt="Portrait of Ragini Sharma"
              className="relative h-44 w-44 rounded-full border border-border object-cover shadow-xl transition-transform duration-500 hover:scale-105 md:h-56 md:w-56"
            />
          </div>
          <h1 className="display-xl max-w-3xl animate-fade-up delay-200">
            Building for <span className="italic text-accent">behavior</span>,
            not for feature quantity.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 md:grid-cols-12 md:px-10">
        <Reveal className="prose-lg space-y-6 text-lg leading-relaxed text-foreground/90 md:col-span-8">
          <p>
            I'm a Product Manager with <strong>6+ years of experience</strong> across SaaS,
            marketplaces, AI-first products, workflow automation systems, and consumer
            platforms. My work focuses on solving ambiguous product problems through
            user behavior analysis, structured prioritization, and scalable execution.
          </p>
          <p>
            Over the years, I've worked across product discovery, roadmap planning,
            onboarding optimization, retention systems, monetization strategy, and
            cross-functional product execution in startup and digital transformation
            environments.
          </p>
          <p>
            I enjoy working on products where user behavior, business goals, and
            operational complexity intersect. My approach is grounded in understanding{" "}
            <em>why users hesitate, disengage, or fail to build habits</em> inside
            products - and designing systems that reduce that friction.
          </p>
        </Reveal>

        <Reveal as="aside" delay={150} className="md:col-span-4">
          <div className="sticky top-28 rounded-2xl border border-border bg-card p-8">
            <p className="eyebrow mb-4">Particularly interested in</p>
            <ul className="space-y-3">
              {interests.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1 w-3 flex-shrink-0 bg-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow mb-3">Capabilities</p>
          <h2 className="display-lg mb-12 max-w-3xl">Skills & toolset</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {Object.entries(skills).map(([group, items], gi) => (
              <Reveal key={group} delay={gi * 100}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-5">
                  - {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:border-accent hover:text-accent"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display-md max-w-2xl">
            See how this thinking translates into shipped product work.
          </h2>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground"
          >
            Browse case studies →
          </Link>
        </div>
      </section>
    </div>
  );
}
