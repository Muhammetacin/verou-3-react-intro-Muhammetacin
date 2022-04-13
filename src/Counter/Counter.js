import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-purple-200 flex flex-col justify-center text-center mx-auto h-96">
      <h2 className="text-4xl font-semibold">
        You clicked <span className="text-violet-600 font-bold">{count}</span>{" "}
        times
      </h2>
      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white m-6 py-2.5 px-8 self-center rounded-full"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
