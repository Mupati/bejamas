import React from 'react'

import Layout from '../components/Layout'

export function BlogPostTemplate({}) {
  return (
    <>
      <h1>Blog Post Page</h1>
    </>
  )
}

BlogPostTemplate.propTypes = {}

function BlogPost() {
  return (
    <Layout>
      <BlogPostTemplate />
    </Layout>
  )
}

BlogPost.propTypes = {}

export default BlogPost
