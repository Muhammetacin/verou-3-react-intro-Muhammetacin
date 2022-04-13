import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import React, { useState, useEffect } from "react";

const Todos = () => {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const todoItems = JSON.parse(window.localStorage.getItem("todos"));
    console.log(todoItems);
    if (todoItems) {
      setTodos(todoItems);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-4/12 m-auto">
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Form setTodos={setTodos} />
    </div>
  );
};

export default Todos;
