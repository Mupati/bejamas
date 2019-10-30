import React from "react";

import Layout from "../components/Layout";

export function BlogPostTemplate({}) {
  return (
    <>
      <h1 className="mobile-margin text-center">Blog Post Page</h1>
    </>
  );
}

BlogPostTemplate.propTypes = {};

function BlogPost() {
  return (
    <Layout title="Blog - Recruit Be">
      <BlogPostTemplate />
    </Layout>
  );
}

BlogPost.propTypes = {};

export default BlogPost;
