import { useState } from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const App = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const calculateIndex = (change) => {
    if (change === "negative") {
      if (index === 0) {
        setIndex(0);
      } else {
        setIndex(index - 1);
      }
    }
    if (change === "positive") {
      if (index === IMAGE_URLS.length - 1) {
        setIndex(IMAGE_URLS.length - 1);
      } else {
        setIndex(index + 1);
      }
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mt-6 text-center text-cyan-400 text-2xl">
        Dog {index + 1}{" "}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => calculateIndex("negative")}
          className="bg-cyan-400 rounded-full w-8 h-8 text-cyan-100"
        >
          <i className="fa-solid fa-chevrons-left"></i>
        </button>
        <img
          className="m-8 rounded-lg w-[200px] h-[300px] object-cover"
          src={IMAGE_URLS[index]}
        />
        <button
          className="bg-cyan-400 rounded-full w-8 h-8 text-cyan-100"
          onClick={() => calculateIndex("positive")}
        >
          <i className="fa-solid fa-chevrons-right"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
