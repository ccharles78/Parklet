import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "./Form";
import API from "../utils/API";



class OwnerPage extends Component {
  state = {
    owner: null,
    

  }

componentDidMount(){
 API.getOwners("5c605aaa1135683308a27216")
 .then(res => {
   console.log(res)
   this.setState({owner: res.data})
   
   
   
 })

}


  render() {
    return (
<div>
  <ul>
  {this.state.owner && this.state.owner.guestcars.map(car => (
        <div>
        <li>{car.firstName}</li>
        <li>{car.lastName}</li>
        <li>{car.car.model}</li>
        <li>{car.car.make}</li>
        <li>{car.date}</li>
           </div>       
                ))}
  </ul>
      


      </div>
    );
  }
}


export default OwnerPage;
