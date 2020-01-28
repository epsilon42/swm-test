import React from "react";
import { addTagsToString } from "../helpers/addTagsToString";

const TextBlock = ({ content }) => {
  if (content.intentions.length) {
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: addTagsToString(content) }} />
      </div>
    );
  }

  return (
    <div>
      <p>{content.text}</p>
    </div>
  );
};

export default TextBlock;
