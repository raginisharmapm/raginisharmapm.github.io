import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 backdrop-blur transition-all ${
          scrolled || open ? "bg-background/90 border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              R
            </span>
            <div className="hidden sm:block">
              <div className="font-display text-base leading-none">Ragini Sharma</div>
              <div className="eyebrow mt-1">Product Manager</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex md:gap-2">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors md:px-4 ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`overflow-hidden border-border bg-background/95 backdrop-blur transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`rounded-lg px-4 py-3 text-base transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="relative z-[2]">
        <Outlet />
      </main>

      <footer className="relative z-[2] mt-32 border-t border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
          <div>
            <div className="font-display text-2xl">Ragini Sharma</div>
            <p className="eyebrow mt-2">Product Manager · Growth · Retention</p>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground">
            Currently exploring Product Manager opportunities across SaaS, AI-first products,
            consumer platforms, marketplaces, and growth-focused startups.
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a className="underline-link w-fit break-all" href="mailto:raginisharma.official@gmail.com">
              raginisharma.official@gmail.com
            </a>
            <a className="underline-link w-fit" href="tel:+919571675572">
              +91 95716 75572
            </a>
            <a
              className="underline-link w-fit"
              href="https://www.linkedin.com/in/raginisharmaofficial/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">Gurgaon, Haryana</span>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:px-10">
            <span>© {new Date().getFullYear()} Ragini Sharma</span>
            <span className="font-mono">Made with intent.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
