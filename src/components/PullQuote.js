import React from "react";

const PullQuote = ({ content }) => {
  return (
    <aside style={{ width: `50%`, float: `right`, background: `#ccc` }}>
      <blockquote>
        <p>{content.text}</p>
        <cite>{content.attribution}</cite>
      </blockquote>
    </aside>
  );
};

export default PullQuote;
