import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import { mq } from "./helpers/theme";

const globalStyle = css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    font-family: "Merriweather", serif;
  }
  html {
    box-sizing: border-box;
    ${mq.xsmall} {
      font-size: 0.825rem;
    }
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Oswald", sans-serif;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <Global styles={globalStyle} />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
