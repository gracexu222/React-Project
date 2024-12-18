/**
 *   {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
 */

import React, { useState } from "react";

const api = "https://jsonplaceholder.typicode.com/posts";

const FetchApi = () => {
  const [posts, setPosts] = useState([]);

  const apiTrack = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      if (!Array.isArray(data)) {
        alert("json invalid");
      }
      setPosts(Array.isArray(data) ? data : []);
    } catch (error) {
      setPosts([]);
      alert("error");
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={apiTrack}>click on m</button>
      <div>
        {posts.map((p) => (
          <p key={p.id}>
            {p.userId}, {p.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FetchApi;
