import React from "react";
import Carousel from "react-elastic-carousel";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AvatarComponent from "./Avatar";
import { breakPoints } from "../utils";
import { Grid  } from "@mui/material";
import "./Carousel.css";

const Item = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "#fff",
  color: "black",
  margin: "15px",
  fontSize: "4em",
  borderRadius: "1rem",
  boxShadow: "0 0 20px -7px rgba(0,0,0,.2)",
  padding: "20px",
});


function CardSlider({ data }) {
  return (
    <div className="carousel-wrapper" style={{width:"100%"}}>
      <Carousel breakPoints={breakPoints}>
        {data.length > 0 &&
          data.map((item) => (
            <Item key={item}>
              <Grid
                container
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} md={4}>
                  <AvatarComponent
                    variant="square"
                    image={item.image}
                    color="#7352ff"
                    width="auto"
                    
                />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography>{item.firstName}</Typography>
                  <Typography>{item.email}</Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography>{item.address.address}</Typography>
                </Grid>
              </Grid>
            </Item>
          ))}
      </Carousel>
    </div>
  );
}
export default CardSlider;
