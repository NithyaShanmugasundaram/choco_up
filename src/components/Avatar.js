import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

const StyledAvatar = styled(Avatar)(({ color, width, height }) => ({
  width: width ? width : 60,
  height: height ? height : 60,
  backgroundColor: color ? color : "transparent",
}));

function AvatarComponent({ variant, image, color, width, height, alt, label }) {
    console.log(label)
  return (
    <>
      {label ? (
        <StyledAvatar variant={variant} color={color}>
          {label}
        </StyledAvatar>
      ) : (
        <StyledAvatar variant={variant} src={image} color={color} alt={alt}>
        </StyledAvatar>
      )}
    </>
  );
}
export default AvatarComponent;
