import React from 'react'
import Navbar from "../component/Navbar";
import { useQuery } from "react-query";
import axios from "axios";
import { ShimmerThumbnail } from "react-shimmer-effects";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from 'next/image';
function FeeEth() {
  async function getEth() {
    const { data } = await axios.get(
      "https://owlracle.info/eth/gas"
    );
    return data;
  }
  const { data, error, isError, isLoading } = useQuery("feeEth", getEth);
  console.log(data);
  if (isError) {
    return <div>Error API Fail</div>;
  }
  if (isLoading) {
    return (
      <div>
        <ShimmerThumbnail height={250} rounded />
      </div>
    );
  }

  return (
    
    <div>
      <Navbar/>
      
    </div>
  )
}

export default FeeEth

//api key owlracle = d99a766c2a9c45018c91907d6ff08821
// secret key owlracle = a5214ed85e1b43809b82b4ad389e542c