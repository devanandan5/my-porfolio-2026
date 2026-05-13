import { profile } from "../lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[600px] glow pointer-events-none" />
      <div className="absolute inset-0 noise opacity-[0.4] pointer-events-none mix-blend-overlay" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="fade-up max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]/80 backdrop-blur px-3 py-1 text-xs font-mono text-[color:var(--color-muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--color-accent)]"></span>
            </span>
            {profile.status} — {profile.location.split(",")[0]}
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-balance">
            <span className="text-gradient">{profile.firstName}</span>{" "}
            <span className="text-gradient">S.</span>
            <br />
            <span className="text-[color:var(--color-muted)] font-normal">
              {profile.role}
              <span className="text-[color:var(--color-accent)]">.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--color-muted)] text-balance">
            {profile.tagline}{" "}
            <span className="text-[color:var(--color-fg)]">
              {profile.yearsOfExperience}+ years
            </span>{" "}
            shipping production software across web, mobile and Web3.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[color:var(--color-fg)] px-5 text-sm font-medium text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent)] transition-colors"
            >
              View my work
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
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] px-5 text-sm font-medium hover:border-[color:var(--color-fg)] transition-colors"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-xl overflow-hidden max-w-2xl">
            {[
              { label: "Experience", value: `${profile.yearsOfExperience}+ yrs` },
              { label: "Projects", value: "20+" },
              { label: "Stack", value: "MERN" },
              { label: "Based in", value: "Bengaluru" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[color:var(--color-bg)] p-4 sm:p-5"
              >
                <dt className="text-xs uppercase tracking-wider text-[color:var(--color-muted)] font-mono">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
