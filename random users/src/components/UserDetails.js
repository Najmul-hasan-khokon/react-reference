import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const UserDetails = () => {
  const params = useParams();
  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=04093e6ce01e4e5194c79410a05a826a"
    )
      .then((res) => res.json())
      .then((data) => setGetUser(data.articles))
      .catch((err) => console.log(err));
  }, []);

  // ekhane ekta trick khataici je ager title ba id er stahe current title mach khaile
  // ekta new array pabo then setake abar map kore output dekhaici.
  const result = getUser.filter((i) => {
    return i.title === params.id;
  });

  return (
    <div>
      {result.map((r) => (
        <div key={r.title} className="w-50 text-center">
          <h1 className="m-5">User's Details :</h1>
          <h4>
            <strong>Author</strong> : {r.author}
          </h4>
          <h4>
            <strong>Title</strong> : {r.title}
          </h4>
          <p>
            <strong>Description </strong>: {r.description}
          </p>
          <img className="w-50" src={r.urlToImage} alt="user img" />

          {/* / abar back e jawar link */}
          <h3>
            <Link to="/user">Back to User</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
