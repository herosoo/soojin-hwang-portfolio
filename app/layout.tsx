import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soojin Hwang — Senior Product Designer · AI × Human Intuition",
  description:
    "Senior Product Designer crafting AI agents, complex workflows, and system-level experiences across consumer and enterprise products.",
  keywords: [
    "Soojin Hwang",
    "Senior Product Designer",
    "AI Product Design",
    "Human-Centered AI",
    "AI Agents",
    "Multimodal UX",
    "System-Level UX",
    "Enterprise SaaS",
    "T-Mobile",
    "Meta",
    "Samsung",
    "Hyundai",
  ],
  authors: [{ name: "Soojin Hwang" }],
  openGraph: {
    title: "Soojin Hwang — Senior Product Designer",
    description:
      "I design where AI meets human intuition—for everyone.",
    type: "website",
    url: "https://www.soojinhwang.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soojin Hwang — Senior Product Designer",
    description: "I design where AI meets human intuition—for everyone.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06070B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen overflow-x-hidden bg-ink-950 font-sans text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
