"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    eyebrow: "01 · Origin",
    title: "Visual communication craft",
    body:
      "Trained in visual systems and typography. Learned the discipline of restraint — what to remove, what to amplify.",
    tag: "Form · Hierarchy · Restraint",
    color: "#A5F3FC",
  },
  {
    eyebrow: "02 · Intersection",
    title: "HCI + AI education",
    body:
      "Studied human–computer interaction with a focus on machine intelligence. Learned to design for systems that learn.",
    tag: "HCI · Cognition · Models",
    color: "#A78BFA",
  },
  {
    eyebrow: "03 · 0 → 1",
    title: "Enterprise AI SaaS",
    body:
      "Shipped a cloud AI platform from zero. Translated raw model capability into workflows Samsung and Hyundai trusted.",
    tag: "Platform · Data · Trust",
    color: "#F59E0B",
  },
  {
    eyebrow: "04 · Spatial",
    title: "Meta · mixed reality",
    body:
      "Designed spatial interactions where intent precedes input. Layered depth as a navigation primitive.",
    tag: "Spatial · Depth · Intent",
    color: "#22D3EE",
  },
  {
    eyebrow: "05 · Agentic",
    title: "T-Mobile AI agents",
    body:
      "Led multimodal agent UX across web, iOS, and Android. Pushed accuracy from 60% to 99% with evaluation in the loop.",
    tag: "Agent · Eval · Multimodal",
    color: "#34D399",
  },
  {
    eyebrow: "06 · Scale",
    title: "Consumer-scale product",
    body:
      "Designed decision experiences serving millions. Coverage Map: 3× conversion through clarity and confidence.",
    tag: "Decision · Scale · Conversion",
    color: "#FB7185",
  },
];

export default function ScrollStorySection() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative py-24 md:py-32"
      aria-labelledby="story-heading"
    >
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip">Story</span>
          <h2
            id="story-heading"
            className="h-display mt-5 text-4xl font-semibold tracking-tightest text-white md:text-5xl"
          >
            From visual craft to{" "}
            <span className="text-gradient">AI-powered experiences.</span>
          </h2>
          <p className="mt-4 text-white/60">
            A constellation of moves — each one a step deeper into systems that
            think, decide, and collaborate with people.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Spine */}
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          {!reduce && (
            <motion.div
              style={{ height: lineHeight }}
              className="pointer-events-none absolute left-4 top-0 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-rose-400 md:left-1/2 md:-translate-x-1/2"
            />
          )}

          <ol className="space-y-12 md:space-y-16">
            {STEPS.map((s, i) => {
              const sideRight = i % 2 === 1;
              return (
                <li key={s.title} className="relative">
                  {/* Node */}
                  <div
                    className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2"
                    aria-hidden
                  >
                    <span
                      className="relative grid h-3.5 w-3.5 place-items-center rounded-full"
                      style={{ background: s.color, boxShadow: `0 0 14px 3px ${s.color}55` }}
                    >
                      <span className="absolute inset-0 animate-pulseSoft rounded-full" style={{ background: s.color, opacity: 0.6 }} />
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    className={`pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                      sideRight ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div
                      className={`md:px-8 ${
                        sideRight ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/45">
                        {s.eyebrow}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-[44ch] text-sm text-white/60 md:text-[15px]">
                        {s.body}
                      </p>
                    </div>
                    <div className={`mt-4 md:mt-0 md:px-8`}>
                      <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em]" style={{ color: s.color }}>
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: s.color }}
                        />
                        {s.tag}
                      </div>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
