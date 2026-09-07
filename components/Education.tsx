"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface BackgroundItem {
  type: "Experience" | "Education";
  title: string;
  institution: string;
  location: string;
  period?: string;
  scoreOrDetail?: string;
  description?: string[];
  link?: string;
}

const backgroundData: BackgroundItem[] = [
  {
    type: "Experience",
    title: "Complete Interview Prep Bootcamp",
    institution: "GeeksforGeeks",
    location: "Online",
    period: "June 2024 – July 2024",
    description: [
      "Intensive training in Data Structures & Algorithms (DSA), Operating Systems, Computer Networks, and web application architecture.",
    ],
    link: "https://www.geeksforgeeks.org/",
  },
  {
    type: "Education",
    title: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    scoreOrDetail: "CGPA: 8.47 / 10",
  },
  {
    type: "Education",
    title: "Pre-University College (PUC) PCMB",
    institution: "Mahesh PU College",
    location: "Mangaluru, Karnataka, India",
    scoreOrDetail: "Percentage: 91%",
  },
];

export default function Background() {
  return (
    <section className="flex flex-col gap-6 w-full pt-4">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Background & Education
        </h2>
        <span className="text-[11px] font-mono text-muted-foreground">Credentials & Training</span>
      </div>

      <div className="flex flex-col gap-4">
        {backgroundData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-4 rounded-lg border border-border bg-card/60"
          >
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border text-muted-foreground font-semibold">
                  {item.type}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-foreground font-heading">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-muted-foreground mt-0.5">
                <span className="text-foreground/90 font-medium">{item.institution}</span> · {item.location}
              </p>

              {item.description && (
                <ul className="mt-2 text-xs text-muted-foreground space-y-1">
                  {item.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              {item.period && (
                <span className="text-xs font-mono text-muted-foreground">
                  {item.period}
                </span>
              )}
              {item.scoreOrDetail && (
                <span className="text-xs font-mono font-semibold text-foreground bg-black/5 dark:bg-white/5 border border-border px-2.5 py-1 rounded">
                  {item.scoreOrDetail}
                </span>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:underline underline-offset-4 mt-1"
                >
                  Organization <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
