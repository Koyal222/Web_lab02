import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        
        return response.json();
      })
      .then(data => {
        setPosts(data);
      });
  }, [].slice(0,3));

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (

          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
