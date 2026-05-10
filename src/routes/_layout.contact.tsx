import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_layout/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Ragini Sharma" },
      {
        name: "description",
        content:
          "Currently exploring Product Manager opportunities across SaaS, AI-first products, consumer platforms, and marketplaces.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    value: "raginisharma.official@gmail.com",
    href: "mailto:raginisharma.official@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 95716 75572",
    href: "tel:+919571675572",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/raginisharmaofficial",
    href: "https://www.linkedin.com/in/raginisharmaofficial/",
  },
  {
    label: "Location",
    value: "Gurgaon, Haryana",
    href: "https://maps.google.com/?q=Gurgaon,Haryana,India",
  },
];

function Contact() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
        <p className="eyebrow mb-6 animate-fade-up">Let's connect</p>
        <h1 className="display-xl max-w-5xl animate-fade-up delay-100">
          Currently exploring
          <span className="italic text-accent"> Product Manager </span>
          opportunities.
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground animate-fade-up delay-200">
          Across SaaS, AI-first products, consumer platforms, marketplaces, and
          growth-focused startup environments. If you're working on a product
          where user behavior, business goals, and operational complexity
          intersect - I'd love to talk.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col gap-3 bg-background p-8 transition-all duration-300 hover:bg-secondary hover:-translate-y-1"
              >
                <span className="eyebrow">{c.label}</span>
                <span className="font-display text-xl sm:text-2xl group-hover:text-accent transition-colors break-words">
                  {c.value}
                </span>
                <span className="mt-auto text-sm text-muted-foreground">
                  Reach out →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10">
          <Reveal>
            <h2 className="display-lg italic">
              "Simplicity is a product strategy."
            </h2>
            <p className="eyebrow mt-6">- Ragini Sharma</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
