import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-green-400");
  return (
    <div className={clsx("h-screen flex justify-center items-center", bgColor)}>
      <label className="m-2" htmlFor="color-select">
        Choose Color
      </label>
      <select
        className="p-2 rounded-md shadow-md"
        id="color-select"
        onChange={(e) => setBgColor(e.target.value)}
      >
        <option value="bg-green-400">green</option>
        <option value="bg-red-400">red</option>
        <option value="bg-blue-400">blue</option>
        <option value="bg-purple-400">purple</option>
        <option value="bg-yellow-400">yellow</option>
      </select>
    </div>
  );
};

export default App;
