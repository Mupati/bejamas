import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export function IndexPageTemplate({
  heroHeading,
  heroSubheading,
  heroImage,
  introHeading,
  introDescription,
  introImage,
  logos,
}) {
  return (
    <>
      <section style={{ minHeight: "100vh" }} id="hero">
        <div id="hero-text">
          <h3 className="hero--heading">{heroHeading}</h3>
          <p className="hero--subheading">{heroSubheading}</p>
        </div>
        <div className="hero--image">
          <img src={heroImage.childImageSharp.fluid.src} alt="hero" />
        </div>
      </section>
      <section id="intro">
        <h3 className="intro--heading text-center">{introHeading}</h3>
        <div id="intro-text">
          <div className="intro--image">
            <img
              src={introImage.childImageSharp.fluid.src}
              alt="introduction"
            />
          </div>
          <article>{introDescription}</article>
        </div>
      </section>
      <section id="logos">
        {logos.map((logo, index) => (
          <img src={logo.image} alt={logo.link} key={index} />
        ))}
      </section>
    </>
  );
}

IndexPageTemplate.propTypes = {};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout title={frontmatter.title}>
      <IndexPageTemplate
        heroHeading={frontmatter.hero.heading}
        heroSubheading={frontmatter.hero.subheading}
        heroImage={frontmatter.hero.image}
        introHeading={frontmatter.intro.heading}
        introDescription={frontmatter.intro.description}
        introImage={frontmatter.intro.image}
        logos={frontmatter.logos}
      />
    </Layout>
  );
}

IndexPage.propTypes = {};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
      }
      frontmatter {
        templateKey
        title
        hero {
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                src
              }
            }
          }
        }
        intro {
          heading
          description
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                src
              }
            }
          }
        }
        logos {
          image
          link
        }
      }
    }
  }
`;
