import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AvatarComponent from "../Avatar";
import "./VideoFeature.css";

function VideoFeature({ videoFeature }) {
  return (
    <>
    {videoFeature.map((item,index)=>{
        return(
            <Grid item xs={12} md={5} key={item.id}>
            <Box className="video-feature-box">
            <AvatarComponent
             width= "60px" height="60px" color="#7352ff" label={index+1} variant="round" />
            <div className="video-feature-container">
            <div className="video-feature-title">{item.title}</div>
            <div className="video-feature-description">{item.description}</div>
            </div>
            </Box> 
           </Grid>
        )
    })}
    </>
  );
}
export default VideoFeature;
