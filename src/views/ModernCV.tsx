// src/views/ModernCV.tsx
import React from "react";
import { cvData } from "../data/cvData";

export const ModernCV: React.FC = () => {
  return (
    <div className="modern-view fade-in min-h-screen px-4 sm:px-8 py-6 sm:py-8 bg-gray-50 text-gray-900 font-sans max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">{cvData.name}</h1>
        <h2 className="text-lg sm:text-xl text-gray-700">{cvData.title}</h2>
      </header>

      {/* About Me */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          About Me
        </h3>
        <p className="text-gray-800 mt-2">{cvData.about}</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cvData.skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded shadow-sm text-center mb-1">
                {skill.name} ({skill.level})
              </span>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-green-500 h-2 rounded transition-all duration-500"
                  style={{ width: `${skill.levelPercentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          Experience
        </h3>
        <div className="space-y-4">
          {cvData.experience.map((exp, idx) => {
            const [open, setOpen] = React.useState(false);
            return (
              <div
                key={idx}
                onClick={() => setOpen(!open)}
                className="w-full cursor-pointer p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-lg">{exp.role}</h4>
                  <span className="text-blue-500 font-bold text-4xl select-none">
                    {open ? "−" : "+"}
                  </span>
                </div>
                <p className="text-gray-700">{exp.company}</p>
                <span className="text-gray-500 text-sm">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
                {open && <p className="mt-2 text-gray-800">{exp.description}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          Projects
        </h3>
        <div className="space-y-3">
          {cvData.projects.map((project, idx) => (
            <div
              key={idx}
              className="w-full p-3 bg-yellow-100 rounded shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200">
              <strong>{project.name}:</strong> {project.description}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          Education
        </h3>
        <div className="space-y-2">
          {cvData.education.map((edu, idx) => (
            <div key={idx} className="w-full p-2 bg-red-100 rounded shadow-sm">
              <strong>{edu.degree}</strong> @ {edu.institution} (
              {edu.startDate} - {edu.endDate || "Present"})
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 border-b-2 border-blue-500 inline-block w-16">
          Hobbies
        </h3>
        <p className="text-gray-800">{cvData.hobbies.map((h) => h.name).join(", ")}</p>
      </section>
    </div>
  );
};
