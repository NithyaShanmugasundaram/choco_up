import React from "react";

function ImageComponent({ imgUrl,alt }) {
  return (
    <img
            src={imgUrl}
            loading="lazy"
            alt={alt}
            style={{maxWidth:"100%",display:"block"}}
          />
  );
}
export default ImageComponent;
