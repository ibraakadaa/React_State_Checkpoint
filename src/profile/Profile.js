
import React, { Component } from 'react'

import PropTypes from 'prop-types';


export default class Profile extends Component 
{constructor (props)
 {
   super(props)
 this.state={
     timerID:0
 }
 }

 calculatetime(){
    this.setState({timerID:this.state.timerID +1})
 }

 componentDidMount=()=>{
    setInterval(
        ()=>{this.calculatetime()},1000);}

render(){
return <div style={{ width:"100%", display:"flex",  flexDirection:'column' , backgroundColor: "lightblue"}}>
    {this.props.children}
<br/>
    <button style={{height:"50px",width :"180px",fontWeight:"bold" ,fontSize :"20px" }}  
    onClick={()=>this.props.handelName(this.props.fullName)}  >
        click here to see my name 
    </button     >
    <h1 style={{backgroundColor:"blue" ,color:"white" ,padding:"20px" }}>My bio : {this.props.bio}</h1>
    <h1 style={{backgroundColor:"blue" ,color:"white" ,padding:"20px" }}>My profession : {this.props.profession}</h1>
    <h1> the profile component did mount since : {this.state.timerID}  seconds   </h1>
</div>
}
}
Profile.propTypes={
    fullname:PropTypes.string,
    bio:PropTypes.string, 
    profession:PropTypes.string,
    children:PropTypes.object,
    handelName:PropTypes.func
}

