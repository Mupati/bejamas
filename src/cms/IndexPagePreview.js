import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <IndexPageTemplate
        heroHeading={data.heroHeading}
        heroSubheading={data.heroSubheading}
        heroImage={data.heroImage}
        introHeading={data.introHeading}
        introDescription={data.introDescription}
        introImage={data.introImage}
        logos={data.logos}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
