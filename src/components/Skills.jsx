import React from "react";

const Skills = () => {
  const skills = [
    { id: 1, title: "HTML", icon: "devicon-html5-plain colored", level: 90, color: "#F16529" },
    { id: 2, title: "CSS", icon: "devicon-css3-plain colored", level: 80, color: "#2965F1" },
    { id: 3, title: "JavaScript", icon: "devicon-javascript-plain colored", level: 75, color: "#F7DF1E" },
    { id: 4, title: "React", icon: "devicon-react-original colored", level: 85, color: "#61DAFB" },
    { id: 5, title: "Tailwind", icon: "devicon-tailwindcss-plain colored", level: 80, color: "#06B6D4" },
    { id: 6, title: "MySQL", icon: "devicon-mysql-plain colored", level: 60, color: "#4479A1" },
  ];

  return (
    <div className="py-10 px-5 dark:bg-black bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-10">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center space-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
          >

            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{skill.title}</h4>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mt-2">
                <div
                  className="h-4 rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>

            <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;