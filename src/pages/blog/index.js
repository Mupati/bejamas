import React from "react";

import Layout from "../../components/Layout";
import BlogPosts from "../../components/BlogPosts";

const BlogPage = () => (
  <Layout title="Blog - Recruit Be">
    <h1 className="mobile-margin text-center">Blog Post Page</h1>
    <div id="blog-page">
      <BlogPosts />
    </div>
  </Layout>
);

export default BlogPage;
