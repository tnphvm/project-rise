import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";
import Navbar from './Navbar';
import { Card, CardModal } from './';

export class Main extends Component {
   render() {
      return (
          <>
          <Navbar/>
          <MDBContainer fluid className="p-5">
            <MDBRow className="Charity-row">
              <MDBCardGroup deck>
                <Card />
                <Card />
                <Card />
                <Card />
              </MDBCardGroup>
            </MDBRow>
            <MDBRow  className="Charity-row">
              <MDBCardGroup deck>
                <Card />
                <Card />
                <Card />
                <Card />
              </MDBCardGroup>
            </MDBRow>
            <MDBRow  className="Charity-row">
              <MDBCardGroup deck>
                <Card />
                <Card />
                <Card />
                <Card />
            </MDBCardGroup>
            </MDBRow>
          </MDBContainer>
          </>
      )
   }
};