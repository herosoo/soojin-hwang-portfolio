"use client";

import { motion } from "framer-motion";
import AIMapHero from "./AIMapHero";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 lg:pt-36"
      aria-label="Hero"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Copy column */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="chip mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
              Senior Product Designer · AI × Human Intuition
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
              className="h-display text-[44px] font-semibold leading-[1.02] tracking-tightest text-white md:text-[64px] lg:text-[72px]"
            >
              I design where{" "}
              <span className="text-gradient">AI meets human intuition</span>
              <span className="text-white/40">—for everyone.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
              className="mt-6 max-w-[58ch] text-[15.5px] leading-relaxed text-white/65 md:text-base"
            >
              I’m <span className="text-white">Soojin Hwang</span> — a senior
              product designer crafting AI agents, complex workflows, and
              system-level experiences across consumer and enterprise products.
              I turn model capability into user confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="btn-primary">
                See selected work
                <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-white/45"
              aria-label="Brands and contexts"
            >
              {["T-Mobile", "Meta XR", "Samsung", "Hyundai", "IKEA"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {b}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Map column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-2 ring-soft md:p-3">
              <div className="absolute inset-0 -z-10 bg-grid-fade" />
              <AIMapHero />
              <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-emerald-400" />
                Live · navigation map
              </div>
              <div className="pointer-events-none absolute right-4 top-4 hidden items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-white/55 backdrop-blur md:flex">
                Drag your cursor → parallax
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero subline / scroll cue */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <p className="max-w-[60ch] text-center text-sm text-white/55 md:text-left">
            <span className="text-white/85">From model capability to user confidence.</span>{" "}
            Designing AI agents, evaluation frameworks, and decision systems used at scale.
          </p>
          <a
            href="#story"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/55 hover:text-white"
          >
            Scroll the map
            <span className="scroll-hint inline-block">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
