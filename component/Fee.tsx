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
  MDBContainer,
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
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard
                style={{ maxWidth: "255px", height: "197px" }}
                className="BoxFee"
              >
                <MDBCardBody>
                  <h1 style={{ textAlign: "center" }}>เร็ว</h1>
                  <MDBCardText>{item.fastestFee}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md = '4'>
              <MDBCard className="BoxFee">
                <MDBCardBody>
                  <h1 style={{ textAlign: "center" }}>ปกติ</h1>
                  <MDBCardText>{item.halfHourFee}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol>
              <MDBCard className="BoxFee">
                <MDBCardBody>
                  <h1 style={{ textAlign: "center" }}>ช้า</h1>
                  <MDBCardText >{item.hourFee}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  });
  return <div>{maps}</div>;
}

export default Fee;
//TODO: Fix bug flex box-fee
