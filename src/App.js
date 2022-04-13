import React from "react";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import Todos from "./TodoList/Todos";
import Counter from "./Counter/Counter";
import { Landing } from "./Landing";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Navigation />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="todos" element={<Todos />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
