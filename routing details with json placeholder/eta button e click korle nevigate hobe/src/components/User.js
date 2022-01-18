import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, id } = user;
  const navigate = useNavigate(); // history er poriborte.

  const userStyle = {
    background: "red",
    color: "white",
    border: "1px solid purple",
    padding: "20px",
    marginBottom: "10px",
  };

  const userHandler = (id) => {
    navigate(`/user/${id}`); // pass url path with id.
  };

  return (
    <div style={userStyle}>
      <button onClick={() => userHandler(id)}>
        <h2>{name}</h2>
      </button>
    </div>
  );
};

export default User;
