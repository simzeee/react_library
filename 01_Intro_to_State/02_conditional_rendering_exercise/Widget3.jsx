import { useState } from "react";

const Widget3 = () => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <div className="flex flex-col items-center p-4 rounded-lg m-4 bg-purple-100 border border-purple-300">
      {showIcon && (
        <i className="fa-solid fa-poop text-fuchsia-500 text-3xl mb-4"></i>
      )}
      <button
        onClick={() => setShowIcon(!showIcon)}
        className="px-4 py-2 bg-fuchsia-500 text-white rounded-full"
      >
        click me
      </button>
    </div>
  );
};

export default Widget3;
