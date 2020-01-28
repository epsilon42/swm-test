import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test1">Test 1</Link>
          </li>
          <li>
            <Link to="/test2">Test 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
