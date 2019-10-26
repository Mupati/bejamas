import React from "react";
import { Link } from "gatsby";

const SinglePost = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <h3>{frontmatter.date}</h3>;
};

export default SinglePost;

export const blogQuery = graphql`
  query SinglePost {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            excerpt
            date
            title
          }
        }
      }
    }
  }
`;
