import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { ShimmerThumbnail } from "react-shimmer-effects";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from 'next/image';
function Fee() {
  async function getFee() {
    const { data } = await axios.get(
      "https://mempool.space/api/v1/fees/recommended"
    );
    return data;
  }
  async function getUsd(){
    const {data} = await axios.get("https://freecurrencyapi.net/api/v2/latest?apikey=59010d40-8a88-11ec-8b46-e19fb8145318");
    return data;
  }

  const { data, error, isError, isLoading } = useQuery("fee", getFee);
  const { data: usd, error: usderror, isError: usderrorisError, isLoading: usderrorisLoading } = useQuery("usd", getUsd);
console.log(usd);
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return (
      <div>
        <ShimmerThumbnail height={250} rounded />
      </div>
    );
  }
  let array: [] = [data];
  let maps = array.map((item: any) => {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6} md ={4}>
            <Image src ="https://www.img.in.th/images/81545c959d0b6caeb6a469186806e6ee.gif" width ={200} height={200}  className ="ImageFee"/>
            <Card sx={{ maxWidth: 255 }} className="BoxFee">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    เร็ว
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
                    {item.fastestFee + " Sat"}
                   
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md ={4}>
          <Image src ="https://www.img.in.th/images/7c2662759d6c8e88a66de2900974984c.gif" width ={200} height={200}  className ="ImageFee"/>
            <Card sx={{ maxWidth: 255 }} className="BoxFee">
              
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
                    {item.halfHourFee + " Sat"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md ={4}>
          <Image src ="https://www.img.in.th/images/ff70cf7ad7f59664d82983ae4a9b2627.gif" width ={200} height={200}  className ="ImageFee"/>

            <Card sx={{ maxWidth: 255 }} className="BoxFee">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    ช้า
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
                    {item.hourFee + " Sat"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  });
  return <div>{maps}</div>;
}

export default Fee;
//TODO: Fix bug flex box-fee
