"use client";
import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/magicui/meteors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

import { useTheme } from "next-themes";


export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col gap-12 p-4 md:p-8 lg:p-12 relative overflow-hidden max-w-4xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/5 dark:bg-black/5" />
      <div className="flex flex-col gap-12 mt-16 md:mt-0">

        {/* Premium Dock with tooltips */}
        <CustomDock />



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
