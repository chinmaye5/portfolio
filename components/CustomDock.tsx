"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useTheme } from "next-themes";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

/* ---------------- ICON TYPES ---------------- */

export type IconProps = React.SVGAttributes<SVGElement>;

/* ---------------- LEETCODE ICON ---------------- */

const LeetCodeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 2.5a1.25 1.25 0 0 1 1.767 0l1.25 1.25a1.25 1.25 0 1 1-1.767 1.767l-.366-.366-6.9 6.9a2.75 2.75 0 0 0 0 3.889l3.06 3.06a2.75 2.75 0 0 0 3.89 0l6.9-6.9-.366-.366a1.25 1.25 0 1 1 1.767-1.767l1.25 1.25a1.25 1.25 0 0 1 0 1.767l-8.667 8.667a5.25 5.25 0 0 1-7.425 0l-3.06-3.06a5.25 5.25 0 0 1 0-7.425l8.667-8.667Z" />
  </svg>
);

/* ---------------- SOCIAL LINKS ---------------- */

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/chinmaye5",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chinmaye-hg-591881245/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/Chinmayehg",
    icon: Twitter,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/chinmaye5/",
    icon: LeetCodeIcon,
  },
  {
    name: "Email",
    url: "mailto:chinmaye115@gmail.com",
    icon: Mail,
  },
];

/* ---------------- CUSTOM DOCK ---------------- */

export function CustomDock() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
        <Dock className="rounded-full border bg-background/50 p-2 backdrop-blur-md">
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
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      }),
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
                  onClick={() =>
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                  }
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
