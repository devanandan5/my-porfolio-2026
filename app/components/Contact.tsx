import { profile } from "../lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-40 border-t border-[color:var(--color-border)] overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 h-[400px] glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
          <span className="h-px w-6 bg-[color:var(--color-accent)]" />
          Get in touch
          <span className="h-px w-6 bg-[color:var(--color-accent)]" />
        </div>

        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-balance">
          Let&apos;s build{" "}
          <span className="text-[color:var(--color-muted)]">
            something good
          </span>
          <span className="text-[color:var(--color-accent)]">.</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-[color:var(--color-muted)] text-balance">
          Have an idea, a role, or a problem worth solving? I&apos;d love to hear
          from you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[color:var(--color-fg)] px-6 text-sm font-medium text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent)] transition-colors"
          >
            {profile.email}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {[
            {
              label: "LinkedIn",
              href: profile.linkedin,
            },
            {
              label: "GitHub",
              href: profile.github,
            },
            {
              label: "Email",
              href: `mailto:${profile.email}`,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]/80 backdrop-blur px-4 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)] hover:border-[color:var(--color-fg)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
