
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography} from "@mui/material";
import AvatarComponent from "./Avatar";

function VideoFeature({ videoFeature }) {
  return (
    <>
    {videoFeature.map((item,index)=>{
        return(
            <Grid item xs={12} md={5} key={item.id}>
            <Box sx={{display:"flex",alignItems:"flex-start"}}>
            <AvatarComponent
             width= "60px" height="60px" color="#7352ff" label={index+1} variant="round" />
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
