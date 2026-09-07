"use client";

import React from "react";

const skillGroups = [
  {
    category: "AI & LLM Orchestration",
    skills:
      "LangChain, LangGraph, RAG Pipelines, Qdrant Vector DB, Multi-Model Prompting (Gemini, LLaMA, DeepSeek, Qwen, Gemma), OpenAI API",
    note: "Primary focus — building hallucination-minimized systems, semantic search, and streaming multi-model pipelines.",
  },
  {
    category: "Core Backend & Data",
    skills:
      "Node.js, Express.js, MongoDB, PostgreSQL, MySQL, REST API Architecture, JWT Authentication, MVC Pattern, OOP",
    note: "High-concurrency API design, schema modeling, query optimization, and secure user session management.",
  },
  {
    category: "Web & Frontend Systems",
    skills:
      "JavaScript, TypeScript, React.js, Next.js (App Router), Tailwind CSS, Bootstrap",
    note: "Fullstack product integration, server-side rendering, and dynamic state management.",
  },
  {
    category: "Infrastructure & Engineering Tools",
    skills:
      "Docker, AWS, CI/CD Pipelines, GitHub Actions, Git, Postman, Vercel, Render, Agile / Scrum",
    note: "Containerization, automated build workflows, API testing, and continuous cloud deployment.",
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-6 w-full pt-4">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Technical Capabilities & Stack
        </h2>
        <span className="text-[11px] font-mono text-muted-foreground">Grouped by Core Strength</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-4 sm:p-5 rounded-lg border border-border bg-card/60 gap-3"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-foreground font-heading flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3C]"></span>
                {group.category}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/90 font-mono leading-relaxed">
                {group.skills}
              </p>
            </div>
            <p className="text-[11px] text-muted-foreground leading-normal border-t border-border/50 pt-2">
              {group.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
