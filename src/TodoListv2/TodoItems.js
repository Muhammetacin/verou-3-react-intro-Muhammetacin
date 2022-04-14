import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todos, setTodos }) => {
  const editTodoItem = (todoItem2) => {
    let mapped = todos.map((todo) => {
      return todo.id === todoItem2.id ? { ...todoItem2 } : { ...todo };
    });
    setTodos(mapped);
  };

  const removeFromTodos = (todoToRemove) => {
    const newTodoList = todos.filter(
      (todoItem) => todoItem.id !== todoToRemove.id
    );
    setTodos(newTodoList);
  };

  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      editTodoItem={editTodoItem}
      removeFromTodos={removeFromTodos}
    />
  ));
};

export default TodoItems;
