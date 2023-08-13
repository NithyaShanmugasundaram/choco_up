import React from "react";

function ImageComponent({ imgUrl,alt,sx,borderRadius }) {
  return (
    <img
            src={imgUrl}
            loading="lazy"
            alt={alt}
            style={{maxWidth:"100%",display:"block" ,borderRadius:borderRadius ? borderRadius :"0"}}
           
          />
  );
}
export default ImageComponent;
