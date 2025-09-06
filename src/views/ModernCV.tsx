import React from "react";
import { cvData } from "../data/cvData";
import Header from "../components/Header";

const ModernCV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <Header name={cvData.name} title={cvData.title} />

      {/* About */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">{cvData.about}</p>
      </section>

      {/* Skills */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {cvData.skills.map((skill, idx) => (
            <li key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {skill.name} ({skill.level})
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        {cvData.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold">{exp.role} @ {exp.company}</h3>
            <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate || "Present"}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        {cvData.projects.map((proj, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-semibold">{proj.name}</h3>
            <p className="text-gray-700">{proj.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      {cvData.education && (
        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          {cvData.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold">{edu.degree} @ {edu.institution}</h3>
              <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate || "Present"}</p>
            </div>
          ))}
        </section>
      )}

      {/* Hobbies */}
      {cvData.hobbies && (
        <section className="my-6">
          <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
          <ul className="flex flex-wrap gap-3">
            {cvData.hobbies.map((hobby, idx) => (
              <li key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {hobby.name}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ModernCV;
