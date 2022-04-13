import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoListForm = ({ setTodos }) => {
  const inputRef = useRef();

  const clickAction = (event) => {
    event.preventDefault();
    const inputTodo = inputRef.current;

    const id = uuidv4();
    const task = inputTodo.value;
    const completed = false;

    setTodos((prevTodos) => [...prevTodos, { id, task, completed }]);

    inputTodo.value = "";
  };

  return (
    <div className="mb-4">
      <h1 className="text-gray-900 text-4xl font-bold">Todo List</h1>
      <div className="flex mt-4">
        <form onSubmit={clickAction} className="flex flex-row w-full">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600"
            placeholder="Add Todo"
            ref={inputRef}
            required
          />
          <input
            type="submit"
            value="Add"
            className="shrink-0 p-2 px-8 border-2 rounded text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400 active:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300"
          />
        </form>
      </div>
    </div>
  );
};

export default TodoListForm;
