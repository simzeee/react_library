const TodoItem = (props) => {
  const { todo } = props;
  return (
    <div className="bg-white border border-zinc-300 my-2 p-2 rounded-md ">
      <div className="text-zinc-600">
        {todo.complete ? (
          <i className="far fa-check-circle mr-2 text-green-600 text-xl" />
        ) : (
          <i className="far fa-circle text-stone-300 text-xl mr-2" />
        )}

        {todo.text}
      </div>
    </div>
  );
};

export default TodoItem;
