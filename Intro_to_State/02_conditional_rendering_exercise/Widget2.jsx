import { useState } from "react";

const Widget2 = () => {
  const [toggleColor, setToggleColor] = useState(false);
  return (
    <div className="flex flex-col items-center p-4 rounded-lg m-4 bg-sky-100 border border-sky-300">
      <button
        onClick={() => setToggleColor(!toggleColor)}
        className={`px-4 py-2 ${
          toggleColor ? "bg-orange-500" : "bg-blue-500"
        } text-white rounded-full`}
      >
        click me
      </button>
    </div>
  );
};

export default Widget2;
