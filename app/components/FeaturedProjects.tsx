"use client";

import ProjectCard from "./ProjectCard";
import { AgentVisual, CoverageVisual, SaaSVisual } from "./ProjectVisuals";

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="relative py-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="container-wide">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="chip">Selected work</span>
            <h2
              id="work-heading"
              className="h-display mt-5 text-4xl font-semibold tracking-tightest text-white md:text-5xl"
            >
              Three systems where{" "}
              <span className="text-gradient">intelligence becomes interaction.</span>
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-white/55">
            From agentic conversation to consumer decision-making to enterprise AI
            platforms — each project is a study in scaling trust.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          <ProjectCard
            index="01"
            category="AI Agent · Multimodal · Scale"
            title="T-Mobile Magenta — multimodal AI agent"
            positioning="A unified agent across web, iOS, and Android serving millions, designed with an evaluation framework that took accuracy from 60% to 99%."
            description="Led end-to-end UX for a multimodal customer-care agent. Designed conversational patterns, voice + visual handoff, RAG-grounded reasoning, trust signals, and an internal eval framework so designers, PMs, and engineers could measure quality the same way."
            focus={[
              "Conversational UX",
              "Voice + vision",
              "RAG · Tool-use",
              "Trust signals",
              "Evaluation framework",
              "Cross-platform",
            ]}
            metrics={[
              { label: "Users", value: "Millions" },
              { label: "Accuracy", value: "60 → 99%" },
              { label: "Patents", value: "3 pending" },
            ]}
            accent="#A78BFA"
            visual={<AgentVisual />}
          />

          <ProjectCard
            reverse
            index="02"
            category="Consumer · Decision UX · Conversion"
            title="T-Mobile Coverage Map — confidence at the moment of decision"
            positioning="A consumer-facing coverage experience that turned an anxiety-inducing question into a confident purchase moment."
            description="Reframed coverage from a technical map into a decision tool: address-first input, confidence scoring, contextual comparison, and progressive disclosure. The result was faster decisions and a step-change in conversion."
            focus={[
              "Decision UX",
              "Map visualization",
              "Progressive disclosure",
              "Comprehension",
              "Conversion design",
            ]}
            metrics={[
              { label: "Conversion", value: "3×" },
              { label: "Decision speed", value: "−30%" },
              { label: "Coverage clarity", value: "+47%" },
            ]}
            accent="#FB7185"
            visual={<CoverageVisual />}
          />

          <ProjectCard
            index="03"
            category="Enterprise · 0 → 1 · AI Platform"
            title="Enterprise AI SaaS — a platform Samsung and Hyundai trusted"
            positioning="A 0→1 cloud platform that turned raw model capability into workflows enterprise researchers ran every day."
            description="Designed the product end-to-end: data pipelines, model workflows, analytics dashboards, explainability surfaces, and a scalable design system. Worked closely with researchers to make complex AI legible — and credible — to enterprise buyers."
            focus={[
              "0 → 1 platform",
              "AI workflows",
              "Explainability",
              "Analytics dashboards",
              "Design system",
              "Enterprise UX",
            ]}
            metrics={[
              { label: "Research efficiency", value: "76 → 91%" },
              { label: "Revenue growth", value: "+300%" },
              { label: "Adoption", value: "Samsung · Hyundai" },
            ]}
            accent="#F59E0B"
            visual={<SaaSVisual />}
          />
        </div>
      </div>
    </section>
  );
}
