import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";
import {MainContainer} from './Main.style';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card, CardModal } from './';
import { charityData } from '../charityData';

export class Main extends Component {
   // info = () => {
   //    charityData.forEach(charity => console.log(charity));
   // };

   render() {
      let cardList = [];
      charityData.forEach(charity => {
         cardList.push(
            <Card charityInfo={charity} />
         );
      });

      return (
          <>
          <Navbar/>
          <MainContainer>
            <Sidebar/>
            <MDBContainer fluid className="px-5 py-3">
<<<<<<< HEAD
            <MDBRow style={{ justifyContent: "center" }}>
               { cardList }
            </MDBRow>
=======
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
>>>>>>> 8b28ae18b86346a4087342e455b6dda0d4346a14
            </MDBContainer>
          </MainContainer>
          </>
      )
   }
};