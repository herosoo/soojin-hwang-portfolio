"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative overflow-hidden rounded-[28px] glass-strong ring-soft"
        >
          {/* Aurora */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-violet-500/30 blur-[80px]" />
            <div className="absolute -right-20 top-1/3 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-[80px]" />
            <div className="absolute left-1/2 bottom-0 h-60 w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[80px]" />
          </div>

          <div className="grid grid-cols-1 gap-10 p-8 md:p-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <span className="chip">Contact</span>
              <h2
                id="contact-heading"
                className="h-display mt-5 text-4xl font-semibold leading-[1.04] tracking-tightest text-white md:text-[56px]"
              >
                Let’s design the next{" "}
                <span className="text-gradient">intelligent experience.</span>
              </h2>
              <p className="mt-4 max-w-[52ch] text-[15px] text-white/65 md:text-base">
                Currently considering senior product design roles where AI is
                core to the product — agents, workflows, decision systems, and
                multimodal experiences at scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:soojin.ux@gmail.com"
                  className="btn-primary"
                >
                  Email Soojin
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="https://www.soojinhwang.com"
                  className="btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit portfolio
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Row
                label="Portfolio"
                value="www.soojinhwang.com"
                href="https://www.soojinhwang.com"
              />
              <Row
                label="Email"
                value="soojin.ux@gmail.com"
                href="mailto:soojin.ux@gmail.com"
              />
              <Row
                label="LinkedIn"
                value="linkedin.com/in/soojinhwang"
                href="https://www.linkedin.com/in/soojinhwang/"
              />
              <Row label="Based" value="United States · Open to relocation" />
              <Row label="Focus" value="AI · Agents · Systems · Trust" />
            </div>
          </div>

          <Marquee />
        </motion.div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:bg-white/[0.06]">
      <span className="text-[10.5px] uppercase tracking-[0.22em] text-white/45">
        {label}
      </span>
      <span className="text-right text-[14px] text-white/85">{value}</span>
    </div>
  );
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {inner}
      </a>
    );
  return inner;
}

function Marquee() {
  const items = [
    "Human-centered AI",
    "AI agents",
    "System-level UX",
    "Multimodal interaction",
    "Trustworthy AI",
    "Complex workflows",
    "Enterprise + consumer scale",
    "Evaluation frameworks",
    "Interaction design",
    "Visual craft",
  ];
  return (
    <div className="relative mt-4 overflow-hidden border-t border-white/5 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap px-6 text-[11.5px] uppercase tracking-[0.24em] text-white/45">
        {[...items, ...items].map((s, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-white/30" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
