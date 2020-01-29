// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { colors } from "../helpers/theme";
import { formatDate } from "../helpers/formatDate";

const postHeaderStyle = {
  borderBottom: `6px solid ${colors.brandMedium}`,
  paddingBottom: `1rem`,
  marginBottom: `2rem`,
  h1: {
    textTransform: `uppercase`,
    marginBottom: `0.5rem`
  },
  ".date": {
    opacity: 0.6,
    fontSize: `0.8rem`,
    marginTop: `0.2rem`
  }
};

const PostHeader = ({ headline, source, date }) => {
  return (
    <div css={postHeaderStyle}>
      <h1>{headline}</h1>
      <div>
        <span>{source}</span>
      </div>
      <div className={`date`}>
        <span>{formatDate(date)}</span>
      </div>
    </div>
  );
};

export default PostHeader;
