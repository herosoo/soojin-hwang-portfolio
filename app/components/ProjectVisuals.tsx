"use client";

/**
 * Custom-coded project preview visuals.
 * Each visual is an SVG / DOM composition designed to evoke the project's
 * domain (agent chat, coverage map, AI platform). No raster images.
 */

import { motion, useReducedMotion } from "framer-motion";

/* ----------------------------- T-Mobile Agent ---------------------------- */
export function AgentVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <BackdropMesh tones={["from-fuchsia-500/25", "via-violet-500/10", "to-cyan-400/20"]} />
      <div className="absolute inset-0 grid place-items-center p-6">
        <div className="glass-strong w-[min(360px,90%)] rounded-2xl p-3 ring-soft">
          {/* Status bar */}
          <div className="flex items-center justify-between px-1 pb-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-500 text-[10px] font-bold">
                T
              </span>
              <div className="leading-tight">
                <div className="text-[12.5px] font-semibold">Magenta Agent</div>
                <div className="text-[10px] text-white/45">
                  Voice · Vision · Text
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5 text-[9.5px] uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              99% acc
            </span>
          </div>

          {/* Bubbles */}
          <ul className="space-y-2">
            <li className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-md bg-white text-[12px] text-ink-900 shadow-lg">
              <span className="block px-3 py-2">
                Why is my plan charge higher this month?
              </span>
            </li>
            <li className="w-fit max-w-[88%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] text-white/90">
              <div className="mb-1.5 flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.16em] text-violet-300">
                <span className="h-1 w-1 rounded-full bg-violet-300" />
                Reasoning · RAG · Eval
              </div>
              You added an international day pass on May 12. Want me to refund
              it or set a guardrail for next month?
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Refund $10", "Add guardrail", "Show breakdown"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/80"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </li>
            <li className="w-fit max-w-[60%] rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] text-white/90">
              <div className="flex items-end gap-1">
                {[3, 6, 9, 7, 5, 4, 7, 11, 8, 5].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0.4 }}
                    animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.4,
                      delay: i * 0.08,
                    }}
                    className="block w-[3px] origin-bottom rounded-full bg-gradient-to-t from-fuchsia-400 to-cyan-300"
                    style={{ height: h * 1.2 + 4 }}
                  />
                ))}
                <span className="ml-1 text-[10px] text-white/55">
                  voice · streaming
                </span>
              </div>
            </li>
          </ul>

          {/* Composer */}
          <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="text-[12px] text-white/45">
              Ask anything · upload screenshot
            </span>
            <span className="ml-auto h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
          </div>
        </div>
      </div>

      {/* Floating eval card */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute right-4 top-6 hidden md:block"
      >
        <EvalCard />
      </motion.div>
    </div>
  );
}

function EvalCard() {
  return (
    <div className="glass-strong rounded-xl p-3 ring-soft">
      <div className="flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.18em] text-white/55">
        <span>Eval framework</span>
        <span className="text-emerald-300">+39 pts</span>
      </div>
      <div className="mt-2 h-1.5 w-44 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-white/45">
        <span>60% baseline</span>
        <span>99% shipped</span>
      </div>
    </div>
  );
}

/* ------------------------- T-Mobile Coverage Map ------------------------- */
export function CoverageVisual() {
  const reduce = useReducedMotion();
  // hex grid params
  const cols = 14;
  const rows = 8;
  const r = 14;
  const w = r * Math.sqrt(3);
  const h = r * 1.5;
  // deterministic pseudo-noise so SSR/CSR markup matches (no Math.random)
  const noise = (x: number, y: number) =>
    ((Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1 + 1) % 1;
  const cells: { x: number; y: number; v: number }[] = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cx = x * w + (y % 2 ? w / 2 : 0) + r;
      const cy = y * h + r;
      // pseudo "signal" field
      const dx = cx - 130;
      const dy = cy - 70;
      const d = Math.sqrt(dx * dx + dy * dy);
      const v = Math.max(0, 1 - d / 180) + (noise(x, y) * 0.18 - 0.06);
      cells.push({ x: cx, y: cy, v: Math.min(1, Math.max(0, v)) });
    }
  }
  function color(v: number) {
    if (v > 0.78) return "#FB7185";
    if (v > 0.6) return "#F472B6";
    if (v > 0.42) return "#A78BFA";
    if (v > 0.24) return "#60A5FA";
    return "#0F172A";
  }
  return (
    <div className="relative h-full w-full">
      <BackdropMesh tones={["from-rose-500/25", "via-fuchsia-500/10", "to-indigo-500/20"]} />
      <div className="absolute inset-0 p-6">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 ring-soft">
          <svg viewBox={`0 0 ${cols * w + r} ${rows * h + r}`} className="h-full w-full">
            <defs>
              <radialGradient id="coverGlow" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="rgba(251,113,133,0.35)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#coverGlow)" />
            {cells.map((c, i) => (
              <polygon
                key={i}
                points={hexPoints(c.x, c.y, r - 1)}
                fill={color(c.v)}
                fillOpacity={0.18 + c.v * 0.75}
                stroke="rgba(255,255,255,0.04)"
              />
            ))}
            {/* pulse rings at hotspot */}
            {!reduce &&
              [0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={130}
                  cy={70}
                  r={20}
                  fill="none"
                  stroke="rgba(251,113,133,0.6)"
                >
                  <animate
                    attributeName="r"
                    values="20;60"
                    dur="3s"
                    begin={`${i * 1}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.6;0"
                    dur="3s"
                    begin={`${i * 1}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            <circle cx={130} cy={70} r={4} fill="#fff" />
          </svg>

          {/* HUD */}
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            5G · UltraCapacity
          </div>
          <div className="absolute bottom-3 right-3 glass-strong inline-flex flex-col gap-1 rounded-xl px-3 py-2 text-[11px]">
            <span className="text-white/55">Decision confidence</span>
            <span className="text-base font-semibold text-white">
              94<span className="text-white/55">%</span>
            </span>
            <span className="text-[10px] text-emerald-300">3× conversion</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(" ");
}

/* ------------------------- Enterprise AI SaaS ---------------------------- */
export function SaaSVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full">
      <BackdropMesh tones={["from-amber-500/20", "via-emerald-500/10", "to-indigo-500/20"]} />
      <div className="absolute inset-0 p-6">
        <div className="relative grid h-full w-full grid-cols-12 grid-rows-6 gap-3 rounded-2xl border border-white/10 bg-ink-900/60 p-3 ring-soft">
          {/* Sidebar */}
          <div className="col-span-3 row-span-6 flex flex-col gap-2 rounded-xl bg-white/[0.025] p-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
              Models
            </div>
            {["Vision · v3", "Forecast · v2", "RAG · core", "Eval · pro"].map(
              (m, i) => (
                <div
                  key={m}
                  className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[11px] ${
                    i === 0 ? "bg-white/10 text-white" : "text-white/70"
                  }`}
                >
                  <span>{m}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 0
                        ? "bg-emerald-400"
                        : i === 1
                        ? "bg-amber-400"
                        : "bg-white/30"
                    }`}
                  />
                </div>
              )
            )}
            <div className="mt-auto text-[10px] uppercase tracking-[0.18em] text-white/45">
              Tenants
            </div>
            <div className="flex gap-1.5">
              <Pill>Samsung</Pill>
              <Pill>Hyundai</Pill>
            </div>
          </div>

          {/* Main chart */}
          <div className="col-span-9 row-span-4 relative overflow-hidden rounded-xl bg-white/[0.025] p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Research efficiency
                </div>
                <div className="font-display text-2xl font-semibold tracking-tight text-white">
                  91<span className="text-white/55">%</span>
                  <span className="ml-2 text-[11px] font-medium text-emerald-300">
                    +15 from 76%
                  </span>
                </div>
              </div>
              <div className="flex gap-1.5">
                {["1D", "1W", "1M", "QTR"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-md px-2 py-0.5 text-[10px] ${
                      i === 2
                        ? "bg-white text-ink-950"
                        : "text-white/55 ring-1 ring-white/10"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 400 140" className="mt-3 h-[calc(100%-52px)] w-full">
              <defs>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* grid */}
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1="0"
                  x2="400"
                  y1={i * 35 + 10}
                  y2={i * 35 + 10}
                  stroke="rgba(255,255,255,0.06)"
                />
              ))}
              <path
                d="M0,110 C30,100 60,95 90,85 S150,55 180,60 240,80 270,55 330,25 400,30 L400,140 L0,140 Z"
                fill="url(#area)"
              />
              <path
                d="M0,110 C30,100 60,95 90,85 S150,55 180,60 240,80 270,55 330,25 400,30"
                stroke="#34D399"
                strokeWidth="2"
                fill="none"
              />
              {!reduce && (
                <circle r="3.5" fill="#fff">
                  <animateMotion
                    dur="6s"
                    repeatCount="indefinite"
                    path="M0,110 C30,100 60,95 90,85 S150,55 180,60 240,80 270,55 330,25 400,30"
                  />
                </circle>
              )}
            </svg>
          </div>

          {/* KPI cards */}
          <div className="col-span-9 row-span-2 grid grid-cols-3 gap-3">
            <Kpi label="Revenue" value="+300%" tone="text-emerald-300" />
            <Kpi label="Time-to-insight" value="−62%" tone="text-cyan-300" />
            <Kpi label="Eval coverage" value="94%" tone="text-amber-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/80">
      {children}
    </span>
  );
}

function Kpi({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-white/[0.025] p-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className={`font-display text-lg font-semibold ${tone}`}>{value}</div>
    </div>
  );
}

/* ------------------------------ Backdrop --------------------------------- */
export function BackdropMesh({ tones }: { tones: string[] }) {
  return (
    <div
      className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${tones.join(
        " "
      )} opacity-90`}
    >
      <div className="absolute inset-0 rounded-3xl [mask-image:radial-gradient(60%_60%_at_50%_50%,#000_40%,transparent_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>
    </div>
  );
}

/* ---------------------------- Secondary visuals -------------------------- */
export function IkeaVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackdropMesh tones={["from-amber-500/20", "via-yellow-400/10", "to-blue-500/20"]} />
      <div className="absolute inset-0 grid place-items-center p-5">
        <div className="glass-strong w-full max-w-[300px] rounded-2xl p-3 ring-soft">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/55">
            <span>AI Configurator</span>
            <span className="text-amber-300">v 0.4</span>
          </div>
          <div className="relative my-3 grid h-32 place-items-center rounded-xl bg-gradient-to-br from-blue-500/30 to-amber-400/30">
            <svg viewBox="0 0 100 60" className="h-20">
              <rect x="10" y="20" width="80" height="28" rx="4" fill="#FDE68A" />
              <rect x="14" y="48" width="6" height="8" fill="#1E3A8A" />
              <rect x="80" y="48" width="6" height="8" fill="#1E3A8A" />
              <rect x="10" y="20" width="80" height="6" fill="#1E3A8A" />
            </svg>
            <span className="absolute bottom-2 right-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white/80">
              SÖDERHAMN · 3-seat
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Linen", "Velvet", "Boucle", "Leather"].map((m, i) => (
              <span
                key={m}
                className={`rounded-full border px-2 py-0.5 text-[10px] ${
                  i === 1
                    ? "border-amber-300/40 bg-amber-300/10 text-amber-200"
                    : "border-white/10 bg-white/[0.04] text-white/70"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px]">
            <span className="text-white/55">Generated 24 variants</span>
            <span className="font-semibold text-white">$899</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetaVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackdropMesh tones={["from-indigo-500/30", "via-violet-500/15", "to-cyan-400/25"]} />
      <div className="absolute inset-0 grid place-items-center p-5 [perspective:900px]">
        <div className="relative h-44 w-72 [transform-style:preserve-3d]">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={reduce ? undefined : { rotateY: [0, 8, -4, 0] }}
              transition={{ duration: 9, repeat: Infinity, delay: i * 0.4 }}
              className="absolute inset-0 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur"
              style={{ transform: `translateZ(${i * 18}px) translateY(${i * -8}px)` }}
            >
              <div className="flex items-center justify-between p-3 text-[10px] uppercase tracking-[0.18em] text-white/70">
                <span>Spatial · layer {i + 1}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </div>
              {i === 3 && (
                <div className="px-3">
                  <div className="text-sm font-semibold text-white">
                    Hand · gaze · voice
                  </div>
                  <div className="mt-1 text-[11px] text-white/55">
                    Multimodal scene navigation
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WellBuyVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <BackdropMesh tones={["from-emerald-500/20", "via-teal-400/10", "to-cyan-500/20"]} />
      <div className="absolute inset-0 grid place-items-center p-5">
        <div className="grid w-full max-w-[320px] grid-cols-2 gap-2">
          {[
            { t: "Organic kit", p: "$24" },
            { t: "Cold brew", p: "$9" },
            { t: "Reishi blend", p: "$18" },
            { t: "Daily greens", p: "$12" },
          ].map((c, i) => (
            <div
              key={c.t}
              className="glass-strong overflow-hidden rounded-xl p-2 ring-soft"
            >
              <div
                className="h-16 w-full rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#34D399", "#22D3EE", "#A78BFA", "#FDE68A"][i]
                  }, rgba(255,255,255,0.05))`,
                }}
              />
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] text-white/85">{c.t}</span>
                <span className="text-[11px] font-semibold text-white">
                  {c.p}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
