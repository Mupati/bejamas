import React from "react";
import { Link } from "gatsby";
import SinglePost from "../components/SinglePost";
import thumbnail from "../assets/img/thumbnail.png";

const BlogPosts = () => {
  return (
    <Link to="/">
      <SinglePost
        thumbnail={thumbnail}
        title="Blog #1"
        excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
    </Link>
  );
};

export default BlogPosts;
