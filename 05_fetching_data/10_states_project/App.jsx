import { useState, useEffect } from "react";
import StateInfo from "./StateInfo";
import ErrorMessage from "./ErrorMessage";

const API_BASE_URL =
  "https://api.react-formula.com/learning-api/demos/states-project/states/";

const App = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  const fetchState = async () => {
    try {
      const response = await fetch(API_BASE_URL + text);

      if (response.status === 200) {
        const stateData = await response.json();
        setState(stateData);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData);
        setState(null);
      }
    } catch (error) {
      console.log(error.message);
      setError(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-xl">
        <form
          className="m-20"
          onSubmit={(e) => {
            e.preventDefault();
            fetchState();
          }}
        >
          <input
            className="p-1 mr-4 border rounded-md border-zinc-300"
            placeholder="enter a U.S. state"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="px-4 py-1 text-teal-600 bg-teal-300 rounded-md">
            search
          </button>
        </form>
        {error && <ErrorMessage message={error.error || error.message} />}
        {state && <StateInfo state={state} />}
      </div>
    </div>
  );
};

export default App;
