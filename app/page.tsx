"use client";

import ContactMe from "@/components/ContactMe";
import { CustomDock } from "@/components/CustomDock";
import Background from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 sm:gap-16 px-3.5 sm:px-8 py-6 sm:py-12 relative max-w-3xl mx-auto overflow-x-hidden">
      {/* Floating Bottom Navigation Dock */}
      <CustomDock />

      {/* Main Narrative Stack */}
      <div className="flex flex-col gap-12 sm:gap-16 w-full">
        <Intro />
        <Projects />
        <Skills />
        <Background />
        <ContactMe />
      </div>
    </main>
  );
}

