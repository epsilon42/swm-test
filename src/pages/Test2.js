import React from "react";

import TextBlock from "../components/TextBlock";
import Image from "../components/Image";
import PullQuote from "../components/PullQuote";
import MissingTemplate from "../components/MissingTemplate";

import { example2 } from "../data/example2";

const Test2 = () => {
  return (
    <div>
      <h2>Test2</h2>
      {example2.blocks.map((block, index) => {
        const BlockTypes = {
          text: <TextBlock key={index} content={block} />,
          image: <Image key={index} content={block} />,
          "pull-quote": <PullQuote key={index} content={block} />,
          default: <MissingTemplate key={index} content={block} />
        };
        return BlockTypes[block.kind] || BlockTypes.default;
      })}
    </div>
  );
};

export default Test2;
