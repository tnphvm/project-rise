import React, { Component } from 'react';
import { MDBContainer, MDBRow } from "mdbreact";
import {MainContainer} from './Main.style';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Card } from './';
import { charityData } from '../charityData';
import {SearchContext} from '../context/search.context';

export class Main extends Component {
   constructor(){
      super();
      this.state = {
         cardTitle: '',
         cardCategories: []
      };
   }

   generateTitleFilter = () => {
      return {
         value: this.state.cardTitle,
         onChange: (title) => {
            this.setState({
               ...this.state,
               cardTitle: title
            })
         }
      }
   }

   generateCategoryFilter = () => {
      return {
         value: this.state.cardCategories,
         onChange: (category) => {
            if(this.state.cardCategories.includes(category)){
               this.setState({
                  ...this.state,
                  cardCategories: this.state.cardCategories.filter(currCategory => currCategory !== category)
               });
            }
            else if(category === ''){
               this.setState({
                  ...this.state,
                  cardCategories: []
               });
            }
            else{
               this.setState({
                  ...this.state,
                  cardCategories: [...this.state.cardCategories, category]
               });
            }
            
         }
      }
   }

   generateCardData = () => {
      console.log("state", this.state)
      if(this.state.cardTitle === '' && this.state.cardCategories.length === 0){
         return charityData.map(data => <Card charityInfo={data}/>);
      }
      else if(this.state.cardTitle === '' && this.state.cardCategories.length > 0){
         return charityData.map(data => {
            if(this.state.cardCategories.includes(data.category)){
               return <Card charityInfo={data}/>
            }
         });
      }
      else if (this.state.cardTitle !== '' && this.state.cardCategories.length === 0){
         return charityData.map(data => {
            if(data.name.toLowerCase().includes(this.state.cardTitle.toLowerCase())){
               return (
                  <Card charityInfo={data}/>
               )
            }
         });;
      }
      else if(this.state.cardTitle !== '' && this.state.cardCategories.length >0){
         return charityData.map(data => {
            if(data.name.toLowerCase().includes(this.state.cardTitle.toLowerCase()) && this.state.cardCategories.includes(data.category)){
               return (
                  <Card charityInfo={data}/>
               )
            }
         });
      }
      
   }

   render() {
      return (
          <>
          <Navbar/>
          <MainContainer>
            <SearchContext.Provider value={{titleFilter: this.generateTitleFilter(), categoryFilter: this.generateCategoryFilter()}}>
               <Sidebar 
                  handleTitleFilter={this.setCardTitleFilter}
                  handleCategoryFilter={this.setCardCategoryFilter}
               />
               <MDBContainer fluid className="py-3">
                  <MDBRow style={{ justifyContent: "center" }}>
                     {this.generateCardData()}
                  </MDBRow>
               </MDBContainer>
            </SearchContext.Provider>
          </MainContainer>
          </>
      )
   }
};