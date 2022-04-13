import React from "react";

const TodoListContainer = () => {
  return (
    <div class="w-full flex flex-grow items-center justify-center bg-teal-50 font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-5xl">
        <div class="mb-4">
          <h1 class="text-gray-900 text-4xl font-bold">Todo List</h1>
          <div class="flex mt-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button class="shrink-0 p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">
              Add
            </button>
          </div>
        </div>
        <div>
          <div class="flex mb-4 items-center">
            <p class="w-full text-grey-darkest">
              Add another component to Tailwind Components
            </p>
            <button class="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
              Done
            </button>
            <button class="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
          <div class="flex mb-4 items-center">
            <p class="w-full line-through text-green-500">
              Submit Todo App Component to Tailwind Components
            </p>
            <button class="shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">
              Not Done
            </button>
            <button class="shrink-0 p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListContainer;
