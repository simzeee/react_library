import * as TodoService from "./services/todo";

const TodoItem = (props) => {
  const { todo, fetchTodos } = props;

  return (
    <div className="flex flex-row justify-between p-3 my-2 bg-white border border-gray-200 rounded-md text-stone-500">
      <div>
        {todo.complete ? (
          <i className="mr-2 text-xl text-emerald-600 fa-regular fa-circle-check"></i>
        ) : (
          <i className="mr-2 text-xl text-stone-300 fa-regular fa-circle"></i>
        )}
        {todo.text}
      </div>
      <button
        onClick={async () => {
          await TodoService.deleteTodo(todo.id);
          fetchTodos();
        }}
      >
        <i className="fas fa-trash text-zinc-300 hover:text-red-400" />
      </button>
    </div>
  );
};

export default TodoItem;
