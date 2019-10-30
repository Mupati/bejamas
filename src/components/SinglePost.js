import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../lib/PreviewCompatibleImage";

const SinglePost = ({ thumbnail, title, excerpt, slug }) => {
  return (
    <article className="single--post">
      <Link to={slug}>
        {thumbnail ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: thumbnail,
              alt: `thumbnail for Post ${title}`,
            }}
            className="post-preview--thumbnail"
          />
        ) : null}
        <div className="post-preview--content">
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </div>
      </Link>
    </article>
  );
};

SinglePost.propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
};

export default SinglePost;
