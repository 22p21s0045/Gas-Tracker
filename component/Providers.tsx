import React from 'react'
import Box from '@mui/material/Box';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
function Providers() {
  return (
    <div>
        <Box className='BoxProvider' sx ={{ width:916,height:513}}>
            <h1 className="ProvidersHead">DATA Provider</h1>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                <Image src={require('../styles/img/Owlracle.png')} width={280} height={280} className="ImageProvider" alt ="Owlracle" />
                </Grid>
                <Grid item xs={6} md={4}>
                <Image src={require('../styles/img/mempool.png')} width={367} height={85} className="ImageProvider" alt ="Owlracle" />
                </Grid>
            </Grid>
        
        </Box>


    </div>
  )
}

export default Providers