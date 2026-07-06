"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  index: string;
  category: string;
  title: string;
  positioning: string;
  description: string;
  focus: string[];
  metrics: { label: string; value: string }[];
  visual: ReactNode;
  accent: string; // hex
  href?: string;
  reverse?: boolean;
};

export default function ProjectCard({
  index,
  category,
  title,
  positioning,
  description,
  focus,
  metrics,
  visual,
  accent,
  href = "#",
  reverse,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative"
    >
      <div className="glass-strong relative overflow-hidden rounded-3xl ring-soft">
        {/* Accent glow ribbon */}
        <div
          className="pointer-events-none absolute -top-px left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />

        <div
          className={`grid grid-cols-1 gap-0 lg:grid-cols-[1.05fr_0.95fr] ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Copy */}
          <div className="relative flex flex-col gap-6 p-7 md:p-10">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color: accent }}
              >
                {index}
              </span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                {category}
              </span>
            </div>

            <header>
              <h3 className="h-display text-3xl font-semibold leading-[1.05] tracking-tighter2 text-white md:text-[40px]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] text-white/65 md:text-base">
                {positioning}
              </p>
            </header>

            <p className="text-[14.5px] leading-relaxed text-white/55 md:text-[15px]">
              {description}
            </p>

            <div>
              <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/40">
                Focus
              </div>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11.5px] text-white/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/5 pt-5 md:grid-cols-3">
              {metrics.map((m) => (
                <div key={m.label}>
                  <dt className="text-[10.5px] uppercase tracking-[0.18em] text-white/40">
                    {m.label}
                  </dt>
                  <dd
                    className="mt-1 font-display text-lg font-semibold tracking-tight md:text-xl"
                    style={{ color: accent }}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-2 flex items-center justify-between">
              <a
                href={href}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition group-hover:text-white"
              >
                Read case study
                <span
                  className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/[0.04] transition group-hover:translate-x-0.5 group-hover:bg-white/10"
                  aria-hidden
                >
                  →
                </span>
              </a>
              <span
                className="hidden text-[10.5px] uppercase tracking-[0.22em] md:inline"
                style={{ color: accent, opacity: 0.7 }}
              >
                ● Live in production
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative min-h-[340px] overflow-hidden border-t border-white/5 bg-ink-900/40 lg:min-h-[520px] lg:border-l lg:border-t-0">
            {visual}
          </div>
        </div>

        {/* hover halo */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 0 1px ${accent}40, 0 30px 80px -30px ${accent}55`,
            borderRadius: 24,
          }}
        />
      </div>
    </motion.article>
  );
}
