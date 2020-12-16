import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBView, MDBMask } from 'mdbreact';

// export const Card = () => {
export class Card extends Component {
  render() {
    return (
      <MDBCard style={{ width: "22rem" }}>
          <MDBView hover>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" />
            <MDBMask className="flex-center" overlay="white-light" />
          </MDBView>
          <MDBCardBody style={{ padding: "1em" }}>
            <MDBCardTitle className="text-center" tag="h5" style={{ margin: "0px" }}>Charity Name</MDBCardTitle>
          </MDBCardBody>
      </MDBCard>
    )
  }
};