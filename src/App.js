import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

import Profile from './profile/Profile'





export default class App extends Component  {
constructor()
{ super()
  this.state={
    timerID:0,
    show:true
    ,
 person:   {
fullName:"Ibrahim Sahli",
bio:"learning from mistake",
 profession:"Web Developper"
}
}
}
 handelName(str){
  alert(`Full name: ${str}`) 
}
calculatetime(){
  this.setState({timerID:this.state.timerID +1})
}

componentDidMount=()=>{
  setInterval(
      ()=>{this.calculatetime()},1000);}


  render(){
  return (
    <div style={{backgroundColor:"pink"}}  >



      <h1 style={{padding:"10px"}}>
        the App component didmount since {this.state.timerID} seconds
      </h1>
      {this.state.show&&<Profile fullName={this.state.person.fullName} bio={this.state.person.bio} profession={this.state.person.profession} handelName={this.handelName}>
    <img  style={{ height:"180px ",width:"15%"}} src=  "./ib.jpg "  />

    </Profile>}
     <button onClick={()=>this.setState({show:!this.state.show})}
      style={{height:"50px",width :"250px",fontWeight:"bold" ,fontSize :"20px" }}>showprofile/hideprofile</button>
    </div>
  );
}

}
