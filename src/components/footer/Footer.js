import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import "./Footer.css";
import {
  companyList,
  blogList,
  successList,
  legalList,
  supportList,
} from "../../utils";

function Footer() {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="space-between"
    
      className="footer"
    >
      <Grid item xs={12} md={2}>
        <Box>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c63739759cbe020bd289_ChocoUp.svg"
              loading="lazy"
              alt=""
              className="navbar_logo"
            />
          </a>
          <p className="footer-link-text">
            Asia's largest revenue based financing platform
          </p>
          <div className="footer_social-wrapper">
            <a
              href="https://www.facebook.com/getchocoup/"
              className="footer-link"
            >
              <img
                src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c3297ff49ba2a18b2c30_Facebook_icon_(black)%201.svg"
                loading="lazy"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/getchocoup"
              className="footer-link"
            >
              <img
                src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c329e7294df521c70262_Linkedin_circle%201.svg"
                loading="lazy"
                alt=""
              />
            </a>
          </div>
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box>
          <div className="list_title">Company</div>
          {companyList.map((item) => (
            <div key={item} className="list_item">{item}</div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box>
          <div className="list_title">Resources</div>
          {blogList.map((item) => (
            <div key={item} className="list_item">{item}</div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box>
          <div className="list_title">Success stories</div>
          {successList.map((item) => (
            <div key={item} className="list_item">{item}</div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box>
          <div className="list_title">Support</div>
          {supportList.map((item) => (
            <div key={item} className="list_item">{item}</div>
          ))}
        </Box>
      </Grid>
      <Grid item xs={6} md={2}>
        <Box>
          <div className="list_title">Legal</div>
          {legalList.map((item) => (
            <div key={item} className="list_item">{item}</div>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
export default Footer;
