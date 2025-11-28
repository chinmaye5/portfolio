import Link from "next/link";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [

  {
    title: "ParallelAI",
    description:
      "ParallelAI is a multi‑model Q&A platform that queries several LLMs in parallel, including Gemini, LLaMA, DeepSeek, Qwen, and Gemma. It helps reduce hallucination by enabling side‑by‑side comparison and validation.",
    link: "https://parallelai-henna.vercel.app/",
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
    title: "YT-GPT",
    description:
      "Paste any YouTube link and chat instantly about the video's content. Powered by Groq API with Node.js, MongoDB, and Next.js. (Currently Google has blocked transcript generation on hosted servers).",
    link: "https://ytgpt-snowy.vercel.app/",
    code: "https://github.com/chinmaye5/YTgpt",
    previewImage: "/ytgpt.png",
    technologies: ["Node.js", "MongoDB", "Next.js", "Express.js", "Groq API"],
  },
  {
    title: "AIStudio",
    description:
      "AIStudio is a content generation platform built with Next.js and the Gemini API. Users can generate high‑quality blogs, scripts, and more with industry‑specific prompts.",
    link: "https://ai-studio-smoky.vercel.app/",
    code: "https://github.com/chinmaye5/AiStudio",
    previewImage: "/AiStudio.png",
    technologies: [
      "Next.js",
      "Gemini API",
      "Vercel",
      "Clerk Auth",
      "Generative AI",
    ],
  },
  {
  title: "CourseTube",
  description:
    "CourseTube is a Next.js application that transforms YouTube videos into structured, professional educational courses. It extracts video transcripts, organizes the content into chapters, generates summaries, and presents everything in a clean, user-friendly interface.",
  link: "https://mycoursetube.vercel.app/",
  code: "https://github.com/chinmaye5/CourseTube",
  previewImage: "/Screenshot 2025-11-28 151156.png",
  technologies: [
    "Next.js",
    "MongoDB",
    "Node.js",
    "TailwindCSS",
    "Clerk Auth",
    "Lucide-react",
  ],
},

];


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
            {/* Image */}
            <img
              src={project.previewImage}
              alt={`${project.title} preview`}
              className="rounded-t-xl object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
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
              <div className="flex gap-3 mt-auto">
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <ExternalLink size={16} /> View
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-transform duration-200"
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
