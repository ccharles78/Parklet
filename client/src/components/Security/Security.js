import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";
import AddGuestForm from "../AddGuestForm";
import OwnerPage from "../OwnerPage";
import { Route, Redirect } from 'react-router'
import { Link } from "react-router-dom";
import moment from "moment";




class OwnerGuestList extends Component {
  state = {
    guests: [],
    

  }

componentDidMount(){
 API.getAllGuests()
 .then(res => {
   console.log(res)
   this.setState({guests: res.data})
   
   
 })

}


  render() {

const activeGuests = this.state.guests.filter((guest) => {
return moment(guest.expDate).isAfter(moment())
})

    return (

      <div className="container">
        <div className="row">
          <div className="col s12 m10">
            <div className="card horizontal">
              <div className="card-image">
                <h2 className="left"><i className="medium material-icons">account_circle</i></h2>
              </div>
              <div> 
              
              {activeGuests.length && activeGuests.map(car => (
            
              <div className="card-stacked">
                <h5 className="right">License Plate: {car.car.licensePlate}</h5>
                <div className="card-content">
                  <p className="right">Guest Last Name: {car.lastName}</p>
                  <br />
                  <p className="right">Lot # {car.lotNumber}</p>
                  <br />
                  <p className="right">Make: {car.car.make}</p>
                  <br />
                  <p className="right">Model: {car.car.model}</p>
                  <br />
                  <p className="right">Color: {car.car.color}</p>
                  <br />
                  <p className="right">Exp Date & Time: {moment(car.expDate).format("MM DD, YYYY hh:mm:ss")}</p>
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
