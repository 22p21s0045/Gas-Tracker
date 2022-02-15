import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
function Providers() {
  return (
    <div>
      <Grid container   justifyContent="center">
        <Grid item xs={12} md={4}>
        <Box className="BoxProvider" sx={{
    width: {
      xs: 455, // theme.breakpoints.up('xs')
      sm: 750, // theme.breakpoints.up('sm')
      md: 916, // theme.breakpoints.up('md')
      lg: 916, // theme.breakpoints.up('lg')
      xl: 916, // theme.breakpoints.up('xl')
    },
    height: {
      xs: 455, // theme.breakpoints.up('xs')
      sm: 600, // theme.breakpoints.up('sm')
      md: 453, // theme.breakpoints.up('md')
      lg: 453, // theme.breakpoints.up('lg')
      xl: 453, // theme.breakpoints.up('xl')
    },
  }}>
          <h1 className="ProvidersHead">DATA Provider</h1>
          <Grid container spacing={2} justifyContent = "center">
            <Grid item xs={6} md={4}>
              <Image
                src={require("../styles/img/Owlracle.png")}
                width={280}
                height={280}
                className="ImageProvider"
                alt="Owlracle"
                
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Image
                src={require("../styles/img/mempool.png")}
                width={367}
                height={85}
                className="ImageProvider"
                alt="Owlracle"
                
              />
            </Grid>
          </Grid>
        </Box>
        </Grid>
        </Grid>
     
    </div>
  );
}

export default Providers;
