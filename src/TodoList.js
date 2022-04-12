import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const toggle = (todoTask) => {
    let mapped = todos.map((task) => {
      return task.id === todoTask
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setTodos(mapped);
  };

  return (
    <div className="flex justify-center mb-8">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "line-through" : ""}>
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
};

export default TodoList;
