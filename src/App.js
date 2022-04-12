import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
  const initialTodos = [];
  //   {
  //     task: "My first todo",
  //     completed: false,
  //   },
  //   {
  //     task: "My second todo",
  //     completed: false,
  //   },
  //   {
  //     task: "My third todo",
  //     completed: false,
  //   },
  //   {
  //     task: "My fourth todo",
  //     completed: false,
  //   },
  //   {
  //     task: "My fifth todo",
  //     completed: false,
  //   },
  // ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App w-4/12 m-auto">
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Form setTodos={setTodos} />
    </div>
  );
}

export default App;
