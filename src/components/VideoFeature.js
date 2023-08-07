
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography,Avatar } from "@mui/material";

function VideoFeature({ videoFeature }) {
  return (
    <>
    {videoFeature.map(item=>{
        return(
            <Grid item xs={12} md={5}>
            <Box sx={{display:"flex",alignItems:"flex-start"}}>
            <Avatar
            sx={{ width: 60, height: 60 ,bgcolor:"#7352ff"}}>{item.num}</Avatar>
            <div>
            <Typography sx={{px:"20px",fontSize:'22px',fontWeight:'700'}}>{item.title}</Typography>
            <Typography sx={{px:"20px",fontSize:'18px',fontWeight:'400',mt:"10px",lineHeight:'32px'}}>{item.description}</Typography>
            </div>
            </Box> 
           </Grid>
        )
    })}
    </>
  );
}
export default VideoFeature;
