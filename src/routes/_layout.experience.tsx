import { createFileRoute, Link } from "@tanstack/react-router";
import { experience } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_layout/experience")({
  head: () => ({
    meta: [
      { title: "Experience - Ragini Sharma" },
      {
        name: "description",
        content:
          "Product experience across mobility, music streaming, ecommerce marketplaces, IT workflow platforms, and AI roadmap tools.",
      },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
        <p className="eyebrow mb-6 animate-fade-up">Experience</p>
        <h1 className="display-xl max-w-5xl animate-fade-up delay-100">
          Six years of shipping across
          <span className="italic text-accent"> categories</span>.
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 md:px-10">
        <ol className="relative border-l border-border pl-8 md:pl-12">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.company} delay={i * 80} className="relative pb-16 last:pb-0">
              <span className="absolute -left-[37px] md:-left-[49px] flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border font-mono text-[10px] transition-transform duration-300 hover:scale-125 hover:border-accent hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h2 className="font-display text-2xl md:text-3xl">{e.company}</h2>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {e.role}
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {e.summary}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <Reveal>
            <h2 className="display-md mb-6">Want the full version?</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/Ragini_Sharma_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="rounded-full bg-primary px-6 py-3 text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3 transition-all duration-300 hover:bg-background hover:scale-105"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
