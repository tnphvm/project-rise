import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";

import { Card, CardModal } from './';

export class Main extends Component {
   render() {
      return (
          <MDBContainer fluid>
            <div className="App">
              <header className="App-header">
              <h1>Rise Charity Directory</h1>
              </header>
            </div>
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
      )
   }
};