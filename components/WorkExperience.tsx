import React from "react";
import { Briefcase } from "lucide-react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "June 2024",
    endDate: "July 2024",
    companyName: "GeeksforGeeks",
    jobTitle: "Complete Interview Prep Bootcamp",
    description: [
      "Trained in Data Structures & Algorithms (DSA), Operating Systems, Computer Networks, Aptitude, and project development.",
    ],
    companyLink: "https://www.geeksforgeeks.org/",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        💼 Experience
      </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`ms-6 mb-10 ${index === workExperienceData.length - 1 ? "mb-0" : ""
              }`}
          >
            {/* Icon */}
            <span className="absolute flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-950 border-2 border-emerald-500 rounded-full -start-5 z-10">
              <span className="flex items-center justify-center w-7 h-7 bg-emerald-500 rounded-full text-white shadow-lg shadow-emerald-500/20">
                <Briefcase size={14} />
              </span>
            </span>

            <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
              {/* Dates */}
              <time className="block mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                {item.startDate} – {item.endDate || "Present"}
              </time>

              {/* Title + Company */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {item.jobTitle}{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  @ {item.companyName}
                </span>
              </h3>

              {/* Description */}
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-4 space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i} className="leading-relaxed">{desc}</li>
                ))}
              </ul>

              {/* Company Link */}
              {item.companyLink && (
                <div className="mt-6">
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    View Company Website →
                  </a>
                </div>
              )}
            </div>

          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkExperience;
