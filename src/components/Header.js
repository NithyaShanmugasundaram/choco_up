import * as React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";


import { Grid } from "@mui/material";
import { styled } from "@mui/system";

import { settings ,pages} from '../utils';



export const roundedButton = styled("div")({
    color: "#7352ff", 
    backgroundColor: "#fff" ,
    fontWeight:"bolder",
    padding:"16px",
    borderRadius:"16px" ,
    textTransform:"None" ,
    fontSize:"16px"
    
  
});

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState(
    null
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Grid container direction="row"  alignItems="center" sx={{px:"25px",py:'16px'}}>
    <Grid item xs={8} sm={8} md={2} sx={{  display: { xs: "flex", } }} justifyContent="flex-start">
    <Box >
        
        <a href="/"><img src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c63739759cbe020bd289_ChocoUp.svg" loading="lazy" alt="" class="navbar_logo"/></a>
        </Box>
    </Grid>
    <Grid item sx={{  display: { xs: "none",sm:"none",md:"flex" } }} md={8} justifyContent="center">
    
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" ,fontWeight:"bolder" ,fontSize:"18px",textTransform:"None"}}
              >
                {page}
              </Button>
            ))}
          
    </Grid>
    <Grid item xs={4} sm={4} md={2}  justifyContent="flex-end">
    <Button
    contained
    fullWidth
    onClick={handleOpenUserMenu}
    sx={{ color: "#7352ff", backgroundColor: "#fff" ,fontWeight:"bolder",px:"35px",py:"10px",borderRadius:"30px" ,textTransform:"None" ,fontSize:"16px",display: { xs: "none",sm:"none", md:"flex"}}}>
    Get Funded
    </Button>
      <Box sx={{display:{xs:"flex",md:"none"},justifyContent:"flex-end"}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="black"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" }
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Grid>
    </Grid>
   
  );
}
export default Header;