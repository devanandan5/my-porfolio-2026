import Image from "next/image";
import { profile } from "../lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="One engineer. Whole stack."
    >
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-5 text-[color:var(--color-muted)] text-base sm:text-lg leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="lg:col-span-2 space-y-4">
          <div className="relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 overflow-hidden">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[color:var(--color-accent)]/15 blur-2xl" />
            <div className="relative flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 rounded-full bg-[color:var(--color-accent)] blur opacity-40" />
                <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-[color:var(--color-accent)] ring-offset-2 ring-offset-[color:var(--color-surface)]">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.16em] text-[color:var(--color-muted)]">
                  {profile.pronouns}
                </p>
                <p className="text-lg font-semibold tracking-tight">
                  {profile.name}
                </p>
                <p className="text-sm text-[color:var(--color-muted)]">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 font-mono text-sm">
            <div className="flex items-center gap-1.5 pb-4 border-b border-[color:var(--color-border)] mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-[color:var(--color-muted)]">
                ~/devanandan
              </span>
            </div>
            <div className="space-y-1.5">
              <Line k="name" v={`"${profile.name}"`} />
              <Line k="aliases" v={profile.aliases.map((a) => `"${a}"`).join(", ")} />
              <Line k="role" v={`"${profile.role}"`} />
              <Line k="location" v={`"${profile.location}"`} />
              <Line k="email" v={`"${profile.email}"`} />
              <Line k="experience" v={`"${profile.experienceLabel}"`} />
              <Line k="since" v={`"${profile.experienceSince}"`} />
              <Line k="status" v={`"${profile.status}"`} accent />
              <div className="pt-2 text-[color:var(--color-muted)]">
                <span className="text-[color:var(--color-accent)]">›</span>{" "}
                <span className="cursor-blink">scroll</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Line({
  k,
  v,
  accent,
}: {
  k: string;
  v: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <span className="text-[color:var(--color-muted)]">{k}:</span>
      <span
        className={
          accent ? "text-[color:var(--color-accent)]" : "text-[color:var(--color-fg)]"
        }
      >
        {v}
      </span>
    </div>
  );
}
