import * as React from "react";


import { Button } from "@mui/material";
import { styled } from "@mui/system";


const StyledButton = styled(Button)(({ color, background,backgroundColor,padding})=>({
          display: "block",
          color: color ? color : "#000",
          fontWeight: "bolder",
          padding:"10px 35px 10px 35px",
          borderRadius: "30px",
          textTransform: "None",
          fontSize: "16px",
          backgroundColor:backgroundColor,
          background: background ? "linear-gradient(97deg,#7352ff,#16cbe1)" :  "none",
          border:"none"
  }));
  
function ButtonComponent({ label,variant,onClick ,fullWidth}) {
    
    return (
        <StyledButton
        variant={variant? variant:"text"}
       onClick={onClick}
       //fullWidth
      >
        {label}
      </StyledButton>
    );
  }
  export default ButtonComponent;
  