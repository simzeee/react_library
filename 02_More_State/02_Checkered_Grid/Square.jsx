import clsx from "clsx";
import { useState } from "react";

const Square = () => {
  const [isLight, setIsLight] = useState(true);
  return (
    <>
      <div
        className={clsx(
          "h-[30px] w-[30px] border border-stone-400 cursor-pointer",
          isLight ? "bg-stone-300 " : "bg-stone-500"
        )}
        onClick={() => setIsLight(!isLight)}
      ></div>
    </>
  );
};

export default Square;
