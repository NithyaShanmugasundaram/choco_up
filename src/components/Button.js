import * as React from "react";

import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(
  ({ color, background, backgroundColor }) => ({
    display: "block",
    color: color ? color : "#000",
    fontWeight: "bolder",
    padding: "10px 35px 10px 35px",
    borderRadius: "30px",
    textTransform: "None",
    fontSize: "16px",
    background: background
      ? background
      : "linear-gradient(97deg,#7352ff,#16cbe1)",
    border: "none",
  })
);

function ButtonComponent({
  label,
  variant,
  onClick,
  color,
  background,
  backgroundColor,
  sx,
}) {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disableRipple
      disableFocusRipple
      disableTouchRipple
      sx={sx}
      color={color}
      background={background}
    >
      {label}
    </StyledButton>
  );
}
export default ButtonComponent;
