import type { Config } from "tailwindcss";

/* ----------------------------------------------------------------------------
   Tailwind reads the design tokens defined in app/design-tokens.css.
   Class names here are unchanged (ink-950, accent-violet, font-display …),
   but their VALUES now come from CSS variables — so the token file is the
   one place to change the design system. Surfaces use `rgb(var(--x) / <a>)`
   so opacity modifiers like `bg-ink-900/40` keep working.
---------------------------------------------------------------------------- */
const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
        },
        accent: {
          violet: "var(--accent-violet)",
          indigo: "var(--accent-indigo)",
          blue: "var(--accent-blue)",
          cyan: "var(--accent-cyan)",
          mint: "var(--accent-mint)",
          rose: "var(--accent-rose)",
          amber: "var(--accent-amber)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        // Named type scale — mirrors app/design-tokens.css §2c
        "display-xl": ["var(--fs-display-xl)", { lineHeight: "var(--lh-display-xl)", letterSpacing: "var(--tracking-tightest)", fontWeight: "600" }],
        "display-lg": ["var(--fs-display-lg)", { lineHeight: "var(--lh-display-lg)", letterSpacing: "var(--tracking-tighter)", fontWeight: "600" }],
        "display-md": ["var(--fs-display-md)", { lineHeight: "var(--lh-display-md)", letterSpacing: "var(--tracking-tighter)", fontWeight: "600" }],
        "heading-lg": ["var(--fs-heading-lg)", { lineHeight: "var(--lh-heading-lg)", letterSpacing: "var(--tracking-tighter)", fontWeight: "600" }],
        "heading-md": ["var(--fs-heading-md)", { lineHeight: "var(--lh-heading-md)", letterSpacing: "var(--tracking-tight)", fontWeight: "600" }],
        "heading-sm": ["var(--fs-heading-sm)", { lineHeight: "var(--lh-heading-sm)", letterSpacing: "var(--tracking-tight)", fontWeight: "600" }],
        title: ["var(--fs-title)", { lineHeight: "var(--lh-title)", letterSpacing: "var(--tracking-tight)", fontWeight: "600" }],
        "body-lg": ["var(--fs-body-lg)", { lineHeight: "var(--lh-body-lg)" }],
        body: ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        "body-sm": ["var(--fs-body-sm)", { lineHeight: "var(--lh-body-sm)" }],
        caption: ["var(--fs-caption)", { lineHeight: "var(--lh-caption)" }],
        label: ["var(--fs-label)", { lineHeight: "var(--lh-label)", letterSpacing: "var(--tracking-wide)", fontWeight: "500" }],
      },
      letterSpacing: {
        // Custom names the site already uses (values unchanged). We intentionally
        // do NOT override Tailwind's built-in tight/wide/wider so existing
        // components keep their spacing. Use `tracking-label`/`tracking-eyebrow`
        // for uppercase labels going forward.
        tightest: "var(--tracking-tightest)",
        tighter2: "var(--tracking-tighter)",
        label: "var(--tracking-wide)", // 0.18em
        eyebrow: "var(--tracking-wider)", // 0.22em
      },
      borderRadius: {
        // New semantic aliases only — Tailwind's default rounded-sm…3xl/full are
        // left intact because components rely on them. Prefer these going forward.
        card: "var(--radius-xl)", // 24px — feature cards
        panel: "var(--radius-2xl)", // 32px — hero panels
        pill: "var(--radius-full)", // fully round — buttons, chips
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        glow: "var(--shadow-glow)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        standard: "var(--ease-standard)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },
      maxWidth: {
        wide: "var(--container-wide)",
        narrow: "var(--container-narrow)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(99,102,241,0.18), transparent 60%)",
        aurora:
          "conic-gradient(from 180deg at 50% 50%, #6366F1 0deg, #22D3EE 90deg, #8B5CF6 180deg, #FB7185 270deg, #6366F1 360deg)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.65" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3.6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        spinSlow: "spinSlow 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
