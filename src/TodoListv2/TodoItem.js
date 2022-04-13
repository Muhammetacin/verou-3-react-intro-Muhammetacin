import React from "react";

const TodoItem = ({ todos, setTodos }) => {
  //   const [todos, setTodos] = useState([
  //     { id: 1, task: "Hello React", completed: true },
  //     { id: 2, task: "Hello Another React", completed: false },
  //     { id: 2, task: "Hello Another React 2", completed: true },
  //   ]);
  const toggle = (todoId) => {
    let mapped = todos.map((task) => {
      return task.id === todoId
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodos(mapped);
  };

  const remove = (todoId) => {
    const newTodoList = todos.filter((todoItem) => todoItem.id !== todoId);
    setTodos(newTodoList);
  };

  return todos.map((todo) => (
    <div key={todo.id} className="flex mb-4 items-center">
      <p
        className={
          todo.completed
            ? "w-full line-through text-green-500"
            : "w-full text-gray-900"
        }
      >
        {todo.task}
      </p>
      <button
        onClick={() => toggle(todo.id)}
        className={
          todo.completed
            ? "shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
            : "shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"
        }
      >
        {todo.completed ? "Not Done" : "Done"}
      </button>

      <button
        onClick={() => remove(todo.id)}
        className="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
      >
        Remove
      </button>
    </div>
  ));
};

export default TodoItem;
