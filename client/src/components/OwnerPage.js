import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "./Form";
import API from "../utils/API";
import AddGuestForm from "./AddGuestForm";
//import OwnerGuestList from "./OwnerGuestList";
import { Route, Redirect } from 'react-router'
import { Link } from "react-router-dom";




class OwnerPage extends Component {
  state = {
    owner: null,
   

  }

componentDidMount(){
 API.getOwners(this.props.ownerID)
 .then(res => {
   console.log(res)
   this.setState({owner: res.data})
   
   
   
 })

}


  render() {
    console.log(this.state)
    return (
<div>
      <div className="hero-header">
      <div>
          <img src="images/noactiveguests.png" alt="map" />
      </div>
        <div className="chip">
          <div className="row">
            <div className="col s-12">
              
                <i className="small material-icons">person</i>
             
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col s-12">
            
              <h4>{this.state.owner === null ? "loading..." : this.state.owner.firstName + " " + this.state.owner.lastName}</h4> 
            </div>
          </div>
      </div>

  <div className="container">
  
   <div className="row">
    <div className="col s6">
      <div className="card">
       <div className="icon-block">
          <div className="card-content">
            <h2 className="center"><i className="medium material-icons">local_phone</i></h2>
            <h6 className="center"><Link to="/ownlist">Current Guest</Link></h6>
           </div>
        </div>
       </div>
     </div>
  
    <div className="col s6">
      <div className="card">
        <div className="icon-block">
          <div className="card-content">
            <h2 className="center"><i className="medium material-icons">person_add</i></h2>
            < h6 className="center">
            <Link to="/guest">New Guest</Link></h6>
           
          </div>
         </div>
        </div>
       </div>
    </div>
  
    <div className="row">
     <div className="col s6">
       <div className="card">
        <div className="icon-block">
           <div className="card-content">
             <h2 className="center"><i className="medium material-icons">favorite</i></h2>
            <h6 className="center">Favorites</h6>
            </div>
         </div>
        </div>
      </div>
  
      <div className="col s6">
        <div className="card">
         <div className="icon-block">
            <div className="card-content">
            <h2 className="center"><i className="medium material-icons">info</i></h2>
             <h6 className="center">My Info</h6>
             </div>
          </div>
         </div>
       </div>
    </div>
  
  </div>
</div>
  
   /* <div>
  <AddGuestForm ownerID={this.props.ownerID} />


  <h1> List of your current guests</h1>
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
      


      </div> */
      ); 

    }
}


export default OwnerPage;
