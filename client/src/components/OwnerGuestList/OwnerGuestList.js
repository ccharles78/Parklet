import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import AddGuestForm from "../../components/AddGuestForm";
import OwnerPage from "../OwnerPage";
import { Route, Redirect } from 'react-router'
import { Link } from "react-router-dom";




class OwnerGuestList extends Component {
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
    return (

      <div className="container">
        <div className="row">
          <div className="col s12 m10">
            <div className="card horizontal">
              <div className="card-image">
                <h2 className="left"><i className="medium material-icons">account_circle</i></h2>
              </div>
              <div> 
              
              {this.state.owner && this.state.owner.guestcars.map(car => (
            
              <div className="card-stacked">
                <h5 className="right">{car.firstName}</h5>
                <div className="card-content">
                  <p className="right">Location</p>
                </div>
              </div>
             
            
            ))}
            </div>
          </div>
        </div>
        </div>
        </div>

     
      





      


    );
  }
}


export default OwnerGuestList;
