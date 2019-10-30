import React from "react";

import Layout from "../components/Layout";

export function ProductsPageTemplate({}) {
  return (
    <>
      <h1 className="mobile-margin text-center">Products Page</h1>
    </>
  );
}

ProductsPageTemplate.propTypes = {};

function ProductsPage() {
  return (
    <Layout title={"Products - Recruit Be"}>
      <ProductsPageTemplate />
    </Layout>
  );
}

ProductsPage.propTypes = {};

export default ProductsPage;
