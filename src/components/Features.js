import * as React from "react";
import Grid from "@mui/material/Grid";

function Features({ feature }) {
  return (
    <>
      {feature.map((item) => {
        return (
          <Grid
            item
            md={5}
            sx={{ paddingLeft: "120px", display: { xs: "none", md: "flex" } }}
            key={item}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                fontWeight: "500",
              }}
            >
              <img
                src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
                loading="lazy"
                alt=""
              ></img>
              <span>{item}</span>
            </span>
          </Grid>
        );
      })}
      {feature.map((item) => {
        return (
          <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }} key={item}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                fontWeight: "500",
              }}
            >
              <img
                src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/6413b72d5b5e4a2233dffead_icon.svg"
                loading="lazy"
                alt=""
              ></img>
              <span>{item}</span>
            </span>
          </Grid>
        );
      })}
    </>
  );
}
export default Features;
