"use client";
import Image from "next/image";
import ProfilePic from "@/app/images/pfp.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 items-center py-4">
            <div className="flex flex-col gap-6 w-full lg:w-3/4">

                {/* Available Badge */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold w-fit animate-in fade-in slide-in-from-left-4 duration-1000">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for new opportunities
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                            <Typewriter
                                words={["Hi! I'm Chinmaye H.G."]}
                                typeSpeed={70}
                                deleteSpeed={50}
                                cursor
                                cursorStyle="|"
                            />
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                        Fullstack Developer & AI Enthusiast
                    </h2>
                </div>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                    I build scalable, AI-powered web applications using
                    <span className="text-gray-900 dark:text-gray-100 font-medium ml-1">Next.js, Node.js, and MongoDB</span>.
                    I'm focused on writing clean code and integrating LLMs
                    into products that solve real problems.
                </p>
            </div>

            {/* Profile Picture with Double Ring */}
            <div className="w-full lg:w-1/4 flex justify-center relative">
                <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-150 animate-pulse pointer-events-none" />
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 group">
                    <div className="p-1 rounded-full bg-white dark:bg-gray-950">
                        <Image
                            src={ProfilePic}
                            alt="Chinmaye"
                            width={180}
                            height={180}
                            className="rounded-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}
