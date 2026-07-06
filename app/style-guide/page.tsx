import type { Metadata } from "next";

/* ============================================================================
   LIVING STYLE GUIDE  ·  /style-guide
   A visual review surface for the design system. Everything here is rendered
   straight from the tokens in app/design-tokens.css, so it always reflects the
   real, current values. Change a token → refresh this page to see the effect.
   ========================================================================== */

export const metadata: Metadata = {
  title: "Design System · Soojin Hwang",
  robots: { index: false, follow: false },
};

/* ---- small presentational helpers (server components, no client JS) ---- */

function Section({
  n,
  title,
  hint,
  children,
}: {
  n: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/5 py-14">
      <div className="mb-8 flex items-baseline gap-4">
        <span className="font-mono text-[11px] tracking-[0.22em] text-white/35">
          {n}
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
          {title}
        </h2>
      </div>
      {hint && (
        <p className="-mt-4 mb-8 max-w-[70ch] text-sm text-white/50">{hint}</p>
      )}
      {children}
    </section>
  );
}

function Token({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
      <span className="text-white/45">{name}</span>
      <span className="text-white/70">{value}</span>
    </div>
  );
}

/* ---- data (mirrors app/design-tokens.css) ---- */

const surfaces = [
  { name: "ink-950", hex: "#06070B", use: "Page background" },
  { name: "ink-900", hex: "#0A0C12", use: "Raised surface / nav" },
  { name: "ink-800", hex: "#10131C", use: "Card base" },
  { name: "ink-700", hex: "#161A26", use: "Card hover / inset" },
  { name: "ink-600", hex: "#1F2433", use: "Divider surface" },
  { name: "ink-500", hex: "#2A3147", use: "Muted / disabled" },
];

const textRamp = [
  { name: "text-100", hex: "#F4F5FB", cls: "text-white", use: "Headings" },
  { name: "text-300", hex: "#C8CCD9", cls: "text-white/80", use: "Body copy" },
  { name: "text-500", hex: "#8A90A3", cls: "text-white/55", use: "Secondary" },
  { name: "text-700", hex: "#4A5063", cls: "text-white/35", use: "Faint" },
];

const accents = [
  { name: "violet", hex: "#8B5CF6" },
  { name: "indigo", hex: "#6366F1" },
  { name: "blue", hex: "#3B82F6" },
  { name: "cyan", hex: "#22D3EE" },
  { name: "mint", hex: "#34D399" },
  { name: "rose", hex: "#FB7185" },
  { name: "amber", hex: "#F59E0B" },
];

const typeScale = [
  { cls: "text-display-xl", label: "Display XL", px: "72", sample: "Design", weight: "600" },
  { cls: "text-display-lg", label: "Display LG", px: "60", sample: "Design where AI meets", weight: "600" },
  { cls: "text-display-md", label: "Display MD", px: "48", sample: "Design where AI meets", weight: "600" },
  { cls: "text-heading-lg", label: "Heading LG", px: "40", sample: "Selected work & case studies", weight: "600" },
  { cls: "text-heading-md", label: "Heading MD", px: "32", sample: "From capability to confidence", weight: "600" },
  { cls: "text-heading-sm", label: "Heading SM", px: "24", sample: "AI agents & complex workflows", weight: "600" },
  { cls: "text-title", label: "Title", px: "20", sample: "System-level experiences", weight: "600" },
  { cls: "text-body-lg", label: "Body LG", px: "18", sample: "I turn model capability into user confidence across consumer and enterprise products.", weight: "400" },
  { cls: "text-body", label: "Body", px: "16", sample: "I turn model capability into user confidence across consumer and enterprise products.", weight: "400" },
  { cls: "text-body-sm", label: "Body SM", px: "15", sample: "I turn model capability into user confidence across consumer and enterprise products.", weight: "400" },
  { cls: "text-caption", label: "Caption", px: "13", sample: "Live in production · updated 2026", weight: "400" },
  { cls: "text-label uppercase", label: "Label", px: "11", sample: "Featured Project", weight: "500" },
];

const spacing = [
  { name: "space-1", px: "4" }, { name: "space-2", px: "8" },
  { name: "space-3", px: "12" }, { name: "space-4", px: "16" },
  { name: "space-6", px: "24" }, { name: "space-8", px: "32" },
  { name: "space-12", px: "48" }, { name: "space-16", px: "64" },
  { name: "space-24", px: "96" },
];

const radii = [
  { cls: "rounded-lg", px: "8", name: "lg" },
  { cls: "rounded-xl", px: "12", name: "xl" },
  { cls: "rounded-2xl", px: "16", name: "2xl" },
  { cls: "rounded-card", px: "24", name: "card" },
  { cls: "rounded-panel", px: "32", name: "panel" },
  { cls: "rounded-pill", px: "full", name: "pill" },
];

const motion = [
  { name: "--duration-fast", value: "0.3s", use: "Hovers, taps" },
  { name: "--duration-base", value: "0.6s", use: "Entrances" },
  { name: "--duration-slow", value: "0.9s", use: "Hero reveals" },
  { name: "--ease-out-expo", value: "cubic-bezier(.2,.8,.2,1)", use: "House easing" },
];

export default function StyleGuidePage() {
  return (
    <main className="container-narrow py-20">
      {/* Header */}
      <header className="mb-6">
        <div className="chip mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Design System · v1
        </div>
        <h1 className="h-display text-[40px] font-semibold leading-[1.05] tracking-tightest text-white md:text-[56px]">
          <span className="text-gradient">Design system</span> &amp; tokens
        </h1>
        <p className="mt-4 max-w-[62ch] text-base text-white/60">
          The single source of truth is{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-white/80">
            app/design-tokens.css
          </code>
          . Change a value there and it updates across the whole site — refresh
          this page to review the result. Full written guideline in{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-white/80">
            DESIGN_SYSTEM.md
          </code>
          .
        </p>
      </header>

      {/* 1 · COLOR */}
      <Section n="01" title="Color" hint="Permanent dark theme. Surfaces are a near-black ‘ink’ ramp; text is layered white; accents carry highlights and per-project color.">
        <h3 className="mb-4 text-label uppercase text-white/45">Surfaces</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {surfaces.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-xl border border-white/8">
              <div className="h-20 w-full" style={{ background: s.hex }} />
              <div className="space-y-1 bg-white/[0.02] p-3">
                <div className="font-mono text-xs text-white/80">{s.name}</div>
                <div className="font-mono text-[11px] text-white/45">{s.hex}</div>
                <div className="text-[11px] text-white/40">{s.use}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-10 text-label uppercase text-white/45">Text ramp</h3>
        <div className="space-y-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          {textRamp.map((t) => (
            <div key={t.name} className="flex items-center justify-between gap-4">
              <span className={`text-lg font-medium ${t.cls}`}>
                The quick brown fox — {t.use}
              </span>
              <span className="font-mono text-[11px] text-white/40">
                {t.name} · {t.hex}
              </span>
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-10 text-label uppercase text-white/45">Accents</h3>
        <div className="grid grid-cols-3 gap-3 md:grid-cols-7">
          {accents.map((a) => (
            <div key={a.name} className="text-center">
              <div
                className="mb-2 h-16 w-full rounded-xl"
                style={{ background: a.hex, boxShadow: `0 8px 30px -10px ${a.hex}80` }}
              />
              <div className="font-mono text-[11px] text-white/70">{a.name}</div>
              <div className="font-mono text-[10px] text-white/40">{a.hex}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 2 · TYPOGRAPHY */}
      <Section n="02" title="Typography" hint="Söhne/Inter for display & body; JetBrains Mono for code & labels. Display type rides tight tracking; uppercase labels ride wide tracking.">
        <div className="mb-8 grid gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:grid-cols-3">
          <div>
            <div className="mb-1 text-label uppercase text-white/40">Display / Sans</div>
            <div className="font-display text-2xl text-white">Söhne · Inter</div>
          </div>
          <div>
            <div className="mb-1 text-label uppercase text-white/40">Mono</div>
            <div className="font-mono text-2xl text-white">JetBrains Mono</div>
          </div>
          <div className="space-y-1 font-mono text-[11px] text-white/55">
            <div>400 Regular · 500 Medium</div>
            <div>600 Semibold · 700 Bold</div>
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
          {typeScale.map((t) => (
            <div key={t.cls} className="flex flex-col gap-1 border-b border-white/5 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 font-mono text-[11px] text-white/40">
                <span className="text-white/70">{t.label}</span>
                <span>·</span>
                <span>{t.px}px</span>
                <span>·</span>
                <span>{t.cls}</span>
              </div>
              <div className={`${t.cls} text-white`} style={{ fontWeight: Number(t.weight) }}>
                {t.sample}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3 · SPACING */}
      <Section n="03" title="Spacing" hint="4px base grid (matches Tailwind). Sections breathe on a 112px desktop rhythm (--section-y).">
        <div className="space-y-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          {spacing.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="w-24 font-mono text-[11px] text-white/45">{s.name}</span>
              <span className="w-10 font-mono text-[11px] text-white/60">{s.px}px</span>
              <span
                className="h-4 rounded bg-accent-indigo/70"
                style={{ width: `${s.px}px` }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 4 · RADIUS */}
      <Section n="04" title="Radius" hint="Cards use rounded-card (24px), hero panels rounded-panel (32px), controls rounded-pill.">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {radii.map((r) => (
            <div key={r.name} className="text-center">
              <div className={`mb-2 h-20 w-full border border-white/12 bg-white/[0.04] ${r.cls}`} />
              <div className="font-mono text-[11px] text-white/70">{r.cls}</div>
              <div className="font-mono text-[10px] text-white/40">
                {r.px === "full" ? "full" : `${r.px}px`}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 · ELEVATION */}
      <Section n="05" title="Elevation & surfaces" hint="Depth comes from soft shadows and translucent ‘glass’, never hard borders.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass rounded-card p-6">
            <div className="mb-8 text-label uppercase text-white/40">.glass</div>
            <div className="font-mono text-xs text-white/60">blur 14px · white 4%</div>
          </div>
          <div className="glass-strong rounded-card p-6">
            <div className="mb-8 text-label uppercase text-white/40">.glass-strong</div>
            <div className="font-mono text-xs text-white/60">blur 20px · white 6%</div>
          </div>
          <div className="rounded-card bg-ink-800 p-6 shadow-soft ring-1 ring-white/5">
            <div className="mb-8 text-label uppercase text-white/40">.ring-soft</div>
            <div className="font-mono text-xs text-white/60">--shadow-soft</div>
          </div>
        </div>
      </Section>

      {/* 6 · COMPONENTS */}
      <Section n="06" title="Component primitives" hint="Reusable classes defined in globals.css. Prefer these over ad-hoc styling.">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-8">
          <button className="btn-primary">Primary action →</button>
          <button className="btn-ghost">Ghost action</button>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Chip label
          </span>
          <span className="text-gradient font-display text-2xl font-semibold">
            .text-gradient
          </span>
          <span className="text-gradient-warm font-display text-2xl font-semibold">
            .text-gradient-warm
          </span>
        </div>
      </Section>

      {/* 7 · MOTION */}
      <Section n="07" title="Motion" hint="One house easing (out-expo) and three durations. Everything respects prefers-reduced-motion.">
        <div className="space-y-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6">
          {motion.map((m) => (
            <div key={m.name} className="flex items-center justify-between gap-4">
              <Token name={m.name} value={m.value} />
              <span className="text-[11px] text-white/40">{m.use}</span>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/5 py-10 text-sm text-white/40">
        Edit <code className="font-mono text-white/60">app/design-tokens.css</code>{" "}
        to change any value above. See{" "}
        <code className="font-mono text-white/60">DESIGN_SYSTEM.md</code> for the
        full guideline and change cookbook.
      </footer>
    </main>
  );
}
