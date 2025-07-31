"use client";

import React from "react";
import Link from "next/link";
import { MailIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    email: (props: IconProps) => <MailIcon {...props} />,
    linkedin: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fill="currentColor"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
        </svg>
    ),
    github: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8..."
            />
        </svg>
    ),
};


const socialLinks = [
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
];


export function CustomDock() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <TooltipProvider>
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <Dock className="bg-background/50 backdrop-blur-md border rounded-full p-2">
                    {/* Social Icons */}
                    {socialLinks.map((social) => (
                        <DockIcon key={social.name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-12 rounded-full"
                                        )}
                                    >
                                        <social.icon className="size-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    {/* Theme Toggle */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-12 rounded-full"
                                    onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                                >
                                    {resolvedTheme === "light" ? (
                                        <Moon className="size-5" />
                                    ) : (
                                        <Sun className="size-5" />
                                    )}
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                <p>Toggle theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </div>
        </TooltipProvider>
    );
}