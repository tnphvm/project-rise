import React from 'react';
import { MDBRow, MDBCardGroup } from 'mdbreact';

import { Card } from './Card';

export const Main = () => {
   return (
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
   )
}