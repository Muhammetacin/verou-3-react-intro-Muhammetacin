import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-evenly pt-10 text-xl">
        <li>
          <Link to="todos">Todo List</Link>
        </li>
        <li>
          <Link to="counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
