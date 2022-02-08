import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#000", height: "70px" }}>
        <Toolbar variant="dense" color="#000">
          <Stack spacing={2} direction="row">
            <Button variant="contained" style ={{width: "75px" ,height: "54px",top: "8px"}}>
            <img src="https://www.img.in.th/images/349092f50f3b2479fa890dc5f2f2cfc8.png" alt="Bitcoin logo" width="45px" height="44px" />
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
