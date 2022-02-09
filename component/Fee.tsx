import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Image, Shimmer } from "react-shimmer";
import { ShimmerThumbnail } from "react-shimmer-effects";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
function Fee() {
  async function getFee() {
    const { data } = await axios.get(
      "https://mempool.space/api/v1/fees/recommended"
    );
    return data;
  }

  const { data, error, isError, isLoading } = useQuery("fee", getFee);
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
        <Card sx={{ maxWidth: 255}} className="BoxFee">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                เร็ว
              </Typography>
              <Typography variant="body2" color="text.secondary" style ={{marginTop:20,fontSize:60}}>
                {item.fastestFee +" Sat"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 255 }} className="BoxFee">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" >
                ปกติ
              </Typography>
              <Typography variant="body2" color="text.secondary" style ={{marginTop:10,fontSize:60}}>
                {item.halfHourFee+" Sat"} 
                
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 255 }} className="BoxFee">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                ช้า
              </Typography>
              <Typography variant="body2" color="text.secondary" style ={{marginTop:20,fontSize:60}}>
                {item.hourFee+" Sat"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        
      </div>
    );
  });
  return <div>{maps}</div>;
}

export default Fee;
//TODO: Fix bug flex box-fee
