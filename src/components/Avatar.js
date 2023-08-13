import React from "react";
import { styled } from "@mui/system";
import { Avatar } from "@mui/material";

const StyledAvatar = styled(Avatar)(({ color, width, height }) => ({
  width: width ? width : 60,
  height: height ? height : 60,
  backgroundColor: color ? color : "transparent",
}));

function AvatarComponent({ variant, image, color, width, height, alt, label }) {
  return (
    <>
      {label ? (
        <StyledAvatar variant={variant} color={color} width={width} height={height}>
          {label}
        </StyledAvatar>
      ) : (
        <StyledAvatar variant={variant} src={image} color={color} alt={alt} width={width} height={height}>
        </StyledAvatar>
      )}
    </>
  );
}
export default AvatarComponent;
