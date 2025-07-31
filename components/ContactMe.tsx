import { Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <section className="flex flex-col gap-6 mb-20 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        📬 Contact Me
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        I’d love to connect! You can reach me via{" "}
        <span className="font-medium">Twitter</span> or{" "}
        <span className="font-medium">Email</span>:
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="https://x.com/Chinmayehg"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow-md hover:scale-105 transition-transform duration-200"
        >
          <Twitter size={18} /> Twitter DM
        </Link>

        <Link
          href="mailto:chinmaye115@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium shadow-md hover:scale-105 transition-transform duration-200"
        >
          <Mail size={18} /> Email Me
        </Link>
      </div>
    </section>
  );
}

export default ContactMe;
