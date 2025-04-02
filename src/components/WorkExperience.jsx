import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Rolls-Royce",
    date: "March 2025 - Present",
    icon: <FaBriefcase className="text-cyan-500" />,
    description: "Working at digital transformation team.",
    startDate: new Date(2025, 3),
    endDate: null
  },
  {
    title: "Full-Stack Developer",
    company: "Zetane Systems",
    date: "Nov 2022 - Oct 2024",
    icon: <FaBriefcase className="text-cyan-500" />,
    description: "Developed and deployed AI-powered applications using Python, React, and Docker.",
    startDate: new Date(2022, 10),
    endDate: new Date(2023, 9)
  },
  {
    title: "Java/Scala Developer",
    company: "Morgan Stanley",
    date: "May 2022 - Dec 2022",
    icon: <FaBriefcase className="text-cyan-500" />,
    description: "Built UI features, automated tests, and improved bond pricing algorithms.",
    startDate: new Date(2022, 1),
    endDate: new Date(2022, 10)
  },
  {
    title: "BSc. in Computer Science",
    company: "McGill University",
    date: "Sep 2017 - Dec 2021",
    icon: <FaGraduationCap className="text-yellow-400" />,
    description: "Focused on software engineering, algorithms, data structures and data science.",
    startDate: new Date(2017, 9),
    endDate: new Date(2021, 12)
  },
];

function WorkExperience() {
  return (
    <div name="work experience" className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Journey</h2>
        <div className="relative border-l-4 border-cyan-500 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex items-start">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mr-4">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.date}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;