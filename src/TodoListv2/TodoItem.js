import React, { useState } from "react";

const TodoItem = ({ todo, editTodoItem, removeFromTodos }) => {
  const [editState, setEditState] = useState(false);

  const toggle = (todoToggled) => {
    todoToggled.completed = !todoToggled.completed;
    editTodoItem(todoToggled);
  };

  const handleEditDone = (event, todoToEdit) => {
    if (event.key === "Enter") {
      setEditState(false);
      if (event.target.value === "") {
        return remove(todoToEdit);
      }
      todoToEdit.task = event.target.value;
      editTodoItem(todoToEdit);
    }

    if (event.key === "Escape") {
      setEditState(false);
    }
  };

  const remove = (todoToRemove) => {
    removeFromTodos(todoToRemove);
  };

  return (
    <div key={todo.id} className="flex mb-4 items-center">
      <button
        onClick={() => toggle(todo)}
        className={
          todo.completed
            ? "shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
            : "shrink-0 p-2 px-6 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"
        }
      >
        {todo.completed ? "Not Done" : "Done"}
      </button>

      {!editState ? (
        <p
          className={
            todo.completed
              ? "w-full line-through text-green-500"
              : "w-full text-gray-900"
          }
          onDoubleClick={() => setEditState(true)}
        >
          {todo.task}
        </p>
      ) : (
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600"
          required
          autoFocus
          defaultValue={todo.task}
          onKeyDown={(event) => handleEditDone(event, todo)}
        />
      )}

      <button
        onClick={() => remove(todo)}
        className="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500 active:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
