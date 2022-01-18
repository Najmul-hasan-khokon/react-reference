import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user"> User Gellary</Link>
        </li>
      </ul>

      <div>
        <h1>thi is Home page</h1>
      </div>
    </div>
  );
};

export default Home;
