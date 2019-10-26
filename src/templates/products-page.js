import React from 'react'

import Layout from '../components/Layout'

export function ProductsPageTemplate({}) {
  return (
    <>
      <h1>Products Page</h1>
    </>
  )
}

ProductsPageTemplate.propTypes = {}

function ProductsPage() {
  return (
    <Layout>
      <ProductsPageTemplate />
    </Layout>
  )
}

ProductsPage.propTypes = {}

export default ProductsPage
