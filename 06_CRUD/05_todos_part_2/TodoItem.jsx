import { useState } from "react";
import * as TodoService from "./services/todo";
import clsx from "clsx";

const TodoItem = (props) => {
  const { todo, fetchTodos } = props;
  const [editing, setEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);

  return (
    <div className="flex flex-row justify-between p-3 my-2 bg-white border border-gray-200 rounded-md text-stone-500">
      <div className="flex flex-1">
        <button
          onClick={async () => {
            await TodoService.updateTodo(todo.id, {
              text: todo.text,
              complete: !todo.complete,
            });
            fetchTodos();
          }}
        >
          <i
            className={clsx(
              "mr-2 text-xl fa-regular",
              todo.complete
                ? "fa-circle-check text-emerald-600"
                : "fa-circle text-stone-300"
            )}
          ></i>
        </button>
        {editing ? (
          <form
            className="flex flex-1"
            onSubmit={async (e) => {
              e.preventDefault();
              await TodoService.updateTodo(todo.id, {
                text: editingText,
                complete: todo.complete,
              });
              fetchTodos();
              setEditing(false);
            }}
          >
            <input
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="border border-zinc-200 p-1 rounded-md flex-1 text-sky-500"
            />
            <button className="bg-sky-400 text-white px-2 rounded-md ml-2">
              save
            </button>
          </form>
        ) : (
          <div>{todo.text}</div>
        )}
      </div>
      {!editing && (
        <div>
          <button onClick={() => setEditing(true)}>
            <i className="mx-1 fas fa-pen text-zinc-300 hover:text-sky-500" />
          </button>
          <button
            onClick={async () => {
              await TodoService.deleteTodo(todo.id);
              fetchTodos();
            }}
          >
            <i className="mx-1 fas fa-trash text-zinc-300 hover:text-red-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
