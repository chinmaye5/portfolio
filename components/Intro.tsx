"use client";
import Image from "next/image";
import ProfilePic from "@/app/images/pfp.jpg";

export default function Intro() {
    return (
        <section className="w-full flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 items-start justify-between pt-2 sm:pt-6 pb-2">
            <div className="flex flex-col gap-4 sm:gap-5 max-w-xl">

                {/* Available Badge */}
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-border text-[11px] sm:text-xs font-mono text-foreground/80 w-fit">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF3C] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF3C]"></span>
                    </span>
                    Available for new opportunities
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
                        Chinmaye H.G.
                    </h1>
                    <p className="text-base sm:text-xl font-medium text-foreground/90 font-heading leading-snug">
                        Backend Engineer building & shipping AI-integrated systems.
                    </p>
                </div>

                <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    Focused on multi-LLM orchestration (Gemini, LLaMA, DeepSeek, Qwen), RAG pipelines with vector databases (Qdrant), 
                    LangChain, and scalable web backend architectures using Node.js, Next.js & MongoDB.
                </p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] sm:text-xs font-mono text-muted-foreground pt-1">
                    <span>Bengaluru, India</span>
                    <span>·</span>
                    <a 
                        href="mailto:chinmaye115@gmail.com" 
                        className="hover:text-foreground transition-colors underline decoration-border underline-offset-4 break-all"
                    >
                        chinmaye115@gmail.com
                    </a>
                    <span>·</span>
                    <a 
                        href="https://x.com/Chinmayehg" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-foreground transition-colors underline decoration-border underline-offset-4"
                    >
                        @Chinmayehg
                    </a>
                </div>
            </div>

            {/* Profile Picture with Minimal Clean Border */}
            <div className="shrink-0 relative">
                <div className="p-1 rounded-full border border-border bg-card shadow-sm">
                    <Image
                        src={ProfilePic}
                        alt="Chinmaye H.G."
                        width={128}
                        height={128}
                        className="rounded-full object-cover aspect-square grayscale-[15%] w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}


