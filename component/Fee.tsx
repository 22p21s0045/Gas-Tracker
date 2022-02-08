import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Image, Shimmer } from "react-shimmer";
import { ShimmerThumbnail } from "react-shimmer-effects";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
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
        <MDBCol md="4" sm="4" lg="4" className = "BoxFee">
          <h1>เร็ว</h1>
          <MDBCard style={{ maxWidth: '22px' }}>
            <MDBCardBody >
              <MDBCardText>{item.fastestFee}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" sm="4" lg="4" className = "BoxFee">
          <h1>ปกติ</h1>
          <MDBCard>
            <MDBCardBody >
              <MDBCardText>{item.halfHourFee}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" sm="4" lg="4" className = "BoxFee">
          <h1>ช้า</h1>
          <MDBCard>
            <MDBCardBody >
              <MDBCardText>{item.hourFee}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </div>
    );
  });
  return <div>{maps}</div>;
}

export default Fee;
