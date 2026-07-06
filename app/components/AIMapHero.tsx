"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * AIMapHero
 *
 * An abstract "AI navigation map" rendered as an SVG canvas. A central
 * "Human Intuition × AI Systems" core is orbited by labeled domain nodes
 * (Multimodal Agents, Enterprise Workflows, Consumer-Scale Products,
 * Trust & Evaluation). The whole map drifts subtly on mouse parallax,
 * with animated connecting paths, traveling signals, and a soft aurora
 * field. Built with SVG + Framer Motion — no canvas/three.js dependency.
 */

type NodeDef = {
  id: string;
  label: string;
  sub: string;
  // unit-circle coordinates; converted to viewbox below
  x: number;
  y: number;
  color: string;
  size?: number;
};

const NODES: NodeDef[] = [
  {
    id: "intuition",
    label: "Human intuition",
    sub: "Trust · Clarity · Confidence",
    x: -0.62,
    y: -0.18,
    color: "#A5F3FC",
  },
  {
    id: "agents",
    label: "Multimodal agents",
    sub: "Voice · Vision · Text",
    x: 0.66,
    y: -0.34,
    color: "#A78BFA",
  },
  {
    id: "systems",
    label: "AI systems",
    sub: "RAG · Models · Tools",
    x: 0.72,
    y: 0.22,
    color: "#22D3EE",
  },
  {
    id: "enterprise",
    label: "Enterprise workflows",
    sub: "Data · Decisions · Scale",
    x: -0.58,
    y: 0.46,
    color: "#F59E0B",
  },
  {
    id: "consumer",
    label: "Consumer scale",
    sub: "Conversion · Comprehension",
    x: 0.18,
    y: 0.68,
    color: "#FB7185",
  },
  {
    id: "trust",
    label: "Trust & evaluation",
    sub: "Eval frameworks · Safety",
    x: -0.04,
    y: -0.72,
    color: "#34D399",
  },
];

const VB = { w: 1200, h: 760 };
const CX = VB.w / 2;
const CY = VB.h / 2 + 10;
const RX = VB.w / 2 - 90; // horizontal radius
const RY = VB.h / 2 - 80; // vertical radius

function toVB(n: { x: number; y: number }) {
  return { x: CX + n.x * RX, y: CY + n.y * RY };
}

export default function AIMapHero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    if (reduce) return;
    const el = wrapRef.current;
    if (!el) return;
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = nx * 24; // px max
      targetY = ny * 18;
    }
    function onLeave() {
      targetX = 0;
      targetY = 0;
    }
    function tick() {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      setParallax({ x: curX, y: curY });
      raf = requestAnimationFrame(tick);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  const positioned = NODES.map((n) => ({ ...n, ...toVB(n) }));

  // Build "constellation" edges: every node connects to core, plus a few cross edges
  const coreEdges = positioned.map((n) => ({
    from: { x: CX, y: CY },
    to: { x: n.x, y: n.y },
    color: n.color,
    id: `core-${n.id}`,
  }));
  const crossEdges = [
    ["intuition", "agents"],
    ["agents", "systems"],
    ["systems", "consumer"],
    ["enterprise", "consumer"],
    ["trust", "agents"],
    ["trust", "enterprise"],
  ].map(([a, b], i) => {
    const A = positioned.find((p) => p.id === a)!;
    const B = positioned.find((p) => p.id === b)!;
    return {
      from: { x: A.x, y: A.y },
      to: { x: B.x, y: B.y },
      color: A.color,
      id: `cross-${i}`,
    };
  });

  return (
    <div
      ref={wrapRef}
      className="relative isolate aspect-[1200/760] w-full select-none"
      role="img"
      aria-label="Interactive map of Soojin Hwang's AI design practice — a central core of human intuition and AI systems connected to multimodal agents, enterprise workflows, consumer-scale products, and trust and evaluation."
    >
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-aurora opacity-[0.10] blur-3xl animate-spinSlow" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[80px]" />
      </div>

      <motion.svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="h-full w-full"
        style={{
          x: parallax.x,
          y: parallax.y,
        }}
      >
        <defs>
          {/* Subtle grid */}
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="vignette" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(6,7,11,1)" />
          </radialGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#A5B4FC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>
          {positioned.map((n) => (
            <radialGradient
              id={`g-${n.id}`}
              key={`g-${n.id}`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor={n.color} stopOpacity="0.95" />
              <stop offset="60%" stopColor={n.color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={n.color} stopOpacity="0" />
            </radialGradient>
          ))}
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>
        </defs>

        <rect width={VB.w} height={VB.h} fill="url(#grid)" />

        {/* Soft orbit rings */}
        {[160, 260, 360].map((r, i) => (
          <ellipse
            key={r}
            cx={CX}
            cy={CY}
            rx={r * 1.35}
            ry={r * 0.92}
            fill="none"
            stroke={`rgba(255,255,255,${0.05 - i * 0.012})`}
            strokeDasharray={i === 1 ? "2 6" : undefined}
            strokeWidth={1}
          />
        ))}

        {/* Cross-edges (background lattice) */}
        <g opacity={0.55}>
          {crossEdges.map((e) => (
            <line
              key={e.id}
              x1={e.from.x}
              y1={e.from.y}
              x2={e.to.x}
              y2={e.to.y}
              stroke={e.color}
              strokeOpacity={0.18}
              strokeWidth={1}
            />
          ))}
        </g>

        {/* Core edges */}
        <g>
          {coreEdges.map((e, idx) => {
            const active =
              hover === null || hover === e.id.replace("core-", "");
            return (
              <g key={e.id} opacity={active ? 1 : 0.25}>
                <line
                  x1={e.from.x}
                  y1={e.from.y}
                  x2={e.to.x}
                  y2={e.to.y}
                  stroke={e.color}
                  strokeOpacity={0.32}
                  strokeWidth={1.1}
                />
                {!reduce && (
                  <SignalDot
                    x1={e.from.x}
                    y1={e.from.y}
                    x2={e.to.x}
                    y2={e.to.y}
                    color={e.color}
                    delay={(idx * 0.62) % 3}
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* Core */}
        <g transform={`translate(${CX} ${CY})`}>
          <circle r={130} fill="url(#coreGlow)" />
          <circle r={42} fill="#0B0E18" stroke="rgba(255,255,255,0.25)" />
          <circle
            r={56}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeDasharray="3 5"
          >
            {!reduce && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0"
                to="360"
                dur="40s"
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle r={6} fill="#fff" />
          <text
            y={-2}
            textAnchor="middle"
            fontSize="11"
            fontWeight={600}
            fill="rgba(255,255,255,0.85)"
            letterSpacing="1.4"
            transform="translate(0,82)"
          >
            HUMAN × AI CORE
          </text>
          <text
            textAnchor="middle"
            fontSize="11"
            fill="rgba(255,255,255,0.45)"
            transform="translate(0,100)"
          >
            Where intelligence becomes interaction
          </text>
        </g>

        {/* Nodes */}
        {positioned.map((n) => {
          const size = n.size ?? 22;
          const isHover = hover === n.id;
          return (
            <g
              key={n.id}
              transform={`translate(${n.x} ${n.y})`}
              onMouseEnter={() => setHover(n.id)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
            >
              <circle r={size + 36} fill={`url(#g-${n.id})`} opacity={0.55} />
              <circle
                r={size}
                fill="#0B0E18"
                stroke={n.color}
                strokeOpacity={isHover ? 0.95 : 0.55}
                strokeWidth={1.4}
              />
              <circle r={5} fill={n.color} />
              {!reduce && (
                <circle
                  r={size + 4}
                  fill="none"
                  stroke={n.color}
                  strokeOpacity={0.5}
                >
                  <animate
                    attributeName="r"
                    values={`${size + 2};${size + 14};${size + 2}`}
                    dur="3.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.45;0;0.45"
                    dur="3.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <g transform={`translate(${n.x > CX ? size + 14 : -(size + 14)}, 4)`}>
                <text
                  textAnchor={n.x > CX ? "start" : "end"}
                  fontSize="13"
                  fontWeight={600}
                  fill="rgba(255,255,255,0.92)"
                >
                  {n.label}
                </text>
                <text
                  y={16}
                  textAnchor={n.x > CX ? "start" : "end"}
                  fontSize="11"
                  fill="rgba(255,255,255,0.5)"
                >
                  {n.sub}
                </text>
              </g>
            </g>
          );
        })}

        {/* Floating signal chips */}
        <FloatChip x={170} y={120} label="EVAL · 99%" color="#34D399" />
        <FloatChip x={VB.w - 230} y={140} label="RAG · MULTIMODAL" color="#22D3EE" />
        <FloatChip x={120} y={VB.h - 110} label="0→1 · ENTERPRISE" color="#F59E0B" />
        <FloatChip x={VB.w - 250} y={VB.h - 90} label="3× CONVERSION" color="#FB7185" />

        <rect width={VB.w} height={VB.h} fill="url(#vignette)" pointerEvents="none" />
      </motion.svg>

      {/* Bottom legend */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 text-[10.5px] uppercase tracking-[0.18em] text-white/40">
        <LegendDot color="#A5F3FC" label="Intuition" />
        <LegendDot color="#A78BFA" label="Agents" />
        <LegendDot color="#22D3EE" label="Systems" />
        <LegendDot color="#F59E0B" label="Enterprise" />
        <LegendDot color="#FB7185" label="Consumer" />
        <LegendDot color="#34D399" label="Trust" />
      </div>
    </div>
  );
}

function SignalDot({
  x1,
  y1,
  x2,
  y2,
  color,
  delay = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  delay?: number;
}) {
  return (
    <circle r={2.4} fill={color} opacity={0.9}>
      <animate
        attributeName="cx"
        values={`${x1};${x2}`}
        dur="4.2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values={`${y1};${y2}`}
        dur="4.2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="4.2s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

function FloatChip({
  x,
  y,
  label,
  color,
}: {
  x: number;
  y: number;
  label: string;
  color: string;
}) {
  const w = label.length * 6.6 + 24;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x={-w / 2}
        y={-12}
        width={w}
        height={24}
        rx={12}
        fill="rgba(11,14,24,0.85)"
        stroke="rgba(255,255,255,0.1)"
      />
      <circle cx={-w / 2 + 12} cy={0} r={3.5} fill={color} />
      <text
        x={-w / 2 + 22}
        y={3.5}
        fontSize="10"
        fontWeight={600}
        fill="rgba(255,255,255,0.85)"
        letterSpacing="1.2"
      >
        {label}
      </text>
    </g>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 8px 1px ${color}66` }}
      />
      {label}
    </span>
  );
}
