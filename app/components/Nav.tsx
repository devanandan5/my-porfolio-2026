"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, profile } from "../lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5 font-mono text-sm tracking-tight"
          >
            <span className="relative inline-flex h-8 w-8 rounded-full overflow-hidden ring-1 ring-[color:var(--color-border-strong)] group-hover:ring-[color:var(--color-accent)] transition">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={64}
                height={64}
                priority
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:inline text-[color:var(--color-fg)]">
              {profile.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {nav.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? "text-[color:var(--color-fg)] bg-[color:var(--color-surface)]"
                      : "text-[color:var(--color-muted)] hover:text-[color:var(--color-fg)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hidden sm:inline-flex h-9 items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] px-4 text-sm hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-accent)]"></span>
              </span>
              Available for work
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] text-[color:var(--color-fg)] hover:border-[color:var(--color-accent)] transition-colors"
            >
              <span className="sr-only">Menu</span>
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 8h16M4 16h10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden overflow-y-auto bg-[color:var(--color-bg)]"
        >
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
          <div className="absolute inset-x-0 top-0 h-[500px] glow pointer-events-none" />

          <div className="relative min-h-screen flex flex-col pt-24 pb-12 px-6">
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)]/80 backdrop-blur px-3 py-1.5 text-xs font-mono text-[color:var(--color-muted)] w-fit menu-item" style={{ animationDelay: "0.05s" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[color:var(--color-accent)]"></span>
              </span>
              {profile.status} — Bengaluru
            </div>

            <nav className="mt-10 flex flex-col">
              {nav.map((item, i) => {
                const num = String(i + 1).padStart(2, "0");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="menu-item group flex items-baseline gap-4 py-4 border-b border-[color:var(--color-border)]"
                    style={{ animationDelay: `${0.08 + i * 0.06}s` }}
                  >
                    <span className="font-mono text-xs text-[color:var(--color-accent)] w-7">
                      {num}
                    </span>
                    <span className="text-4xl sm:text-5xl font-semibold tracking-tighter text-gradient group-hover:text-[color:var(--color-accent)] transition-colors flex-1">
                      {item.label}
                    </span>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[color:var(--color-muted)] group-hover:text-[color:var(--color-accent)] transition-all group-hover:translate-x-1 -translate-y-0.5"
                    >
                      <path
                        d="M7 17L17 7M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                );
              })}
            </nav>

            <div
              className="mt-10 grid grid-cols-2 gap-3 menu-item"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)]">
                  Email
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-fg)] truncate">
                  {profile.email}
                </p>
              </a>
              <a
                href={`tel:${profile.phoneTel}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)]">
                  Phone
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-fg)]">
                  {profile.phone}
                </p>
              </a>
            </div>

            <div
              className="mt-auto pt-10 flex items-center gap-3 menu-item"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { label: "in", href: profile.linkedin },
                { label: "gh", href: profile.github },
                { label: "𝕏", href: profile.x },
                { label: "ig", href: profile.instagram },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] font-mono text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
