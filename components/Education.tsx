import React from "react";
import { GraduationCap, School } from "lucide-react";

interface EducationItem {
  startDate?: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
  score?: string;
}

const EducationData: EducationItem[] = [
  {
    collegeName: "Lovely Professional University",
    courseName: "Bachelor of Technology (B.Tech), Computer Science and Engineering",
    address: "Punjab, India",
    score: "CGPA: 8.20 / 10",
  },
  {
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
            <span className="absolute flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-950 border-2 border-indigo-500 rounded-full -start-5 z-10">
              <span className="flex items-center justify-center w-7 h-7 bg-indigo-500 rounded-full text-white shadow-lg shadow-indigo-500/20">
                {index === 0 ? <GraduationCap size={14} /> : <School size={14} />}
              </span>
            </span>

            <div className="p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm hover:border-indigo-500/30 transition-colors duration-300">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {item.courseName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 uppercase tracking-wider">
                {item.collegeName || item.schoolName} • {item.address}
              </p>
              {item.score && (
                <p className="mt-3 inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {item.score}
                </p>
              )}
            </div>

          </li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
