import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ReactSearchBox from "react-search-box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#000", height: "70px" }}>
        <Toolbar variant="dense" color="#000">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              style={{
                width: "75px",
                height: "54px",
                top: "8px",
                left: "51px",
                borderRadius: "100px",
                background: "#FFC600",
                opacity: "0.9",
              }}
            >
              <img
                src="https://www.img.in.th/images/349092f50f3b2479fa890dc5f2f2cfc8.png"
                alt="Bitcoin logo"
                width="45px"
                height="44px"
              />
            </Button>
          </Stack>
          <div className="Search">
          <ReactSearchBox placeholder="Search TXID 🔎" onChange ={(value: string) =>console.log(value)}/>
          </div>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}

export default Navbar;
