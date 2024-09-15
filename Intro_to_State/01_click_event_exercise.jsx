import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("John was here!");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-3xl text-stone-400">{val}</div>
      <div className="mt-4">
        <button
          className="m-2 px-4 py-2 text-white bg-green-400 rounded-md"
          onClick={() => setVal("yaaay")}
        >
          one
        </button>
        <button
          className="m-2 px-4 py-2 text-white bg-red-400 rounded-md"
          onClick={() => setVal("woooh")}
        >
          two
        </button>
        <button
          className="m-2 px-4 py-2 text-white bg-violet-400 rounded-md"
          onClick={() => setVal("bye")}
        >
          three
        </button>
      </div>
    </div>
  );
};

export default App;
