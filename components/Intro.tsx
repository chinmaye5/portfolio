"use client";
import Image from "next/image";
import ProfilePic from "@/app/images/pfp.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Intro() {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-8 items-center">
            <div className="flex flex-col gap-4 w-full lg:w-3/4">

                {/* Typing effect heading */}
                <h1 className="text-3xl md:text-4xl font-extrabold">
                    <Typewriter
                        words={["Hi! I'm Chinmaye H.G."]}
                        typeSpeed={70}
                        deleteSpeed={50}
                        cursor
                        cursorStyle="|"
                    />
                </h1>

                <p className="text-base text-gray-800 dark:text-gray-300 leading-relaxed">
                   Full-stack developer skilled in building scalable, AI-powered web applications using technologies 
                    like Next.js, Node.js, and MongoDB. Proficient in writing clean, modular code and integrating LLMs 
                    into real world products. Experienced in deploying production-grade applications using CI/CD pipelines
                    with GitHub, Vercel, and Render. Product-focused engineer who builds solutions that solve real user 
                    problems and deliver meaningful impact.
                </p>
            </div>

            {/* Profile Picture */}
            <div className="w-full lg:w-1/4 flex justify-center">
                <Image
                    src={ProfilePic}
                    alt="Chinmaye"
                    width={160}
                    height={160}
                    className="border-2 border-gray-200 dark:border-gray-700 rounded-full object-cover aspect-square shadow-lg hover:scale-105 transition-transform duration-300"
                    priority
                />
            </div>
        </div>
    );
}
