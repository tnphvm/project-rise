import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCardGroup } from "mdbreact";
import {MainContainer} from './Main.style';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card, CardModal } from './';
import { charityData } from '../charityData';

export class Main extends Component {
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
            <MDBRow style={{ justifyContent: "center" }}>
               { cardList }
            </MDBRow>
            </MDBContainer>
          </MainContainer>
          </>
      )
   }
};