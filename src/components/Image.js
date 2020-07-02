import React from "react";

function Image({ imageUrl, ...extras }) {
  return <img src={imageUrl} {...extras} />;
}

export default Image;
