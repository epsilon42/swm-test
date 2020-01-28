import React from "react";
import TextBlock from "../components/TextBlock";

import { example1 } from "../data/example1";

const Test1 = () => {
  return (
    <div>
      <h2>Test1</h2>
      <TextBlock content={example1} />
    </div>
  );
};

export default Test1;
