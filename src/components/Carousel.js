import React from "react";
import Carousel from "react-elastic-carousel";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { breakPoints } from "../utils";

const Item = styled("Card")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "100%",
  backgroundColor: "#fff",
  color: "black",
  margin: "15px",
  fontSize: "4em",
});



function CardSlider({ data }) {
  return (
    <div className="carousel-wrapper" style={{ width: "100%" }}>
      <Carousel breakPoints={breakPoints}>
        {data.length > 0 && data.map((item) => (
          <Item key={item}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                <Avatar
                  variant="square"
                  src={item.image}
                  sx={{ width: 60, height: 60, bgcolor: "#7352ff" }}
                ></Avatar>
                <div>
                  <Typography
                    sx={{ px: "20px", fontSize: "22px", fontWeight: "700" }}
                  >
                    {item.firstName}
                  </Typography>
                  <Typography
                    sx={{
                      px: "20px",
                      fontSize: "18px",
                      fontWeight: "400",
                      lineHeight: "32px",
                    }}
                  >
                    {item.email}
                  </Typography>
                </div>
              </Box>

              <Typography>{item.address.address}</Typography>
            </CardContent>
          </Item>
        ))}
      </Carousel>
    </div>
  );
}
export default CardSlider;
