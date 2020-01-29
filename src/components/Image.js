// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { transition } from "../helpers/theme";

const imageStyle = {
  margin: 0,
  color: `white`,
  position: `relative`,
  img: {
    maxWidth: `100%`,
    width: `100%`,
    display: `block`
  },
  figcaption: {
    padding: `.5rem`,
    fontSize: `0.8rem`,
    position: `absolute`,
    bottom: 0,
    left: 0,
    zIndex: 1,
    background: `rgba(0,0,0,.8)`,
    width: `100%`,
    transition: `${transition}`
  },
  "&:hover": {
    figcaption: {
      background: `rgba(0,0,0,1)`
    }
  }
};

const Image = ({ content }) => {
  return (
    <figure css={imageStyle}>
      <img src={content.url} alt={content.captionText} />
      <figcaption>{content.captionText}</figcaption>
    </figure>
  );
};

export default Image;
