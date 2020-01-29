import React from "react";

import PostHeader from "../components/PostHeader";
import TextBlock from "../components/TextBlock";
import Image from "../components/Image";
import PullQuote from "../components/PullQuote";
import MissingTemplate from "../components/MissingTemplate";

import { example2 } from "../data/example2";

const Test2 = () => {
  return (
    <div>
      <PostHeader
        headline={example2.headline}
        source={example2.source}
        date={example2.publicationDate}
      />

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
