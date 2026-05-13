import { profile } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[color:var(--color-muted)]">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          Built with Next.js · Designed in Bengaluru
          <span className="text-[color:var(--color-accent)]">.</span>
        </p>
      </div>
    </footer>
  );
}
