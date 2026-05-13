import { experience } from "../lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped."
      description="Six-plus years across product companies, agencies and independent freelance — focused on shipping reliable web and mobile software."
    >
      <ol className="relative space-y-4">
        {experience.map((job, idx) => (
          <li
            key={idx}
            className="group relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 sm:p-8 transition-colors hover:border-[color:var(--color-border-strong)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {job.role}
                  <span className="text-[color:var(--color-muted)]"> · </span>
                  <span className="text-[color:var(--color-accent)]">
                    {job.company}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-[color:var(--color-muted)] font-mono">
                  {job.type} · {job.location}
                </p>
              </div>
              <div className="shrink-0 text-sm font-mono text-[color:var(--color-muted)]">
                <span className="text-[color:var(--color-fg)]">
                  {job.start} – {job.end}
                </span>
                <span className="block sm:text-right">{job.duration}</span>
              </div>
            </div>

            <ul className="mt-5 space-y-1.5 text-[color:var(--color-muted)]">
              {job.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <li
                  key={s}
                  className="text-xs font-mono text-[color:var(--color-muted)] border border-[color:var(--color-border)] rounded-full px-2.5 py-1"
                >
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
