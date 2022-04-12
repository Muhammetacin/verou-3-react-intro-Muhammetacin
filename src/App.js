import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import React, { useState } from "react";

function App() {
  const initialTodos = [];
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
