import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, IconButton, Typography,Avatar } from "@mui/material";
import TestimonialCard from './TestimonialCard'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export const videoFeature=[{num:"1",title:"Increasing product inventory",description:"Using their growth capital from Choco Up to pay for product inventory helped increase their sales and improved their profit margins."},{num:"2",title:"Building a strong women's brand",description:"Creating an activewear brand that catered to Asian women's bodies proved to be a great success as they are now part of the Love, Bonito family."}]
export const feature=["Purchase inventory","No collateral needed","Invest in ads and marketing","Simple, one-time flat fee","Expand into new markets","Use the funds the way you want"]
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Content() {
    const [filteredArray, setFilteredArray] = React.useState([])
    console.log(filteredArray)

React.useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/users", {
          method: 'GET',
          
        });
        const data = await response.json();
        console.log(data.users)
        setFilteredArray(data.users)
      }
      fetchData()
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
          <Button
            contained
            sx={{
              color: "#fff",
              fontWeight: "bolder",
              px: "35px",
              py: "10px",
              borderRadius: "30px",
              textTransform: "None",
              fontSize: "16px",
              background: "linear-gradient(97deg,#7352ff,#16cbe1)",
            }}
          >
            Get Funded
          </Button>
        </Grid>
        <Grid item md={7} sx={{display:{xs:"none",md:"flex"}}}>
          <img
            src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b57f2810c50b8ed23301_Group%202389.svg"
            loading="lazy"
            alt="Choco Up"
            style={{maxWidth:"100%",display:"block"}}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
      <Grid item xs={12}>
      <Typography  sx={{
            color: "black",
            fontSize: "48px",
            fontWeight: "bolder",
            marginBottom:"2px",
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
    <img style={{maxWidth:"100%"}} src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d1ab91823df4e5eaa0f0_RBF-1.webp" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 93vw, 1024px" srcset="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d1ab91823df4e5eaa0f0_RBF-1-p-500.webp 500w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d1ab91823df4e5eaa0f0_RBF-1-p-800.webp 800w, https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/64b0d1ab91823df4e5eaa0f0_RBF-1.webp 1080w" alt="Illustration of how revenue-based financing can unlock growth for e-commerce"></img>
      
      </Grid>
      </Grid>
      <Grid container rowSpacing={2} direction="row" justifyContent="space-around" alignContent="center">
        {feature.map((item)=>{
            return(
                <Grid item md={5} sx={{paddingLeft:'120px',display:{xs:'none',md:"flex"}}}>
                <span style={{display:"flex",alignItems:"center",justifyItems:"center",fontWeight:"500"}}><img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg" loading="lazy" alt=""></img><span>{item}</span></span>
                </Grid>            
)      
    })}
    {feature.map((item)=>{
        return(
            <Grid item xs={12} sx={{display:{xs:'flex',md:"none"}}}>
            <span style={{display:"flex",alignItems:"center",justifyItems:"center",fontWeight:"500"}}><img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg" loading="lazy" alt=""></img><span>{item}</span></span>
            </Grid>            
)
    
})}
       
      
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
    </Grid>
    <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
      <Grid item xs={12} md={12} >
      <Typography variant="h4" align="center">Client Testimonials</Typography>
      </Grid>
      {filteredArray&&filteredArray.map((item,index)=>{
     return(
      <Grid item md={4} >
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Box sx={{display:"flex",alignItems:"flex-start"}}>
      <Avatar
      variant="square"
      src={item.image}
      sx={{ width: 60, height: 60 ,bgcolor:"#7352ff"}}></Avatar>
      <div>
      <Typography sx={{px:"20px",fontSize:'22px',fontWeight:'700'}}>{item.firstName}</Typography>
      <Typography sx={{px:"20px",fontSize:'18px',fontWeight:'400',lineHeight:'32px'}}>{item.email}</Typography>
      </div>
      </Box> 
       
      </CardContent>
     
    </Card>
    </Grid>
     )
        
      
    })}
      </Grid>
    
    </Box>  
  );
}
