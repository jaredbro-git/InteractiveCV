import React, { useState } from "react";
import ModernCV from "./views/ModernCV";
import CICSCV from "./views/CICSCV";

function App() {
  const [view, setView] = useState<"modern" | "cics">("modern");

  return (
    <div>
      <div className="p-4 flex gap-4">
        <button
          onClick={() => setView("modern")}
          className={`px-4 py-2 rounded ${view === "modern" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Modern View
        </button>
        <button
          onClick={() => setView("cics")}
          className={`px-4 py-2 rounded ${view === "cics" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          CICS View
        </button>
      </div>

      {view === "modern" ? <ModernCV /> : <CICSCV />}
    </div>
  );
}

export default App;
