import React, { useState, useEffect } from "react";
import { cvData } from "../data/cvData";

const CICSCV: React.FC = () => {
  const [current, setCurrent] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);

  const sections = [
    { name: "About", content: cvData.about },
    { name: "Skills", content: cvData.skills.map((s) => `${s.name} (${s.level})`).join(", ") },
    { name: "Experience", content: cvData.experience.map((e) => `${e.role} @ ${e.company} (${e.startDate} - ${e.endDate || "Present"})\n${e.description}`).join("\n\n") },
    { name: "Projects", content: cvData.projects.map((p) => `${p.name}: ${p.description}`).join("\n\n") },
    { name: "Education", content: cvData.education?.map((edu) => `${edu.degree} @ ${edu.institution} (${edu.startDate} - ${edu.endDate || "Present"})`).join("\n\n") },
    { name: "Hobbies", content: cvData.hobbies?.map((h) => h.name).join(", ") },
  ];

  const openSection = (idx: number) => {
    if (current !== null) setHistory([...history, current]);
    setCurrent(idx);
  };

  const goBack = () => {
    const prev = history.pop();
    setHistory([...history]);
    setCurrent(prev ?? null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "F1": openSection(0); e.preventDefault(); break;
        case "F2": openSection(1); e.preventDefault(); break;
        case "F3": openSection(2); e.preventDefault(); break;
        case "F4": openSection(3); e.preventDefault(); break;
        case "F5": openSection(4); e.preventDefault(); break;
        case "F6": openSection(5); e.preventDefault(); break;
        case "Escape": goBack(); e.preventDefault(); break;
        case "F12": setCurrent(null); setHistory([]); e.preventDefault(); break; // F12 → main menu
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, history]);


  // F-key labels for footer
  const footerLabels = [
    "F1: About",
    "F2: Skills",
    "F3: Experience",
    "F4: Projects",
    "F5: Education",
    "F6: Hobbies",
  ];

  return (
    <div className="min-h-screen p-6 font-mono bg-black text-green-400">
      <div>
        <h1 className="text-3xl mb-4">{cvData.name} - {cvData.title}</h1>

        {current === null ? (
          <div className="flex flex-col items-center mt-6">
            <p className="mb-4 text-lg text-center">Select a section using F1–F6:</p>
            <ul className="list-decimal text-left">
              {sections.map((s, idx) => (
                <li key={idx} className="mb-2 text-lg">{s.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-black border border-green-400 p-4 whitespace-pre-line">
            <h2 className="font-bold mb-2">{sections[current].name}</h2>
            {sections[current].content}
          </div>
        )}

        {/* Footer row just below content */}
        <div className="mt-4 bg-black border-t border-green-400 p-2 text-green-400 text-sm">
          {footerLabels.map((label, idx) => (
            <span key={idx} className="mr-4">
              {label}
            </span>
          ))}
          <span>ESC: Back</span>
          <span className="ml-4">F12: Main Menu</span>
        </div>
      </div>
    </div>
  );
};

export default CICSCV;
