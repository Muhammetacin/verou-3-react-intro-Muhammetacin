import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
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
    <div className="w-full flex flex-grow items-center justify-center bg-teal-50 font-sans">
      {/* TodoList Container start */}
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-5xl">
        {/* Form start */}
        <TodoListForm setTodos={setTodos} />
        {/* Form end */}

        {/* Todo Items start */}
        <div>
          {/* Todo Item start */}
          <TodoItem todos={todos} setTodos={setTodos} />
          {/* Todo Item end */}
        </div>
        {/* Todo Items end */}
      </div>
      {/* TodoList Container end */}
    </div>
  );
};

export default TodoListPage;

// Source: https://tailwindcomponents.com/component/todo-list-app
