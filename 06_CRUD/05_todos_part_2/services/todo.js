export const getAllTodos = () =>
  fetch("https://api.react-formula.com/learning-api/demos/todo-list-2/todos");

export const createTodo = (text) =>
  fetch("https://api.react-formula.com/learning-api/demos/todo-list-2/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

export const deleteTodo = (id) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${id}`,
    { method: "DELETE" }
  );

export const updateTodo = (id, body) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
