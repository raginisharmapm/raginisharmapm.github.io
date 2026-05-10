import { useEffect, useState } from "react";
import portrait from "@/assets/ragini-portrait.jpeg";

type LoaderProps = {
  show: boolean;
  /** When true, fades out fully. When false, stays visible. */
};

export function PageLoader({ show }: LoaderProps) {
  // Mount/unmount with fade for cleaner DOM.
  const [mounted, setMounted] = useState(show);

  useEffect(() => {
    if (show) {
      setMounted(true);
      return;
    }
    const t = setTimeout(() => setMounted(false), 450);
    return () => clearTimeout(t);
  }, [show]);

  if (!mounted) return null;

  const name = " • Ragini Sharma • Product Manager • Ragini Sharma • Product Manager";
  const circumference = 2 * Math.PI * 86;

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
        {/* Soft glow */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent/40 to-primary/30 blur-3xl" />

        {/* Rotating name ring */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full animate-spin"
          style={{ animationDuration: "16s" }}
        >
          <defs>
            <path
              id="loader-circle"
              d="M 100,100 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
              fill="none"
            />
          </defs>
          <text
            className="fill-foreground"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
            }}
          >
            <textPath
              href="#loader-circle"
              startOffset="0"
              textLength={circumference}
              lengthAdjust="spacingAndGlyphs"
            >
              {name}
            </textPath>
          </text>
        </svg>

        {/* Center portrait */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={portrait}
            alt="Ragini Sharma"
            className="h-32 w-32 rounded-full border border-border object-cover shadow-xl sm:h-40 sm:w-40"
          />
        </div>
      </div>
    </div>
  );
}
