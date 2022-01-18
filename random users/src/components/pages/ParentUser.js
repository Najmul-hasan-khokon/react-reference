import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import User from "../User";

const ParentUser = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=04093e6ce01e4e5194c79410a05a826a"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.articles))
      .catch((err) => console.log(err));
  }, []);
  // console.log(photos);

  return (
    <div>
      <ul className="">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User Gellary</Link>
        </li>
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo, index) => (
          <div key={photo.url}>
            <User photo={photo} id={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentUser;
