import { profile } from "../lib/data";

const socials = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    handle: "devanandan-s",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: profile.github,
    handle: "devanandan5",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: profile.x,
    handle: "@devanandan_s_",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: profile.instagram,
    handle: "@t.a.l.e.s",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 sm:py-40 border-t border-[color:var(--color-border)] overflow-hidden"
    >
      <div className="absolute inset-x-0 bottom-0 h-[400px] glow pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
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
          <a
            href={`tel:${profile.phoneTel}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] px-6 text-sm font-medium hover:border-[color:var(--color-fg)] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {profile.phone}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-2 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur p-4 hover:border-[color:var(--color-accent)] transition-colors text-left"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg)] text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] group-hover:border-[color:var(--color-accent)] transition-colors">
                {s.icon}
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)]">
                  {s.label}
                </p>
                <p className="mt-0.5 text-sm text-[color:var(--color-fg)] truncate">
                  {s.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
