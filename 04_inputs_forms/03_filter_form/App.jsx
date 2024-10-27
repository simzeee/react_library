import { useState } from "react";
import words from "./words.jsx";
import WordItem from "./WordItem.jsx";

const App = () => {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState("");

  const worditems = words
    .filter((word) => word.includes(filterText))
    .map((word, idx) => <WordItem word={word} key={idx} />);

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilterText(text);
        }}
        className="m-8 flex"
      >
        <input
          className="p-2 rounded-l-lg bg-neutral-200"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="px-4 bg-emerald-400 text-white rounded-r-lg hover:bg-emerald-600">
          filter
        </button>
      </form>
      <div className="flex flex-wrap justify-center w-full max-w-lg">
        {worditems}
      </div>
    </div>
  );
};

export default App;
