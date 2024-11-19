import { useState, useEffect } from "react";
import * as TodoService from "./services/todo.js";
import Todo from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [creating, setCreating] = useState(false);
  const [createText, setCreateText] = useState("");

  const fetchTodos = async () => {
    const response = await TodoService.getAllTodos();
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-green-300 flex justify-center items-start">
      <div className="bg-zinc-100 w-full max-w-sm mt-40 rounded-md p-4 flex flex-col">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
        {creating ? (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await TodoService.createTodo(createText);
              setCreating(false);
              setCreateText("");
              fetchTodos();
            }}
            className="flex flex-col"
          >
            <input
              onChange={(e) => setCreateText(e.target.value)}
              value={createText}
              placeholder="enter some text"
              className="bg-white border border-zinc-300 my-2 p-2 rounded-md text-blue-500"
            />
            <button className="bg-sky-500 text-white p-2 rounded-md mt-4">
              save
            </button>
          </form>
        ) : (
          <button
            onClick={() => setCreating(true)}
            className="rounded-md p-2 hover:bg-zinc-300 text-zinc-500 mt-2"
          >
            <i className="fas fa-plus text-xl mr-2" /> Add Todo
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
