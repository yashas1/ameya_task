import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const styles = {
    // this group of buttons will be aligned to the right side
    toolbarButtons: {
      marginRight: "auto",
    },
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" variant="h6" component="div">
            Ameya
          </Typography>
          <Box sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ flexGrow: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
