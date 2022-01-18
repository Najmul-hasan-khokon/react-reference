import React from "react";
import { Link } from "react-router-dom";

const User = ({ photo, id }) => {
  return (
    <div>
      <Link to={"/user/" + id}>
        <div className="m-2">
          <h5>{photo.title}</h5>
          <img className="d-block w-25 h-25" src={photo.urlToImage} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default User;
