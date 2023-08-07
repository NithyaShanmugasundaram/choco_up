import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography,Avatar } from "@mui/material";
import { styled } from "@mui/system";
//const background = props => props.background

const StyledButton = styled("Button")({
    color: "#fff",
    fontWeight: "bolder",
          padding:"10px 35px 10px 35px",
          borderRadius: "30px",
          textTransform: "None",
          fontSize: "16px",
          background: "linear-gradient(97deg,#7352ff,#16cbe1)",
          border:"none"
  });
  
function ButtonComponent({ label,variant,background }) {
    console.log(background)
    return (
        <StyledButton
        variant={variant}
        background
      >
        {label}
      </StyledButton>
    );
  }
  export default ButtonComponent;
  