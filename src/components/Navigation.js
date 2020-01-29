// import React from "react";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { colors, transition } from "../helpers/theme";

const navigationStyle = {
  margin: `0 auto`,
  background: `black`,
  padding: `1rem`,
  ul: {
    listStyle: `none`,
    margin: `0 auto`,
    display: `flex`,
    justifyContent: `center`,
    paddingLeft: 0,
    li: {
      paddingLeft: `1rem`,
      paddingRight: `1rem`,
      a: {
        color: `${colors.brandLight}`,
        textDecoration: `none`,
        transition: `${transition}`,
        borderBottom: `2px solid transparent`,
        paddingBottom: 2,
        "&:hover": {
          color: `white`,
          borderBottom: `2px solid white`
        }
      }
    }
  }
};

const Navigation = () => {
  return (
    <header css={navigationStyle}>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/test1">Test 1</Link>
          </li>
          <li>
            <Link to="/test2">Test 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
