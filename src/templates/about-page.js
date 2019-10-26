import React from 'react'

import Layout from '../components/Layout'

export function AboutPageTemplate({}) {
  return (
    <>
      <h1>About Page</h1>
    </>
  )
}

AboutPageTemplate.propTypes = {}

function AboutPage() {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  )
}

AboutPage.propTypes = {}

export default AboutPage
