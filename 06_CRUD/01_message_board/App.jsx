import { useState, useEffect } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [username, setUserName] = useState("");

  const fetchMessages = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/message-board/messages"
    )
      .then((response) => response.json())
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const messageItems = messages.map((message, idx) => (
    <div
      key={idx}
      className="p-6 m-4 border border-gray-300 rounded-md shadow-md"
    >
      <div className="mb-2 text-lg font-medium">{message.username}</div>
      <div>{message.message}</div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, message: text });
    fetch(
      "https://api.react-formula.com/learning-api/demos/message-board/messages",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, message: text }),
      }
    ).then(() => {
      fetchMessages();
      setText("");
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-xl ">
        {messageItems}
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="p-1 m-2 border border-gray-300 rounded-md w-24"
          ></input>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="p-1 m-2 border border-gray-300 rounded-md w-80"
          ></input>
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
