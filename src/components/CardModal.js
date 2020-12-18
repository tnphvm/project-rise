import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn } from 'mdbreact';
import './CardModal.css';

import { Card } from './Card';

export class CardModal extends Component {
  render() {
    const modalContentStyle = {
      backgroundImage: 'linear-gradient(rgba(34,34,34,.9),rgba(34,34,34,.9)), url(' + this.props.charityInfo.image + ')',
      backgroundSize: "cover",
      backgroundPosition: "center",
      whiteSpace: "pre-line",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column"
    };

    return (
      <MDBContainer style={{ cursor: "default" }}>
        <MDBModal isOpen={this.props.openModal} fullHeight position="right">
          <MDBModalHeader className="modal-title">{this.props.charityInfo.name}</MDBModalHeader>
          <MDBModalBody  style={ modalContentStyle }>
            <div>
              <p>{this.props.charityInfo.desc}</p>
            </div>

            <div className="button-container">
              <button type="button" className="btn modal-btn" onClick={(e) => {
                e.preventDefault();
                const url = this.props.charityInfo.website;
                window.open(url, "_blank");
              }}>
                Visit Us
              </button>
              <button type="button" className="btn modal-btn" onClick={(e) => {
                e.preventDefault();
                const donationUrl = this.props.charityInfo.donation;
                window.open(donationUrl, "_blank");
              }}>
                Donate!
              </button>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
      );
    }
};