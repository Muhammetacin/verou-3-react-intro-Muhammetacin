import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Counter from "./Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todos from "./TodoList/Todos";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="todos" element={<Todos />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
