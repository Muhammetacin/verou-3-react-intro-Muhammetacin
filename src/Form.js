import React, { useRef } from "react";
import { v4 as uuidv4, v1 as uuidv1 } from "uuid";

const Form = ({ setTodos }) => {
  const inputRef = useRef();
  const clickAction = (event) => {
    event.preventDefault();
    const inputTodo = inputRef.current;

    const id = uuidv1();
    const task = inputTodo.value;
    const completed = false;

    setTodos((prevTodos) => [...prevTodos, { id, task, completed }]);

    inputTodo.value = "";
  };
  return (
    <form
      onSubmit={clickAction}
      className="flex flex-col justify-center z-0 mb-6 w-1/2 mx-auto"
    >
      <input
        type="text"
        ref={inputRef}
        className="text-center block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
        placeholder="Buy groceries"
        required
      />
      <input
        type="submit"
        value="Add To Do"
        className="mx-auto text-white bg-teal-500 rounded-xl m-auto mt-5 py-2 w-32"
      />
    </form>
  );
};

export default Form;
