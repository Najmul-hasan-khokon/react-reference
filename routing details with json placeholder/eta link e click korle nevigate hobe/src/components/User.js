import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, id } = user;

  const userStyle = {
    background: "red",
    color: "white",
    border: "1px solid purple",
    padding: "20px",
    marginBottom: "10px",
  };

  const linkColor = { color: "white" };
  return (
    <div style={userStyle}>
      <Link to={`/user/${id}`} style={linkColor}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default User;
