import { useState } from "react";
import { clsx } from "clsx";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={clsx(
        "flex justify-center items-center h-screen",
        isOn ? "bg-yellow-200" : "bg-slate-600"
      )}
    >
      <button onClick={() => setIsOn(!isOn)}>
        <div
          className={clsx("h-8 w-6", isOn ? `bg-slate-300` : `bg-slate-200`)}
        ></div>
        <div
          className={clsx("h-8 w-6", isOn ? `bg-slate-200` : `bg-slate-300`)}
        ></div>
      </button>
    </div>
  );
};

export default App;
