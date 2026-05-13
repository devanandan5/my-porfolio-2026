import { skillGroups } from "../lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Tools I work with daily."
      description="A focused stack picked for speed, reliability and developer joy."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                {group.label}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[color:var(--color-fg)]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="shrink-0 text-[color:var(--color-accent)]"
                  >
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
