import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardSlider from "../carousel/Carousel";
import { videoFeature,feature } from "../../utils";
import VideoFeature from "../videoFeature/VideoFeature";
import ImageComponent from "../ImageComponent";
import Features from "../Features";
import ButtonComponent from "../Button";
import "./Content.css";

export default function Content() {
const [filteredArray, setFilteredArray] = React.useState([])

React.useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/users", {
          method: 'GET',
          
        });
        const data = await response.json();
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
    <Box className="content-container">
      <Grid container>
        <Grid item xs={12} md={5}>
        <div className="content-title">Choco Up</div>
          <h4 className="content-desc">
            Helping e-commerce brands grow by providing easy access to working
            capital that's flexible and non-dilutive.
          </h4>
          <h4 className="content-desc">
            Say hello to revenue-based financing.
          </h4> 
         <ButtonComponent label="Get Funded" variant="contained" />
        </Grid>
        <Grid item md={7} sx={{display:{xs:"none",md:"flex"}}}>
        <ImageComponent imgUrl="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b57f2810c50b8ed23301_Group%202389.svg" alt="Choco-up"/>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12} >
      <div className="business-title">Unlock <span className="color-text">Business Growth</span></div>
      </Grid>
      <Grid item xs={12}>
      <><div className="business-title-desc">Manage your cash flow and reach business milestones with accessible growth capital.</div> 
          <div className="business-title-desc">It's e-commerce funding that's fast, flexible and founder-friendly.</div></>
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
  <div  className="success-title"  
  >SUCCESS STORY </div>
  <div className="success-title-desc" 
  >Maximise <span className="color-text"> business potential</span> with
  growth capital investment</div>
  </Grid>
 <Grid item xs={12} md={10}>
  <div className="video_container">
  
  <img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak.webp" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, (max-width: 991px) 90vw, (max-width: 1439px) 88vw, 1010px" srcset="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-500.webp 500w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-800.webp 800w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak-p-1080.webp 1080w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6493d86f985d5fbc9677bff0_thumbnail_Cheak.webp 1280w" alt="" className="video-image"></img>
  </div>
    </Grid>
    <VideoFeature videoFeature={videoFeature}/>
    </Grid>
    <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12} md={12} >
      <div  className="client-title">Client Testimonials</div>
      </Grid>  
        <CardSlider data= {filteredArray}/>
      </Grid> 
    </Box>  
  );
}
