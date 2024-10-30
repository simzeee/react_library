import { useState } from "react";
import Joke from "./Joke";

const JOKE = {
  question: "Why don't eggs tell jokes?",
  answer: "They'd crack each other up.",
};

const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    console.log("click");
    fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
        setShowAnswer(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {joke && <Joke showAnswer={showAnswer} joke={joke}></Joke>}
      {!showAnswer && (
        <button
          onClick={() => setShowAnswer(true)}
          className="mt-2 bg-green-500 text-green-200 rounded-lg p-4"
        >
          reveal answer
        </button>
      )}
      <button
        onClick={fetchJoke}
        className="bg-red-500 text-green-200 rounded-lg p-4 mt-4"
      >
        get new joke
      </button>
    </div>
  );
};

export default App;
