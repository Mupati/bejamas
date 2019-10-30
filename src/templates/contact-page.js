import React from "react";

import Layout from "../components/Layout";

export function ContactPageTemplate({}) {
  return (
    <>
      <h1 className="mobile-margin text-center">Contact Page</h1>
    </>
  );
}

ContactPageTemplate.propTypes = {};

function ContactPage() {
  return (
    <Layout title="Contact - Recruit Be">
      <ContactPageTemplate />
    </Layout>
  );
}

ContactPage.propTypes = {};

export default ContactPage;
