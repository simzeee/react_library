import { useState } from "react";
import clsx from "clsx";

const PlayingCard = (props) => {
  const { value, color, icon } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? (
        <div
          className={clsx(
            "rounded-lg border-4 border-black w-40 h-56 m-4 p-2 flex flex-col justify-between text-4xl items-center",
            color
          )}
        >
          <div className="w-full">{value}</div>
          <i className={clsx("fa-solid", icon)}></i>
          <div className="w-full flex justify-end">{value}</div>
        </div>
      ) : (
        <div className="rounded-lg border-4 border-black bg-red-200 w-40 h-56 m-4 p-2 flex justify-center text-black-500 text-4xl items-center">
          <i className="fa-regular fa-dice-d6 text-5xl text-red-400"></i>
        </div>
      )}
    </div>
  );
};

export default PlayingCard;
