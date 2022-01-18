import React from "react";
import { useContext } from "react/cjs/react.development";
import { context } from "../App";

const User = ({ product }) => {
  const [count, setCount] = useContext(context);

  return (
    <div>
      <h1>this is user {count}</h1>
      <p>name : {product.name}</p>
    </div>
  );
};

export default User;
