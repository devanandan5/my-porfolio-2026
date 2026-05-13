type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 border-t border-[color:var(--color-border)]"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
            <span className="h-px w-6 bg-[color:var(--color-accent)]" />
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-[color:var(--color-muted)] text-lg leading-relaxed text-balance">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
