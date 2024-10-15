import { useState } from "react";

const App = () => {
  const [numBlocks, setNumBlocks] = useState(2);
  const myBlocks = [];

  for (let i = 0; i < numBlocks; i++) {
    myBlocks.push(<div className="w-24 h-8 bg-green-400 m-2" key={i}></div>);
  }

  return (
    <div className="flex flex-col items-center justify-end h-screen">
      <div className="border-b-4 border-neutral-500 p-2">{myBlocks}</div>
      <div>
        <button
          onClick={() => {
            if (numBlocks > 0) {
              setNumBlocks(numBlocks - 1);
            }
          }}
          className="m-2 p-2 rounded-lg bg-yellow-200 text-yellow-600"
        >
          Remove Block
        </button>
        <button
          onClick={() => {
            if (numBlocks < 8) {
              setNumBlocks(numBlocks + 1);
            }
          }}
          className="m-2 p-2 rounded-lg bg-blue-200 text-blue-600"
        >
          Add Block
        </button>
      </div>
    </div>
  );
};

export default App;
