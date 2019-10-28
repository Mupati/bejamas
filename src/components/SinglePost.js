import React from "react";

const SinglePost = ({ thumbnail, title, excerpt }) => {
  return (
    <article className="single--post">
      <div
        className="post-preview--thumbnail"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "4px",
        }}
      ></div>
      <div className="post-preview--content">
        <h1>{title}</h1>
        <p>{excerpt}</p>
      </div>
    </article>
    // <article>
    //   <img src={thumbnail} alt="kofi" />
    //   <h3>{title}</h3>
    //   <p>{excerpt}</p>
    // </article>
  );
};

export default SinglePost;
