"use client";
import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/magicui/meteors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Github, Mail, Twitter, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col gap-12 p-4 md:p-8 lg:p-12 relative overflow-hidden max-w-4xl mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <div className="flex flex-col gap-12 mt-16 md:mt-0">

        {/* Dock with icons */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Dock>
            {[
              {
                name: "GitHub",
                url: "https://github.com/chinmaye5",
                icon: Github,
                color: "text-gray-800 dark:text-gray-200",
              },
              {
                name: "LinkedIn",
                url: "https://linkedin.com/in/chinmaye-hg-591881245/",
                icon: Linkedin,
                color: "text-blue-700 dark:text-blue-400",
              },
              {
                name: "Twitter",
                url: "https://x.com/Chinmayehg",
                icon: Twitter,
                color: "text-blue-500 dark:text-blue-400",
              },
              {
                name: "Email",
                url: "mailto:chinmaye115@gmail.com",
                icon: Mail,
                color: "text-gray-800 dark:text-gray-200",
              },
            ].map(({ name, url, icon: Icon, color }) => (
              <DockIcon key={name}>
                <a
                  href={url}
                  target={url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={name}
                >
                  <Icon className={`w-6 h-6 ${color}`} />
                </a>
              </DockIcon>
            ))}
            <DockIcon onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </DockIcon>
          </Dock>
        </div>


        <Intro />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Meteors number={50} />
    </main>
  );
}
