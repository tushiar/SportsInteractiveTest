import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import { Form, Col, Container, Row } from "react-bootstrap";
import JSONDATA from './DATA.json'

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.searchTermFunction = this.searchTermFunction.bind(this);
    this.state = {
     
      players:[],
      searchTerm:'',

      

    };
  }
  componentDidMount() {
    axios
      .get("https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e")
      .then((res) => {
        this.setState({
          players: res.data.playerList,
          
        });
        console.log(this.state.players);
      });
    /**
     * Copied JSON code to a file from the API to complete because API was failing when tried multiple times.
     */
    // this.setState({
    //   players: JSONDATA.playerList
      
    // });
   
  }
 
searchTermFunction(e){
  this.setState({
    //  selectedDate: e.target.name,
     searchTerm: e.target.value
 })
//  console.log(this.state.searchTerm);
//   let playerCards = this.state.players.filter((val)=>{
//     console.log("TName: "+val.TName+" Search: "+this.state.searchTerm)
//     if(this.searchTerm===""){
//       return val
//     }
//     else if(val.TName.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
//       console.log(val);
//       return val
//     }
//   }).map((val) => {
//     return (
//       <Col sm="3">
//         <PlayerCard player={val} />
//       </Col>
//     );
//   });
//   return playerCards;
}
  render() {
    
   console.log(this.state.searchTerm);
    let playerCards = this.state.players.filter((val)=>{
      console.log("TName: "+val.TName+" Search: "+this.state.searchTerm)
      if(this.searchTerm===""){
        return val
      }
      else if(val.TName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||val.PFName.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ){
        console.log(val);
        return val
      }
    }).map((val) => {
      return (
        <Col sm="3">
          <PlayerCard player={val} />
        </Col>
      );
    });
    // let playerCards = this.state.player.map((player) => {
    //   console.log(this.state.players);
    //    let playerCards = this.state.players.map((player, key) => {
    //    return (
    //      <Col sm="3">
    //        <PlayerCard player={player} key={key} />
    //      </Col>
    //    );
    //  });
    // let playerCards = this.state.players.filter((val)=>{
    //   if(this.searchTerm==""){
    //     return val
    //   }
    //   else if(val.TName.toLowerCase().includes(this.searchTerm.toLowerCase())){
    //     return val
    //   }
    // }).map((player, key) => {
    //   return (
    //     <Col sm="3">
    //       <PlayerCard player={player} key={key} />
    //     </Col>
    //   );
    // });
    return (
      <Container fluid>
        <Form style={{paddingTop:"10px", width:"40%"}}>
          <Form.Group controlId="searchInputField" >
            
            <Form.Control placeholder="Search the Players here..." value={this.state.searchTerm} onChange={this.searchTermFunction}/>
          </Form.Group>
        </Form>
        <Row>{playerCards}</Row>
        
      </Container>
    );
  }
}
