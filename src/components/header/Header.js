import * as React from "react";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { pages } from "../../utils";
import ButtonComponent from "../Button";
import "./Header.css";

export const TextButton = styled("div")({
  color: "#000",
  backgroundColor: "transparent",
  fontWeight: "bolder",
  padding: "12px 16px",
  border: "none",
  textTransform: "None",
  fontSize: "16px",
});

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <Grid
      container
      direction="row"
      alignItems="center"
      className="header-container"
    >
      <Grid
        item
        xs={8}
        sm={8}
        md={2}
        sx={{ display: { xs: "flex" } }}
        justifyContent="flex-start"
      >
        <Box>
          <a href="/">
            <img
              src="https://uploads-ssl.webflow.com/63f6b93e52c07002355ba424/63f6c63739759cbe020bd289_ChocoUp.svg"
              loading="lazy"
              alt=""
              className="navbar_logo"
            />
          </a>
        </Box>
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        md={8}
        justifyContent="center"
      >
        {pages.map((page) => (
          <TextButton key={page} onClick={handleCloseNavMenu}>
            {page}
          </TextButton>
        ))}
      </Grid>
      <Grid item xs={4} sm={4} md={2} justifyContent="flex-end">
        <ButtonComponent
          variant="contained"
          onClick={handleOpenUserMenu}
          background="#fff"
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            "&:hover": { backgroundColor: "transparent" },
          }}
          label="Get Funded"
        />
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
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
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
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
