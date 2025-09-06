import React, { useState, useEffect } from "react";
import { cvData } from "../data/cvData";

export const CICSCV: React.FC = () => {
  const [current, setCurrent] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [screenContent, setScreenContent] = useState<string>("");
  const [flash, setFlash] = useState(false);

  const sections = [
    { name: "About", content: cvData.about },
    { name: "Skills", content: cvData.skills.map(s => `${s.name} (${s.level})`).join(", ") },
    { name: "Experience", content: cvData.experience.map(e => `${e.role} @ ${e.company} (${e.startDate} - ${e.endDate || "Present"})\n${e.description}`).join("\n\n") },
    { name: "Projects", content: cvData.projects.map(p => `${p.name}: ${p.description}`).join("\n\n") },
    { name: "Education", content: cvData.education.map(e => `${e.degree} @ ${e.institution} (${e.startDate} - ${e.endDate || "Present"})`).join("\n\n") },
    { name: "Hobbies", content: cvData.hobbies.map(h => h.name).join(", ") }
  ];

  const openSection = (idx: number) => {
    if (current !== null) setHistory([...history, current]);
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
      setCurrent(idx);
      setScreenContent(sections[idx].content);
    }, 50);
  };

  const goBack = () => {
    const prev = history.pop();
    setHistory([...history]);
    if (prev === null || prev === undefined) {
      setCurrent(null);
      setScreenContent("");
    } else {
      setCurrent(prev);
      setScreenContent(sections[prev].content);
    }
  };

  const resetToMainMenu = () => {
    setCurrent(null);
    setHistory([]);
    setScreenContent("");
  };

    const footerLabels = [
    { key: "F1", label: "About", index: 0, actionType: "normal" },
    { key: "F2", label: "Skills", index: 1, actionType: "normal" },
    { key: "F3", label: "Experience", index: 2, actionType: "normal" },
    { key: "F4", label: "Projects", index: 3, actionType: "normal" },
    { key: "F5", label: "Education", index: 4, actionType: "normal" },
    { key: "F6", label: "Hobbies", index: 5, actionType: "normal" },
    { key: "F12", label: "Back", actionType: "special", handler: goBack },
    { key: "ESC", label: "Main Menu", actionType: "special", handler: resetToMainMenu },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "F1": openSection(0); e.preventDefault(); break;
        case "F2": openSection(1); e.preventDefault(); break;
        case "F3": openSection(2); e.preventDefault(); break;
        case "F4": openSection(3); e.preventDefault(); break;
        case "F5": openSection(4); e.preventDefault(); break;
        case "F6": openSection(5); e.preventDefault(); break;
        case "F12": goBack(); e.preventDefault(); break;
        case "Escape": setCurrent(null); setHistory([]); setScreenContent(""); e.preventDefault(); break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, history]);

  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="cics-view p-4 text-green-400 font-mono w-full max-w-3xl">
        <div className={`border-4 border-green-400 p-4 bg-black w-full max-w-3xl ${flash ? "flash" : ""}`}>
          <div className="border-b border-green-400 pb-2 mb-2">
            <span className="font-bold">CICS CV SYSTEM</span> - {cvData.name}
          </div>

          {current === null ? (
            <div className="flex flex-col items-center w-full">
              <p className="mb-4 text-lg text-center">Select a section using F1–F6:</p>
              <div className="w-56">
                <ul className="list-decimal text-left">
                  {sections.map((s, idx) => <li key={idx} className="mb-1 text-lg">{s.name}</li>)}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <div className="w-3/4 whitespace-pre-line">
                <h2 className="font-bold mb-2">{sections[current].name}</h2>
                {screenContent}
              </div>
            </div>
          )}

          <div className="mt-4 border-t border-green-400 pt-2 text-green-400 text-sm flex justify-between">
            <div className="fkeys mt-4 flex justify-between text-sm">
              {footerLabels.map((item, idx) => (
                <span
                  key={idx}
                  className="cursor-pointer hover:underline"
                  onClick={() =>
                    item.actionType === "normal"
                      ? openSection(item.index)
                      : item.handler && item.handler()
                  }>
                  {item.key} {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
