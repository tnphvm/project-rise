import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import { Card } from './Card';

export class CardModal extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.openModal} fullHeight position="right">
          <MDBModalHeader>{this.props.charity.charityName}</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      );
    }
};