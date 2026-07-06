"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#work", label: "Work" },
  { href: "#specialty", label: "Specialty" },
  { href: "#contact", label: "Contact" },
];

export default function ResponsiveNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-wide">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-5 ${
            scrolled ? "glass-strong" : "glass"
          }`}
          aria-label="Primary"
        >
          <a
            href="#top"
            className="group inline-flex items-center gap-2.5"
            aria-label="Soojin Hwang — Home"
          >
            <Logo />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-semibold tracking-tight text-white">
                Soojin Hwang
              </span>
              <span className="mt-0.5 text-[10.5px] uppercase tracking-[0.18em] text-white/45">
                Senior Product Designer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-white/75 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:soojin.ux@gmail.com"
              className="btn-primary ml-2 !py-2 text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]" />
              Available
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-white transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] h-[1.5px] w-full bg-white transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="container-wide mt-2 md:hidden"
          >
            <div className="glass-strong rounded-2xl p-4">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-white/5 py-3 text-base text-white/90"
                    >
                      <span>{link.label}</span>
                      <span className="text-white/40">→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:soojin.ux@gmail.com"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full justify-center"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Let’s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/15 to-cyan-400/25">
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="16" cy="16" r="3" fill="#fff" />
        <circle
          cx="16"
          cy="16"
          r="9"
          stroke="#fff"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />
        <circle
          cx="16"
          cy="16"
          r="13.5"
          stroke="#fff"
          strokeOpacity="0.25"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <circle cx="28" cy="8" r="1.6" fill="#22D3EE" />
        <circle cx="6" cy="22" r="1.4" fill="#8B5CF6" />
        <circle cx="24" cy="26" r="1.2" fill="#FB7185" />
      </svg>
    </span>
  );
}
