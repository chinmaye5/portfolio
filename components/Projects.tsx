"use client";

import Link from "next/link";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface FlagshipProject {
  title: string;
  tagline: string;
  architecture: string;
  decision: string;
  link: string;
  code: string;
  tech: string[];
}

interface SecondaryProject {
  title: string;
  description: string;
  link: string;
  code: string;
  tech: string;
}

const flagshipProjects: FlagshipProject[] = [
  {
    title: "Converso",
    tagline: "Multi-tenant AI customer support SaaS platform with RAG architecture.",
    architecture:
      "Built with Next.js 16, TypeScript, Express 5, and PostgreSQL (pgvector) via Drizzle ORM. Utilizes LangGraph, Groq, and Jina AI embeddings for end-to-end RAG pipelines and automated human-handoff workflows.",
    decision:
      "Standard customer support tools lack contextual source-cited intelligence. Architecting a multi-tenant RAG system with optimized 32-chunk batch processing cuts embedding API calls by 97% while ensuring secure, isolated customer data handling.",
    link: "https://theconverso.vercel.app/",
    code: "https://github.com/chinmaye5/converso",
    tech: ["Next.js 16", "TypeScript", "Express 5", "PostgreSQL (pgvector)", "Drizzle ORM", "LangGraph", "Groq", "Jina AI", "Docker"],
  },
  {
    title: "HireUp",
    tagline: "SaaS platform for AI voice interviews, from invite to scorecard",
    architecture:
      "Built with Next.js 16, TypeScript, FastAPI, and MongoDB, with Clerk for auth and LiveKit Cloud for real-time WebRTC audio. A live voice agent runs a Groq Whisper, Groq LLM, and Deepgram TTS pipeline, saves the transcript to MongoDB turn by turn, and auto-scores each candidate with schema-validated LLM output.",
    decision:
      "Real-time voice is too heavy for a 512 MB free-tier host, so I split the system into a lightweight FastAPI API and a separate voice agent on LiveKit Cloud, with all speech and LLM work offloaded to Groq and Deepgram. Atomic MongoDB status transitions stop an invite being started twice, per-company data isolation keeps recruiters from seeing each other's candidates, and a release-on-failure path means an infrastructure error never uses up a candidate's one interview.",
    link: "https://thehireup.vercel.app/",
    code: "https://github.com/chinmaye5/hireup",
    tech: ["Next.js 16", "TypeScript", "FastAPI", "MongoDB", "Clerk", "LiveKit Agents", "Groq", "Deepgram", "Silero VAD", "Docker", "GitHub Actions"],
  },
  {
    title: "RAGent",
    tagline: "Agentic RAG platform featuring multi-agent workflows and automated self-correction.",
    architecture:
      "Powered by FastAPI, LangGraph, React 19, and PostgreSQL (pgvector). Implements a 5-stage ingestion pipeline with LLM-driven contextual metadata enrichment and dynamic retrieval verification loops.",
    decision:
      "Unverified RAG responses frequently suffer from silent hallucinations and high latency. Introducing an automated verification node and an intent router short-circuits unnecessary vector searches, reducing hallucination rates by 85% and cutting token consumption by 60%.",
    link: "https://theragent.vercel.app/",
    code: "https://github.com/chinmaye5/ragent",
    tech: ["FastAPI", "LangGraph", "PostgreSQL (pgvector)", "Groq API", "Jina AI", "React 19", "Docker"],
  },
  {
    title: "ParallelAI",
    tagline: "Multi-LLM parallel querying platform for response cross-validation.",
    architecture:
      "Executes parallel requests across Gemini, LLaMA, DeepSeek, Qwen, and Gemma model providers. Aggregates stream responses into a unified side-by-side verification interface.",
    decision:
      "Single-model LLM workflows suffer from silent hallucinations. Querying models in parallel lets users compare consensus and confidence across distinct architectures before acting on generated output.",
    link: "https://theparallelai.vercel.app/",
    code: "https://github.com/chinmaye5/parallel-ai",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Multi-LLM APIs"],
  },
  {
    title: "Clippi",
    tagline: "Full-stack AI image processing suite (background removal, replacement, text removal, upscaling).",
    architecture:
      "Integrates Clipdrop AI API endpoints into an authenticated user workflow with persistent transformation history and asset management.",
    decision:
      "Offloading complex computer vision model execution to specialized serverless AI endpoints ensures ultra-low latency client interactions and scalable image transformation pipelines.",
    link: "https://clippitools.vercel.app/",
    code: "https://github.com/chinmaye5/Clippi",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js", "Clipdrop API"],
  },
  {
    title: "CourseTube",
    tagline: "Automated YouTube-to-course generator with structured chapters & progress metrics.",
    architecture:
      "Parses long-form technical video streams into modular chapters, syllabus hierarchies, and interactive study modules.",
    decision:
      "Raw video feeds lead to unstructured learning. Extracting structured metadata into defined learning paths drastically improves content retention and scannability.",
    link: "https://mycoursetube.vercel.app/",
    code: "https://github.com/chinmaye5/CourseTube",
    tech: ["Next.js", "MongoDB", "TailwindCSS", "Clerk Auth"],
  },
];

const secondaryProjects: SecondaryProject[] = [
  {
    title: "Agrisense AI",
    description: "Agronomic recommendation system & chatbot with Qdrant vector DB RAG & graphical analysis.",
    link: "https://theagrisenseai.vercel.app/",
    code: "https://github.com/chinmaye5/AgriSense",
    tech: "Next.js, Qdrant DB, Gemini",
  },
  {
    title: "Ship Now",
    description: "MERN app allowing users to build, edit & deploy AI-generated static sites in minutes.",
    link: "https://theshipnow.vercel.app/",
    code: "https://github.com/chinmaye5/ship-now",
    tech: "React, Node, Express, MongoDB",
  },
  {
    title: "YT-GPT",
    description: "Instant chat interface over YouTube video content powered by Groq API high-speed inference.",
    link: "https://theytgpt.vercel.app/",
    code: "https://github.com/chinmaye5/YTgpt",
    tech: "Node.js, Express, Groq API",
  },
  {
    title: "AIStudio",
    description: "Structured prompt workstation for generating domain-specific blogs & technical copy.",
    link: "https://theaistudio.vercel.app/",
    code: "https://github.com/chinmaye5/AiStudio",
    tech: "Next.js, Gemini API, Clerk",
  },
  {
    title: "Client E-commerce",
    description: "Production client e-commerce platform with product catalogs, MongoDB & Clerk auth.",
    link: "https://keshavakiranam.in/",
    code: "https://github.com/chinmaye5/ecommerce_freelance",
    tech: "Next.js, MongoDB, Clerk",
  },
  {
    title: "Postore",
    description: "Poster e-commerce web interface SPA with catalog filtering & cart state.",
    link: "https://postore.vercel.app/",
    code: "https://github.com/chinmaye5/PoStore",
    tech: "React.js, Tailwind CSS",
  },
];

function LiveWebpageCard({ link, title }: { link: string; title: string }) {
  return (
    <div className="relative w-full h-48 sm:h-72 md:h-80 rounded-lg overflow-hidden border border-border bg-card/40 flex flex-col group">
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-2.5 py-1 sm:px-3 sm:py-1.5 border-b border-border bg-card text-[10px] sm:text-[11px] font-mono text-muted-foreground shrink-0 z-20">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500/70 inline-block"></span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-500/70 inline-block"></span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500/70 inline-block"></span>
        </div>
        <span className="truncate max-w-[160px] sm:max-w-[260px] opacity-75">
          {link.replace("https://", "").replace(/\/$/, "")}
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider opacity-60">Live View</span>
      </div>

      {/* Live Webpage Iframe */}
      <div className="relative w-full grow overflow-hidden bg-background">
        <iframe
          src={link}
          title={title}
          className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-none select-none"
          loading="lazy"
        />
        {/* Click Overlay */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
          title={`Click to open ${title} live website in a new tab`}
        />
      </div>
    </div>
  );
}

function SecondaryLiveCard({ link, title }: { link: string; title: string }) {
  return (
    <div className="relative w-full h-36 sm:h-40 rounded-t-lg overflow-hidden border-b border-border bg-card/40 flex flex-col group">
      {/* Mini Browser Bar */}
      <div className="flex items-center justify-between px-2.5 py-1 border-b border-border bg-card text-[10px] font-mono text-muted-foreground shrink-0 z-20">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500/70 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500/70 inline-block"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/70 inline-block"></span>
        </div>
        <span className="truncate max-w-[150px] sm:max-w-[180px] opacity-75">
          {link.replace("https://", "").replace(/\/$/, "")}
        </span>
        <span className="text-[9px] uppercase font-mono tracking-wider opacity-60">Live</span>
      </div>

      {/* Live Webpage Iframe */}
      <div className="relative w-full grow overflow-hidden bg-background">
        <iframe
          src={link}
          title={title}
          className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-none select-none"
          loading="lazy"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 cursor-pointer bg-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
          title={`Click to open ${title} live website`}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex flex-col gap-10 sm:gap-12 w-full pt-2 sm:pt-4">
      {/* Flagship Section */}
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex items-center justify-between border-b border-border pb-2.5 sm:pb-3">
          <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Flagship Systems
          </h2>
          <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">01 / Deep Case Studies</span>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {flagshipProjects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-foreground/20"
            >
              {/* Top Bar: Title & Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-foreground font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-normal">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-medium rounded-md border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ExternalLink size={12} /> Live System
                  </Link>
                  <Link
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-mono font-medium rounded-md border border-border bg-background hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Github size={12} /> Source
                  </Link>
                </div>
              </div>

              {/* Live Webpage Container inside card */}
              <LiveWebpageCard link={project.link} title={project.title} />

              {/* Technical Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm pt-1">
                <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-lg bg-background/50 border border-border">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Architecture & Flow
                  </span>
                  <p className="text-foreground/90 leading-relaxed text-xs sm:text-sm">
                    {project.architecture}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-lg bg-background/50 border border-border">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Engineering Decision
                  </span>
                  <p className="text-foreground/90 leading-relaxed text-xs sm:text-sm">
                    {project.decision}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono text-muted-foreground pt-1">
                <span className="text-foreground/70 font-semibold">Stack:</span>
                {project.tech.map((t, i) => (
                  <span key={i}>
                    {t}{i < project.tech.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Secondary Section */}
      <div className="flex flex-col gap-5 sm:gap-6 pt-2 sm:pt-4">
        <div className="flex items-center justify-between border-b border-border pb-2.5 sm:pb-3">
          <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Secondary Work & Systems
          </h2>
          <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">02 / Additional Live Deployments</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {secondaryProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-border bg-card shadow-xs overflow-hidden hover:border-foreground/20 transition-colors"
            >
              <SecondaryLiveCard link={project.link} title={project.title} />

              <div className="flex flex-col justify-between p-3.5 sm:p-4 grow gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-foreground font-heading">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                  <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground truncate">
                    {project.tech}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-foreground hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                    >
                      Live <ExternalLink size={12} />
                    </Link>
                    <span className="text-muted-foreground">·</span>
                    <Link
                      href={project.code}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground hover:underline underline-offset-4 flex items-center gap-1"
                    >
                      Code <Github size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

