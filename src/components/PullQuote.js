// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { colors, mq } from "../helpers/theme";

const pullQuoteStyle = {
  width: `50%`,
  float: `right`,
  backgroundColor: `${colors.grey}`,
  marginLeft: `1rem`,
  marginBottom: `0.5rem`,
  padding: `2.5rem`,
  borderLeft: `6px solid ${colors.brandMedium}`,
  fontSize: `1.2rem`,
  fontWeight: 700,
  position: `relative`,
  zIndex: 1,
  p: {
    marginTop: 0
  },
  cite: {
    fontSize: `1rem`,
    fontWeight: 400
  },
  blockquote: {
    width: `100%`,
    margin: 0
  },
  ".quotemark": {
    "&:after": {
      display: `block`,
      position: `absolute`,
      content: `open-quote`,
      top: `.25rem`,
      left: `.5rem`,
      fontSize: `4rem`,
      color: `black`,
      zIndex: -1,
      opacity: 0.1,
      fontFamily: `"Oswald", sans-serif`
    }
  },
  [mq.xsmall]: {
    float: `none`,
    width: `100%`,
    marginLeft: 0
  }
};

const PullQuote = ({ content }) => {
  return (
    <aside css={pullQuoteStyle}>
      <blockquote>
        <p>{content.text}</p>
        <cite>- {content.attribution}</cite>
      </blockquote>
      <div className={`quotemark`} />
    </aside>
  );
};

export default PullQuote;
