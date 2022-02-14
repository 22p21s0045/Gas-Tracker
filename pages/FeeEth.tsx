import React from 'react'
import Navbar from "../component/Navbar";
import { useQuery } from "react-query";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from 'next/image';
import Skeleton from "@mui/material/Skeleton";
function FeeEth(props: any) {
  async function getEth() {
    const { data } = await axios.get(
      "https://owlracle.info/eth/gas?apikey=d99a766c2a9c45018c91907d6ff08821"
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
        <Skeleton variant="rectangular" width={10000} height={150} />
        <Grid container spacing={2} style ={{marginTop: 100}}>
          <Grid item xs={6} md={4}>
            <Skeleton variant="rectangular" width={250} height={250} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="rectangular" width={250} height={250} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="rectangular" width={250} height={250} />
          </Grid>
        </Grid>
      </div>
    );
  }
let array = [data];
let maps = array.map((item: any) => {
  return (
    <div key={item}>
      <Grid container spacing={2}>
        <Grid item xs={6} md ={4}>
          <Image src ="https://www.img.in.th/images/ff70cf7ad7f59664d82983ae4a9b2627.gif" width ={200} height={200}  className ="ImageFee"/>
          <Card sx={{ maxWidth: 255 }} className="BoxFeeEth" style={{backgroundColor: "#916BBF"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  ช้า
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={{
                    lg: 60,
                    md: 60,
                    sm: 60,
                    xs: 40,
                  }}
                  style={{ marginTop: 20 }}
                >
                  {Math.round(item.speeds[0].gasPrice) + " Gwei"}
                 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md ={4}>
        <Image src ="https://www.img.in.th/images/7c2662759d6c8e88a66de2900974984c.gif" width ={200} height={200}  className ="ImageFee"/>
          <Card sx={{ maxWidth: 255 }} className="BoxFeeEth" style={{backgroundColor: "#916BBF"}}>
            
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  ปกติ
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={{
                    lg: 60,
                    md: 60,
                    sm: 60,
                    xs: 40
                  }}
                  style={{ marginTop: 10}}
                >
                  {Math.round(item.speeds[1].gasPrice) + " Gwei"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} md ={4}>
        <Image src ="https://www.img.in.th/images/81545c959d0b6caeb6a469186806e6ee.gif" width ={200} height={200}  className ="ImageFee"/>

          <Card sx={{ maxWidth: 255 }} className="BoxFeeEth" style={{backgroundColor: "#916BBF"}} >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  เร็ว
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginTop: 20}}
                  fontSize={{
                    lg: 60,
                    md: 60,
                    sm: 60,
                    xs: 40
                  }}
                >
                  {Math.round(item.speeds[3].gasPrice) + " Gwei"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
});
return <div>
  <Navbar logo = "https://www.img.in.th/images/0f6b06a68f053745ae474c083cca0213.png" />
  {maps}</div>;
}

export default FeeEth

//api key owlracle = d99a766c2a9c45018c91907d6ff08821
// secret key owlracle = a5214ed85e1b43809b82b4ad389e542c