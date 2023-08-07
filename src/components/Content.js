import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography,Avatar } from "@mui/material";
import CardSlider from "./Carousel";
import { videoFeature,feature } from "../utils";
import VideoFeature from "./VideoFeature";
import ImageComponent from "./ImageComponent";
import Features from "./Features";
import ButtonComponent from "./Button";

export default function Content() {
    const [filteredArray, setFilteredArray] = React.useState([])

React.useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/users", {
          method: 'GET',
          
        });
        const data = await response.json();
        console.log(data.users)
        const slicedArray = data.users.slice(0, 6);
        setFilteredArray(slicedArray)
      }
      try {
        fetchData()
      } catch (error) {
        console.log(error)
      }
      
},[]);
    
  
  return (

    <Box sx={{px:"25px",py:'16px'}}>
      <Grid container>
        <Grid item xs={12} md={5} sx={{}}>
        <Typography sx={{ fontSize: "64px" ,fontWeight:700}}>Choco Up</Typography>
          <h4>
            Helping e-commerce brands grow by providing easy access to working
            capital that's flexible and non-dilutive.
          </h4>
          <h4 sx={{ fontWeight: "lighter" }}>
            Say hello to revenue-based financing.
          </h4> 
         <ButtonComponent label="Get Funded" variant="contained" />
        </Grid>
        <Grid item md={7} sx={{display:{xs:"none",md:"flex"}}}>
        <ImageComponent imgUrl="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b57f2810c50b8ed23301_Group%202389.svg" alt="Choco-up"/>
          
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" >
      <Grid item xs={12}>
      <Typography  sx={{
            color: "black",
            fontSize: "48px",
            fontWeight: "bolder",
            my:"5px",
            textTransform: "None",
            textAlign:"center",
            lineHeight:"1.2em",
            
          }}>Unlock <span sx={{color:"#7352ff"}}>Business Growth</span></Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography  sx={{
            color: "black",
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom:"2px",
            textTransform: "None",
            textAlign:"center"
            
          }}><div>Manage your cash flow and reach business milestones with accessible growth capital.</div> 
          <div>It's e-commerce funding that's fast, flexible and founder-friendly.</div></Typography>
      </Grid>
      
      <Grid item xs={12} md={8} sx={{py:"20px"}} justifyContent="center">
    
    <ImageComponent imgUrl="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d1ab91823df4e5eaa0f0_RBF-1.webp" alt="Choco-up"/>
      </Grid>
      </Grid>
      <Grid container rowSpacing={2} direction="row" justifyContent="space-around" alignContent="center">
        <Features feature={feature}/>
       
      
      </Grid>
      <Grid container direction="row" justifyContent="center" alignContent="center" sx={{py:"20px"}}>
      
  <Grid item xs={12} md={8}>
  <Typography  sx={{
    color:"#7352ff",
    fontSize: "16px",
    fontWeight: "bolder",
    
    textAlign:"center"
    
  }}>SUCCESS STORY </Typography>
  <Typography  sx={{
    color:"#7352f",
    fontSize: "40px",
    fontWeight: "bolder",
    lineHeight:"1.2em",
    textAlign:"center"
    
  }}>Maximise <span style={{color:"#7352ff"}}> business potential</span> with
  growth capital investment</Typography>
  </Grid>
 <Grid item xs={12} md={10}>
  <div className="video_container" style={{border:"30px solid #fff",borderRadius:'50px'}}>
  <img style={{maxWidth:"100%",display:"block",borderRadius:"50px"}}src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak.webp"/>
  </div>
    </Grid>
    <VideoFeature videoFeature={videoFeature}/>
    
    </Grid>
    <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12} md={12} >
      <Typography variant="h4" align="center" sx={{my:'10px'}}>Client Testimonials</Typography>
      </Grid>
      
        <CardSlider data= {filteredArray}/>
      </Grid>
    
    </Box>  
  );
}
