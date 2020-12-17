import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";
import {MainContainer} from './Main.style';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card, CardModal } from './';

export class Main extends Component {
   render() {
      return (
          <>
          <Navbar/>
          <MainContainer>
            <Sidebar/>
            <MDBContainer fluid className="px-5 py-3">
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
          </MainContainer>
          </>
      )
   }
};