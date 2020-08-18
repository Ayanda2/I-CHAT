import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        {/* header +avatar+usernme */}
        <Avatar
          className="post_avatar"
          alt="Ayanda"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/* image */}
      <img className="post_image" src={imageUrl} alt="" />

      {/*useranme + caption  */}
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;