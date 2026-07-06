"use client";

import { motion } from "framer-motion";
import { IkeaVisual, MetaVisual, WellBuyVisual } from "./ProjectVisuals";

const ITEMS = [
  {
    title: "IKEA · AI Configurator",
    blurb:
      "Generative product configuration that turned 24 SKUs into a million plausible rooms.",
    chips: ["Generative UI", "Retail AI", "Concept"],
    visual: <IkeaVisual />,
    accent: "#F59E0B",
  },
  {
    title: "Meta · Spatial / Mixed reality",
    blurb:
      "Layered spatial navigation where hand, gaze, and voice complete each other.",
    chips: ["Spatial UX", "Multimodal", "Mixed reality"],
    visual: <MetaVisual />,
    accent: "#A78BFA",
  },
  {
    title: "WellBuy · Marketplace",
    blurb:
      "A discovery experience for wellness consumers — clarity over noise, intent over algorithm.",
    chips: ["Marketplace", "Discovery", "Consumer"],
    visual: <WellBuyVisual />,
    accent: "#34D399",
  },
];

export default function SecondaryProjects() {
  return (
    <section
      className="relative py-24 md:py-32"
      aria-labelledby="more-heading"
    >
      <div className="container-wide">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="chip">More work</span>
            <h2
              id="more-heading"
              className="h-display mt-5 text-3xl font-semibold tracking-tightest text-white md:text-4xl"
            >
              Other explorations.
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-white/55">
            Concept work, spatial prototypes, and marketplace design — the
            outside-the-roadmap thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group relative overflow-hidden rounded-2xl glass-strong ring-soft"
            >
              <div className="relative h-56 overflow-hidden">{it.visual}</div>
              <div className="space-y-3 p-5">
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: it.accent }}
                  />
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {it.title}
                  </h3>
                </div>
                <p className="text-[13.5px] leading-relaxed text-white/60">
                  {it.blurb}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {it.chips.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10.5px] text-white/75"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 0 1px ${it.accent}40, 0 30px 60px -30px ${it.accent}55`,
                  borderRadius: 16,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
