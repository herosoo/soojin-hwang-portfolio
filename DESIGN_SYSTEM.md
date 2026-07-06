# Design System — Soojin Hwang Portfolio

A dark, editorial system tuned for AI/product-design work. The look borrows
**Apple's Pro depth** (deep near-black surfaces, big confident display type,
soft glows) and **Brandon Hook's restraint** (generous space, monospace
accents, quiet UI that lets the work speak).

> **Two files, one rule.** Every value lives in one place and you review it in one place.
>
> | I want to… | Go to |
> |---|---|
> | **Change** a value | [`app/design-tokens.css`](app/design-tokens.css) — the single source of truth |
> | **Review** the whole system | `/style-guide` in the browser (run `npm run dev`) |
> | **Understand** the rules | this file |

Changing a token in `design-tokens.css` updates the whole site — Tailwind reads
those variables, so class names never change.

---

## 1. Color

Permanent **dark mode** (`color-scheme: dark`). Three roles:

### Surfaces — the near-black "ink" ramp
Used via Tailwind `bg-ink-950 … bg-ink-500` (opacity modifiers like `bg-ink-900/40` work).

| Token | Hex | Use |
|---|---|---|
| `--ink-950` | `#06070B` | Page background |
| `--ink-900` | `#0A0C12` | Raised surface / nav |
| `--ink-800` | `#10131C` | Card base |
| `--ink-700` | `#161A26` | Card hover / inset |
| `--ink-600` | `#1F2433` | Divider surface |
| `--ink-500` | `#2A3147` | Muted / disabled |

> Stored as **RGB channels** (`6 7 11`) not hex, so opacity modifiers keep working.

### Text — layered white for hierarchy
| Token | Hex | Use | Tailwind equivalent |
|---|---|---|---|
| `--text-100` | `#F4F5FB` | Headings | `text-white` |
| `--text-300` | `#C8CCD9` | Body copy | `text-white/80` |
| `--text-500` | `#8A90A3` | Secondary / captions | `text-white/55` |
| `--text-700` | `#4A5063` | Faint / disabled | `text-white/35` |

### Accents — highlights & per-project color
`violet #8B5CF6` · `indigo #6366F1` · `blue #3B82F6` · `cyan #22D3EE` · `mint #34D399` · `rose #FB7185` · `amber #F59E0B`

Used via Tailwind `text-accent-violet` etc., or passed as a raw hex prop to project cards.
**Semantic aliases** (`--color-primary`, `--color-focus`, `--color-success`) point at accents — re-point them to re-theme in one line.

---

## 2. Typography

| Family | Stack | Use |
|---|---|---|
| `--font-display` | Söhne → Inter → system | Headlines (`font-display`) |
| `--font-sans` | Inter → system | Body (`font-sans`) |
| `--font-mono` | JetBrains Mono → system | Code, labels (`font-mono`) |

**Weights:** 400 Regular · 500 Medium · 600 Semibold (default for display) · 700 Bold.

### Type scale
Each step is a Tailwind class (`text-display-xl` … `text-label`) carrying its own size, line-height, tracking, and weight.

| Class | px | Line-height | Tracking | Use |
|---|---|---|---|---|
| `text-display-xl` | 72 | 1.02 | −0.045em | Hero headline |
| `text-display-lg` | 60 | 1.03 | −0.035em | Section hero |
| `text-display-md` | 48 | 1.05 | −0.035em | Large heading |
| `text-heading-lg` | 40 | 1.05 | −0.035em | Project title |
| `text-heading-md` | 32 | 1.10 | −0.020em | Subsection |
| `text-heading-sm` | 24 | 1.20 | −0.020em | Card title |
| `text-title` | 20 | 1.30 | −0.020em | Lead-in |
| `text-body-lg` | 18 | 1.60 | — | Intro paragraph |
| `text-body` | 16 | 1.60 | — | Default body |
| `text-body-sm` | 15 | 1.60 | — | Dense body |
| `text-caption` | 13 | 1.50 | — | Meta / footnote |
| `text-label` | 11 | 1.40 | 0.18em | Uppercase eyebrow |

**Tracking rule:** big display type goes *tight* (negative); small uppercase labels go *wide* (`tracking-label` 0.18em, `tracking-eyebrow` 0.22em).

---

## 3. Spacing & layout

- **4px base grid** (`--space-1` = 4px … `--space-24` = 96px), identical to Tailwind's scale — use `p-4`, `gap-6`, `mt-10`, etc.
- **Section rhythm:** `--section-y` 112px desktop / `--section-y-sm` 72px mobile of top padding between page sections.
- **Containers:** `.container-wide` (max 1440px) for full sections, `.container-narrow` (max 1080px) for reading width.
- **Gutters:** 24 → 40 → 56px side padding across mobile → tablet → desktop.

---

## 4. Radius, elevation, border

**Radius** — cards `rounded-card` (24px), hero panels `rounded-panel` (32px), buttons/chips `rounded-pill`. (Tailwind's default `rounded-md/lg/xl/2xl/3xl` remain available.)

**Elevation** — depth comes from soft shadows + translucent glass, *not* hard borders:
- `.glass` / `.glass-strong` — blurred translucent surfaces
- `.ring-soft` / `shadow-soft` — the standard card lift
- `shadow-glow` — colored halo (set `--glow` to an accent)

**Border** — hairlines are translucent white: `--border-subtle` 6% · `--border-default` 10% · `--border-strong` 14% (i.e. `border-white/5`, `/10`, `/15`).

---

## 5. Motion

One house easing, three durations — all respect `prefers-reduced-motion`.

| Token | Value | Use |
|---|---|---|
| `--ease-out-expo` | `cubic-bezier(.2,.8,.2,1)` | House easing (`ease-out-expo`) |
| `--duration-fast` | 0.3s | Hovers, taps (`duration-fast`) |
| `--duration-base` | 0.6s | Entrances (`duration-base`) |
| `--duration-slow` | 0.9s | Hero reveals (`duration-slow`) |

---

## 6. Component primitives

Defined in [`app/globals.css`](app/globals.css) — reuse these instead of ad-hoc styling:

`.btn-primary` · `.btn-ghost` · `.chip` · `.glass` / `.glass-strong` · `.ring-soft` · `.hairline` · `.text-gradient` / `.text-gradient-warm` · `.container-wide` / `.container-narrow`

---

## Change cookbook

| Goal | Do this |
|---|---|
| **Shift the whole background darker/lighter** | Edit `--ink-950` (and neighbours) in §1 of `design-tokens.css`. |
| **Re-theme the primary accent** | Change `--color-primary` to another accent var (e.g. `var(--accent-cyan)`). |
| **Change the heading font** | Edit `--font-display` (keep the fallback stack). |
| **Make all display type bigger/smaller** | Edit the `--fs-display-*` values in §2c. |
| **Loosen/tighten page spacing** | Edit `--section-y` (section rhythm) or use different `p-*`/`gap-*` steps. |
| **Round cards more/less** | Edit `--radius-xl` (drives `rounded-card`). |
| **Speed up/slow down animations** | Edit `--duration-*` in §7. |
| **Add a new token** | Add the variable in `design-tokens.css`, then expose it in `tailwind.config.ts` if you want a utility class, and add a swatch to `app/style-guide/page.tsx`. |

> After any change, open **`/style-guide`** to review the result before shipping.
