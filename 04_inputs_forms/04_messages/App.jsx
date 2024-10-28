import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    "hey programmers",
    "what is up",
    "hello world",
  ]);

  const messageItems = messages.map((message, idx) => (
    <div
      className="border border-gray-300 px-6 py-3 m-2 rounded-full text-gray-600"
      key={idx}
    >
      {message}
    </div>
  ));

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text != "") {
            setMessages([...messages, text]);
          }
          setText("");
        }}
        className="flex m-8"
      >
        <input
          value={text}
          placeholder="send a message"
          onChange={(e) => setText(e.target.value)}
          className="focus:outline-purple-600 border border-gray-300 p-2 rounded-md w-80"
        />
        <button className="bg-purple-200 text-purple-800 px-8 rounded ml-2">
          send
        </button>
      </form>
      <div className="flex flex-col max-w-md w-full">{messageItems}</div>
    </div>
  );
};

export default App;
