"use client";

import { Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactMe() {
  return (
    <section className="flex flex-col gap-5 sm:gap-6 w-full pt-2 sm:pt-4 pb-24 sm:pb-28">
      <div className="flex items-center justify-between border-b border-border pb-2.5 sm:pb-3">
        <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          Contact & Connect
        </h2>
        <span className="text-[10px] sm:text-[11px] font-mono text-muted-foreground">Open for Opportunities</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-4 sm:p-6 rounded-xl border border-border bg-card">
        <div className="flex flex-col gap-1.5 max-w-md">
          <h3 className="text-base sm:text-lg font-bold text-foreground font-heading">
            Let's build something together.
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Evaluating SDE backend or AI systems roles? Reach out via email or Twitter — my inbox is always open.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
          <Link
            href="mailto:chinmaye115@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg bg-foreground text-background text-xs font-mono font-medium hover:opacity-90 transition-opacity min-h-[40px]"
          >
            <Mail size={14} /> Send Email
          </Link>

          <Link
            href="https://x.com/Chinmayehg"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg border border-border bg-background text-foreground text-xs font-mono font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors min-h-[40px]"
          >
            <Twitter size={14} /> @Chinmayehg
          </Link>
        </div>
      </div>
    </section>
  );
}

