import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";
import TodoListForm from "./TodoListForm";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoItems = JSON.parse(window.localStorage.getItem("todos"));
    if (todoItems) {
      setTodos(todoItems);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full flex flex-grow items-start justify-center place-content-start bg-teal-50 font-sans py-10">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-5xl">
        {/* Form start */}
        <TodoListForm setTodos={setTodos} />
        {/* Form end */}

        <div>
          {/* Todo Item start */}
          <TodoItems todos={todos} setTodos={setTodos} />
          {/* Todo Item end */}
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;

// Source: https://tailwindcomponents.com/component/todo-list-app
