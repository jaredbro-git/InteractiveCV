import React, { useState } from "react";
import { CICSCV } from "./views/CICSCV";
import { ModernCV } from "./views/ModernCV";

export const App: React.FC = () => {
  const [view, setView] = useState<"cics" | "modern">("modern");

  return (
    <div className="app">
      {/* Toggle buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            view === "modern" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("modern")}
        >
          Modern CV
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === "cics" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setView("cics")}
        >
          CICS CV
        </button>
      </div>

      {/* Render selected view */}
      <div className="mt-6">
        {view === "cics" ? <CICSCV /> : <ModernCV />}
      </div>
    </div>
  );
};
