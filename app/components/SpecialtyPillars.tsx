"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "AI product strategy",
    body:
      "Map model capability to user value. Define the smallest experience that earns trust, then scale it.",
    icon: "strategy",
    accent: "#A78BFA",
  },
  {
    title: "Conversational + multimodal UX",
    body:
      "Design dialogue, voice, and visual handoff so the right modality answers the right moment.",
    icon: "chat",
    accent: "#22D3EE",
  },
  {
    title: "System-level workflow design",
    body:
      "Architect end-to-end flows across data, decisions, and humans — not just screens.",
    icon: "flow",
    accent: "#34D399",
  },
  {
    title: "Human-centered AI evaluation",
    body:
      "Build evaluation frameworks designers can run. Make quality a team sport, not a model report.",
    icon: "eval",
    accent: "#F59E0B",
  },
  {
    title: "Enterprise design systems",
    body:
      "Scalable, accessible component libraries that survive years of model and product change.",
    icon: "grid",
    accent: "#FB7185",
  },
  {
    title: "Consumer-scale product design",
    body:
      "Decision experiences that read in under a second and convert at scale.",
    icon: "spark",
    accent: "#A5F3FC",
  },
  {
    title: "Rapid prototyping · vibe coding",
    body:
      "Code my own prototypes — React, motion, AI APIs — to pressure-test ideas before they ship.",
    icon: "code",
    accent: "#FDE68A",
  },
];

export default function SpecialtyPillars() {
  return (
    <section
      id="specialty"
      className="relative py-24 md:py-32"
      aria-labelledby="specialty-heading"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip">Specialty</span>
          <h2
            id="specialty-heading"
            className="h-display mt-5 text-4xl font-semibold tracking-tightest text-white md:text-5xl"
          >
            Designing AI that people can{" "}
            <span className="text-gradient">understand, trust, and use.</span>
          </h2>
          <p className="mt-4 text-white/60">
            Seven pillars that show up in every project I lead — across consumer
            products, enterprise platforms, and agentic systems.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl glass p-6 ring-soft transition hover:bg-white/[0.04] ${
                i === 6 ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl transition group-hover:opacity-70"
                style={{ background: p.accent }}
              />
              <div className="relative flex items-start gap-4">
                <Icon name={p.icon} color={p.accent} />
                <div className="flex-1">
                  <h3 className="text-[15.5px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/60">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Icon({ name, color }: { name: string; color: string }) {
  const common =
    "h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-white/[0.04] grid place-items-center";
  return (
    <span className={common} aria-hidden>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        {name === "strategy" && (
          <>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
          </>
        )}
        {name === "chat" && (
          <>
            <path d="M4 6h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-5 3v-3a3 3 0 0 1 0-6V9a3 3 0 0 1 0-3z" />
            <circle cx="9" cy="12" r="0.8" fill={color} />
            <circle cx="13" cy="12" r="0.8" fill={color} />
            <circle cx="17" cy="12" r="0.8" fill={color} />
          </>
        )}
        {name === "flow" && (
          <>
            <rect x="3" y="4" width="6" height="4" rx="1" />
            <rect x="15" y="10" width="6" height="4" rx="1" />
            <rect x="3" y="16" width="6" height="4" rx="1" />
            <path d="M9 6h3a2 2 0 0 1 2 2v0M14 12h1M9 18h3a2 2 0 0 0 2-2v0" />
          </>
        )}
        {name === "eval" && (
          <>
            <path d="M4 18h16M6 14l3-5 3 3 4-7 2 4" />
            <circle cx="9" cy="9" r="1" fill={color} />
            <circle cx="16" cy="5" r="1" fill={color} />
          </>
        )}
        {name === "grid" && (
          <>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
          </>
        )}
        {name === "spark" && (
          <>
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
            <circle cx="12" cy="12" r="2" />
          </>
        )}
        {name === "code" && (
          <>
            <polyline points="8 8 4 12 8 16" />
            <polyline points="16 8 20 12 16 16" />
            <path d="M14 5l-4 14" />
          </>
        )}
      </svg>
    </span>
  );
}
