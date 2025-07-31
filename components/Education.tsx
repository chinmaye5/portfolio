import React from "react";
import { GraduationCap, School } from "lucide-react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
  score?: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "August 2022",
    endDate: "May 2026",
    collegeName: "Lovely Professional University",
    courseName: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
    address: "Punjab, India",
    score: "CGPA: 8.20 / 10",
  },
  {
    startDate: "June 2018",
    endDate: "March 2020",
    collegeName: "Mahesh PU College",
    courseName: "Pre-University College (PUC) PCMB",
    address: "Mangaluru Karnataka, India",
    score: "91%",
  }
];

const Education: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 w-full">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        🎓 Education
      </h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {EducationData.map((item, index) => (
          <li
            key={index}
            className={`ms-6 mb-10 ${index === EducationData.length - 1 ? "mb-0" : ""}`}
          >
            {/* Icon */}
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 text-white">
              {index === 0 ? <GraduationCap size={16} /> : <School size={16} />}
            </span>

            <time className="block mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {item.startDate} – {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.courseName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.collegeName || item.schoolName} – {item.address}
            </p>
            {item.score && (
              <p className="mt-1 inline-block px-2 py-1 text-xs font-semibold rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                {item.score}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
