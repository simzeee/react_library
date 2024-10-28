import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <i
        className={clsx(
          "fa-duotone m-4 fa-basketball text-5xl text-orange-500",
          checked && "animate-bounce"
        )}
      />
      <div>
        <input
          className="accent-orange-400"
          id="bounce-checkbox"
          checked={checked}
          type="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <label htmlFor="bounce-checkbox" className="ml-1">
          check this box to bounce the ball
        </label>
      </div>
    </div>
  );
};

export default App;
