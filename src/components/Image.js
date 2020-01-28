import React from "react";

const Image = ({ content }) => {
  return (
    <div>
      <p>{content.captionText}</p>
      <img
        style={{ width: 400, maxWidth: `100%` }}
        src={content.url}
        alt={content.captionText}
      />
    </div>
  );
};

export default Image;
