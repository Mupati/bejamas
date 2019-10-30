import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import MarkdownContent from "../components/MarkdownContent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BlogPosts from "../components/BlogPosts";

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
          <img
            src={
              !!heroImage.childImageSharp
                ? heroImage.childImageSharp.fluid.src
                : heroImage
            }
            alt="hero"
          />
        </div>
      </section>
      <section id="intro">
        <h3 className="intro--heading">{introHeading}</h3>
        <div id="intro-text">
          <div className="intro--image">
            <img
              src={
                !!introImage.childImageSharp
                  ? introImage.childImageSharp.fluid.src
                  : introImage
              }
              alt="introduction"
            />
          </div>
          <article>
            <MarkdownContent content={introDescription} />
          </article>
        </div>
      </section>
      <section id="partners-laptop">
        {logos.map((logo, index) => (
          <img
            src={logo.image.publicURL}
            alt={logo.link}
            key={index}
            className="partners"
          />
        ))}
      </section>
      <section id="partners-mobile">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
          autoPlay={true}
        >
          {logos.map((logo, index) => (
            <div key={index}>
              <a href={logo.link}>
                <img
                  src={logo.image.publicURL}
                  alt="partner"
                  className="partners"
                />
              </a>
            </div>
          ))}
        </Carousel>
      </section>
      <section id="blog-posts">
        <BlogPosts />
      </section>
      <section id="more-button">
        <Link to="/" className="read-more">
          Read More
        </Link>
      </section>
    </>
  );
}

IndexPageTemplate.propTypes = {
  heroHeading: PropTypes.string,
  heroSubheading: PropTypes.string,
  heroImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  introHeading: PropTypes.string,
  introDescription: PropTypes.string,
  introImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  logos: PropTypes.array,
};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout title={`${frontmatter.title} - Recruit Be`}>
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

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
                ...GatsbyImageSharpFluid
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
          image {
            publicURL
          }
          link
        }
      }
    }
  }
`;
