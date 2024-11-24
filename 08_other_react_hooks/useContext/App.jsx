import { useState } from "react";
import Container from "./Container";
import MessageContext from "./MessageContext";

const App = () => {
  const [message, setMessage] = useState("hello world");

  return (
    <>
      <div className="flex flex-wrap justify-center my-12">
        <button
          className="px-6 py-2 m-4 rounded-full bg-stone-200"
          onClick={() => setMessage("hello world")}
        >
          hello world
        </button>
        <button
          className="px-6 py-2 m-4 rounded-full bg-stone-200"
          onClick={() => setMessage("hey programmers")}
        >
          hey programmers
        </button>
      </div>
      <MessageContext.Provider value={{ message, setMessage }}>
        <Container message={message} />
      </MessageContext.Provider>
    </>
  );
};

export default App;
