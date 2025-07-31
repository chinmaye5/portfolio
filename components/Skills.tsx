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
            className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-lg font-semibold capitalize mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
              {category}
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white shadow-sm hover:scale-105 hover:shadow-md transition-transform duration-200"
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
