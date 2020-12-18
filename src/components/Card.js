import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBView, MDBMask } from 'mdbreact';
import './Card.css';

import { CardModal } from './';

// export const Card = () => {
export class Card extends Component {
  constructor(){
    super();
    this.state = {
      openModal: false
    }
  }

  toggleModal = () => {
    // console.log("card print : " + this.state.openModal)
    this.setState({
      openModal: !this.state.openModal
    });
  }

  render() {
    return (
      <MDBCard className="charity-card" onClick={() => this.setState({openModal: !this.state.openModal})}>
          <MDBView>
            <div className="card-thumbnail">
              <MDBCardImage className="img-fluid" src={this.props.charityInfo.image} />
            </div>
            <MDBMask style={{ cursor: "pointer" }} className="flex-center" overlay="black-light">
              <p className="white-text text-center" style={{ fontWeight: "bold", padding: "10px" }}>{this.props.charityInfo.name}</p>
            </MDBMask>
            <CardModal openModal={this.state.openModal} charityInfo={this.props.charityInfo}/>
          </MDBView>
      </MDBCard>
    )
  }
};