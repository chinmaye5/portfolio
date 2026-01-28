import { Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <section className="flex flex-col gap-6 mb-20 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        📬 Contact Me
      </h1>
      <div className="relative group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm overflow-hidden">
        {/* Subtle background glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col gap-6">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
            I'm currently looking for new opportunities and collaborations.
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://x.com/Chinmayehg"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DA1F2] text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-blue-500/40 transition-all duration-200"
            >
              <Twitter size={18} /> Let's chat on X
            </Link>

            <Link
              href="mailto:chinmaye115@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold border border-gray-200 dark:border-gray-700 shadow-lg hover:scale-105 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
            >
              <Mail size={18} /> Say Hello via Email
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactMe;
