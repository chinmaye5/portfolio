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
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-white">
              <Briefcase size={16} />
            </span>

            {/* Dates */}
            <time className="block mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.startDate} – {item.endDate || "Present"}
            </time>

            {/* Title + Company */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.jobTitle} at{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                {item.companyName}
              </span>
            </h3>

            {/* Description */}
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {/* Company Link */}
            {item.companyLink && (
              <a
                href={item.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 px-3 py-1.5 text-sm font-medium rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:scale-105 transition-transform duration-200"
              >
                Visit Company →
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WorkExperience;
