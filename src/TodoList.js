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

  //   const addTodo = (task) => {
  //     let mapped = todos.map(() => {
  //       return { id: 0, task, completed: false };
  //     });
  //     setTodos(mapped);
  //   };

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
