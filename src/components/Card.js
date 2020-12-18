import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBView, MDBMask } from 'mdbreact';
import './Card.css';

import { CardModal } from './';

// export const Card = () => {
export class Card extends Component {
  state = {
    openModal: false
  }

  toggleModal = () => {
    // console.log("card print : " + this.state.openModal)
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    return (
      <MDBCard className="charity-card" onClick={this.toggleModal}>
          <MDBView hover>
            <div className="card-thumbnail">
              <MDBCardImage className="img-fluid" src={this.props.charityInfo.image} />
            </div>
            <MDBMask style={{ cursor: "pointer" }} className="flex-center" overlay="white-light" />
          </MDBView>
          <MDBCardBody style={{ padding: "1em" }}>
            <MDBCardTitle className="text-center" style={{ margin: "0px", fontSize: "1em" }}>{this.props.charityInfo.name}</MDBCardTitle>
            <CardModal openModal={this.state.openModal} charityInfo={this.props.charityInfo}/>
          </MDBCardBody>
      </MDBCard>
    )
  }
};