import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import AddGuestForm from "../../components/AddGuestForm";
import OwnerPage from "../OwnerPage";
import { Route, Redirect } from 'react-router'
import { Link } from "react-router-dom";
import moment from "moment";





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

renewGuest = (guest) => {
const update = {
  id: guest._id,
 expDate: moment(guest.expDate).add(24, "hours")
}
  API.updateGuest(update)

  .then(res => {
    console.log(res)
    API.getOwners(this.props.ownerID)
    .then(res => {
      console.log(res)
      this.setState({owner: res.data})
   
    })
    
})
}

handleFormSubmit = event => {
    event.preventDefault();
      console.log()
    API.triggerSMS()
      .then(res => console.log("submitted"))
      .catch(err => console.log(err));
    
  };



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
                <h5 className="right">Guest First Name: {car.firstName}</h5>
                <div className="card-content">
                  <p className="right">Guest Last Name:{car.lastName}</p>
                  <br />
                  <br />
                  <p className="right">Lot # {car.lotNumber}</p>
                  <br />
                  <p className="right">Make: {car.car.make}</p>
                  <br />
                  <p className="right">Model: {car.car.model}</p>
                  <br />
                  <p className="right">Color: {car.car.color}</p>
                  <br />
                  <p className="right">Color: {car.car.licensePlate}</p>
                  <br />
                  <p className="right">Exp Date & Time: {moment(car.expDate).format("MM DD, YYYY hh:mm:ss")}</p>
                  <br />
                  <button onClick = {() => this.renewGuest(car)}>Renew Guest</button>
                </div>
              </div>
             
             
            
            ))}
            </div>
          </div>
        </div>
        </div>

        <button onClick={this.handleFormSubmit}>Trigger SMS</button>
        </div>

     
      





      


    );
  }
}


export default OwnerGuestList;
