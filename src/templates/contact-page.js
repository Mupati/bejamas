import React from 'react'

import Layout from '../components/Layout'

export function ContactPageTemplate({}) {
  return (
    <>
      <h1>Contact Page</h1>
    </>
  )
}

ContactPageTemplate.propTypes = {}

function ContactPage() {
  return (
    <Layout>
      <ContactPageTemplate />
    </Layout>
  )
}

ContactPage.propTypes = {}

export default ContactPage
