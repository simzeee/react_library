import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex text-4xl justify-center h-screen items-center">
      <button
        onClick={() => setCount(count - 1)}
        className="text-white w-8 rounded-md  bg-red-400"
      >
        -
      </button>
      <div className="m-4 text-neutral-400 w-20 text-center">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="text-white w-8 rounded-md text-4xl bg-emerald-400"
      >
        +
      </button>
    </div>
  );
};

export default App;
