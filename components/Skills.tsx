import React from "react";

const skillsData = {
  languages: ["C", "C++", "Java", "JavaScript"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  backend: ["Node.js", "Express.js"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  devOps: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
  tools: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  concepts: ["REST APIs", "JWT", "MVC", "OOP", "Agile", "Clean Code"],
};

function Skills() {
  return (
    <section className="w-full flex flex-col gap-8">
      {/* Section Title */}
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        🚀 Skills
      </h1>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300"
          >
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              {category}
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
