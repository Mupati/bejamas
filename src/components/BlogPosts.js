import React from "react";
import { useStaticQuery } from "gatsby";
import SinglePost from "../components/SinglePost";

const BlogPosts = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    posts &&
    posts.map(({ node: post }) => (
      <SinglePost
        thumbnail={post.frontmatter.featuredimage}
        title={post.frontmatter.title}
        excerpt={post.excerpt}
        slug={post.fields.slug}
        key={post.id}
      />
    ))
  );
};

// export default BlogPosts;
export default () => {
  const data = useStaticQuery(graphql`
    query postsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 40)
            fields {
              slug
            }
            frontmatter {
              excerpt
              date
              title
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 120, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return <BlogPosts data={data} />;
};
