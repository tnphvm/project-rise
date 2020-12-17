import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact';

import { Card } from './Card';

export class CardModal extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.openModal} fullHeight position="right">
          <MDBModalHeader>{this.props.charityInfo.name}</MDBModalHeader>
          <MDBModalBody style={{ whiteSpace: "pre-line" }}>
            {this.props.charityInfo.desc}
          </MDBModalBody>
          <MDBModalFooter style={{ border: "0px" }}>
            <MDBBtn color="mdb-color" href={this.props.charityInfo.website} target="_blank">Visit Us</MDBBtn>
            <MDBBtn color="mdb-color" href={this.props.charityInfo.donation} target="_blank">Donate!</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      );
    }
};