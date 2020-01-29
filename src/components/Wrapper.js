// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { site } from "../helpers/theme";

const wrapperStyle = {
  maxWidth: `${site.container}`,
  width: `100%`,
  margin: `0 auto`,
  marginBottom: `4rem`,
  padding: `1rem 2rem`
};

const Wrapper = ({ children }) => {
  return <div css={wrapperStyle}>{children}</div>;
};
export default Wrapper;
