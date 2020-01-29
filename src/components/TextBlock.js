// import React from "react";
import { addTagsToString } from "../helpers/addTagsToString";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const textBlockStyle = {
  p: {
    lineHeight: `1.6`
  }
};

const TextBlock = ({ content }) => {
  if (content.intentions.length) {
    return (
      <div css={textBlockStyle}>
        <p dangerouslySetInnerHTML={{ __html: addTagsToString(content) }} />
      </div>
    );
  }

  return (
    <div css={textBlockStyle}>
      <p>{content.text}</p>
    </div>
  );
};

export default TextBlock;
