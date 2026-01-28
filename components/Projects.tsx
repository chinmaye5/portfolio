"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ExternalLink, Github, Monitor } from "lucide-react";

const projectsData = [
  {
    title: "Ship now",
    description:
      "Ship Now is a MERN stack application that helps users quickly build static websites for personal or business use using AI. It allows users to easily customize, edit, and iterate on their sites, and deploy them with a custom link in just a few clicks.",
    link: "https://theshipnow.vercel.app/",
    code: "https://github.com/chinmaye5/ship-now",
    previewImage: "/CourseTube.png",
    technologies: [
      "React js",
      "MongoDB",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "Gemini API",
    ],
  },
  {
    title: "ParallelAI",
    description:
      "ParallelAI is a multimodel Q&A platform that queries several LLMs in parallel, including Gemini, LLaMA, DeepSeek, Qwen, and Gemma. It helps reduce hallucination by enabling side‑by‑side comparison and validation.",
    link: "https://theparallelai.vercel.app/",
    code: "https://github.com/chinmaye5/parallel-ai",
    previewImage: "/ParallAi.png",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multiple LLM APIs",
    ],
  },
  {
    title: "CourseTube",
    description:
      "CourseTube is a Next.js application that transforms YouTube videos into structured, professional educational courses. It organizes the content into chapters, and presents everything in a clean, user-friendly interface.",
    link: "https://mycoursetube.vercel.app/",
    code: "https://github.com/chinmaye5/CourseTube",
    previewImage: "/CourseTube.png",
    technologies: [
      "Next.js",
      "MongoDB",
      "TailwindCSS",
      "Clerk Auth",
    ],
  },
  {
    title: "YT-GPT",
    description:
      "Paste any YouTube link and chat instantly about the video's content. Powered by Groq API with Node.js, MongoDB, and Next.js. (Currently Google has blocked transcript generation on hosted servers).",
    link: "https://theytgpt.vercel.app/",
    code: "https://github.com/chinmaye5/YTgpt",
    previewImage: "/ytgpt.png",
    technologies: ["Node.js", "MongoDB", "Next.js", "Express.js", "Groq API"],
  },
  {
    title: "AIStudio",
    description:
      "AIStudio is a content generation platform built with Next.js and the Gemini API. Users can generate high‑quality blogs, scripts, and more with industry‑specific prompts.",
    link: "https://theaistudio.vercel.app/",
    code: "https://github.com/chinmaye5/AiStudio",
    previewImage: "/AiStudio.png",
    technologies: [
      "Next.js",
      "Gemini API",
      "Vercel",
      "Clerk Auth",
    ],
  },
];

function ProjectPreview({ link, title, previewImage }: { link: string; title: string, previewImage: string }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-52 overflow-hidden bg-gray-50 dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      {/* Browser Bar */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-gray-100 dark:bg-gray-900 flex items-center px-4 gap-1.5 z-20 border-b border-gray-200 dark:border-gray-800">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-4 px-3 py-0.5 rounded-md bg-white dark:bg-gray-800 text-[10px] text-gray-500 dark:text-gray-400 font-mono flex-1 truncate max-w-[200px] border border-gray-200 dark:border-gray-700 shadow-sm">
          {link.replace("https://", "").replace(/\/$/, "")}
        </div>
        <Monitor size={12} className="text-gray-400 dark:text-gray-600 ml-auto" />
      </div>

      {/* Preview Content */}
      <div className="w-full h-full pt-7 bg-white dark:bg-slate-950 overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-x-0 bottom-0 top-7 z-10 flex items-center justify-center bg-gray-50 dark:bg-gray-950">
            <div
              className="absolute inset-0 bg-cover bg-top blur-[4px] opacity-20 grayscale transition-opacity duration-500"
              style={{ backgroundImage: `url(${previewImage})` }}
            />
            <div className="relative z-20 flex flex-col items-center gap-2">
              <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Loading Live Preview</span>
            </div>
          </div>
        )}

        <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.05] relative">
          <iframe
            src={link}
            title={title}
            className={`border-none pointer-events-none select-none transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            style={{
              width: '1280px',
              height: '900px',
              transformOrigin: 'top center',
              transform: 'scale(0.32)',
              position: 'absolute',
              left: '50%',
              marginLeft: '-640px',
              top: '0',
            }}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </div>
      </div>

      {/* Interaction blocker and subtle hover overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none group-hover:bg-indigo-500/[0.02] transition-colors duration-300" />
    </div>
  );
}

function Projects() {
  return (
    <section className="flex flex-col gap-8 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        🚀 Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Website Preview Instead of Static Image */}
            <ProjectPreview
              link={project.link}
              title={project.title}
              previewImage={project.previewImage}
            />

            {/* Content */}
            <div className="flex flex-col gap-3 p-5 grow">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto pt-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-200"
                >
                  <ExternalLink size={16} /> View
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                >
                  <Github size={16} /> Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

