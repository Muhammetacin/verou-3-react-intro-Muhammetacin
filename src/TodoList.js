import React, { useState } from "react";

export default function TodoList() {
  const initialTodos = [
    {
      id: 1,
      task: "My first todo",
      completed: false,
    },
    {
      id: 2,
      task: "My second todo",
      completed: false,
    },
    {
      id: 3,
      task: "My third todo",
      completed: false,
    },
    {
      id: 4,
      task: "My fourth todo",
      completed: false,
    },
    {
      id: 5,
      task: "My fifth todo",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const toggle = (id) => {
    let mapped = todos.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodos(mapped);
  };

  console.log(todos);
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "strike" : ""}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => toggle(todo.id)}
            />{" "}
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
