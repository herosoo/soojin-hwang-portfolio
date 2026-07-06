"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Metric = {
  value: string;
  // numeric end value used for count-up; string used as fallback
  end?: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const METRICS: Metric[] = [
  { value: "Millions", label: "Users reached across consumer products" },
  { end: 3, suffix: "×", value: "3×", label: "Coverage map conversion lift" },
  {
    value: "60→99%",
    label: "AI agent accuracy, multi-quarter program",
  },
  { end: 3, value: "3", label: "Pending patents in AI interaction" },
  {
    value: "Samsung · Hyundai",
    label: "Enterprise AI platform adoption",
  },
];

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 900;
    function tick(t: number) {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function MetricStrip() {
  return (
    <section
      aria-label="Career impact metrics"
      className="relative border-y border-white/5 bg-white/[0.015] py-10"
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="flex flex-col gap-2"
            >
              <div className="font-display text-2xl font-semibold tracking-tighter2 text-white md:text-[28px]">
                {m.end !== undefined ? (
                  <CountUp to={m.end} suffix={m.suffix} prefix={m.prefix} />
                ) : (
                  <span className="text-gradient">{m.value}</span>
                )}
              </div>
              <div className="text-xs leading-snug text-white/55 md:text-[13px]">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
