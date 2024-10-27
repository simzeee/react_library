import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center p-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ username: username, password: password });
        }}
        className="flex flex-col border border-neutral-300 shadow-lg rounded-lg"
      >
        <div className="p-4 flex flex-col">
          <div className="text-2xl text-neutral-600 mb-4">Sign-In</div>
          <input
            type="text"
            className="my-4 border border-neutral-300 p-2 text-neutral-600"
            value={username}
            placeholder="enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            className="my-4 border border-neutral-300 p-2 text-neutral-600"
            value={password}
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="bg-purple-500 py-2 text-white rounded-b-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
