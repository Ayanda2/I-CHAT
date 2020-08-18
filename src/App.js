import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./Firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot);
    // every line a new post is created, the code above is activated
    setPosts(snapshot.docs.map((doc) => doc.data()));
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <img className="app_headerImage" src="chat.png" alt="" />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
