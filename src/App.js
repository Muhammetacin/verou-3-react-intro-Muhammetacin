import React from "react";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import Todos from "./TodoList/Todos";
import Counter from "./Counter/Counter";
import { Landing } from "./Landing";
import TodoListPage from "./TodoListv2/TodoListPage";

function App() {
  return (
    <div className="App flex flex-col h-screen w-full">
      <Navigation />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="todos" element={<Todos />} />
        <Route path="counter" element={<Counter />} />
        <Route path="todosv2" element={<TodoListPage />} />
      </Routes>
    </div>
  );
}

export default App;
