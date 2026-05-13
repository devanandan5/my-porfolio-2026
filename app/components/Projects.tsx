import { projects } from "../lib/data";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Things I've built."
      description="A snapshot of recent projects — across AI, fintech, healthcare, education and developer tooling."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`group relative flex flex-col rounded-2xl border bg-[color:var(--color-surface)] p-6 transition-all hover:-translate-y-1 ${
              p.highlight
                ? "border-[color:var(--color-border-strong)] lg:col-span-1"
                : "border-[color:var(--color-border)]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    p.highlight
                      ? "bg-[color:var(--color-accent)] shadow-[0_0_12px_2px_rgba(163,230,53,0.6)]"
                      : "bg-[color:var(--color-border-strong)]"
                  }`}
                />
                <span className="font-mono text-xs text-[color:var(--color-muted)]">
                  {p.year}
                </span>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[color:var(--color-muted)] transition-all group-hover:text-[color:var(--color-accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)] leading-relaxed flex-1">
              {p.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="text-[10px] uppercase tracking-wider font-mono text-[color:var(--color-muted)] border border-[color:var(--color-border)] rounded px-1.5 py-0.5"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
