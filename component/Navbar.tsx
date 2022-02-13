import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ReactSearchBox from "react-search-box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from 'next/link'
function Navbar() {
  const [dropdow, setDropdow] = useState(false);
  function handleClick() {
    setDropdow(!dropdow);
  }
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
              onClick={handleClick}
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
            <ReactSearchBox
              placeholder="Search TXID 🔎"
              onChange={(value: string) => console.log(value)}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Dropdown.Menu show={dropdow}>
        <Dropdown.Header>เลือกเครือข่าย</Dropdown.Header>
        <Dropdown.Item eventKey="2" href ="/">
          <img
            src="https://www.img.in.th/images/349092f50f3b2479fa890dc5f2f2cfc8.png"
            width="38px"
            height="32px"
            alt="Bitcoin logo"
            className="IconSelector"
          />{" "}
          Bitcoin Mainnet
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" href ="/FeeEth">
          <img
            src="https://www.img.in.th/images/0f6b06a68f053745ae474c083cca0213.png"
            width="38px"
            height="32px"
            className="IconSelector"
          />{" "}
          Ethereum Mainnet
        </Dropdown.Item>
      </Dropdown.Menu>
    </Box>
  );
}

export default Navbar;
