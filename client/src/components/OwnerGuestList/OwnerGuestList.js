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

  componentDidMount() {
    API.getOwners(this.props.ownerID)
      .then(res => {
        console.log(res)
        this.setState({ owner: res.data })
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
            this.setState({ owner: res.data })
          })
      })
  }

  // this triggers the pre expiring guests
  triggerPreExp = (guest) => {
    const update = {
      id: guest._id,
      expDate: moment(new Date()).add(30, "minutes")
    }
    API.updateGuest(update)

      .then(res => {
        console.log(res)
        API.getOwners(this.props.ownerID)
          .then(res => {
            console.log(res)
            this.setState({ owner: res.data })
          })
      })
      .then(res => {
        console.log("passing to next function")
        this.handlePreExpiredFormSubmit()
      })
  }

  handlePreExpiredFormSubmit = event => {
    console.log("test click")
    API.triggerSMS()
      .then(res => console.log("submitted"))
      .catch(err => console.log(err));
  };

// this triggers expiried guests
  triggerAlreadyExp = (guest) => {
    const update = {
      id: guest._id,
      expDate: moment(new Date()).subtract(30, "minutes")
    }
    API.updateGuest(update)

      .then(res => {
        console.log(res)
        API.getOwners(this.props.ownerID)
          .then(res => {
            console.log(res)
            this.setState({ owner: res.data })
          })
      })
      .then(res => {
        console.log("passing to next function")
        this.handleExpiredFormSubmit()
      })
  }


  handleExpiredFormSubmit = event => {
    console.log("test click")
    API.triggerExpiredSMS()
      .then(res => console.log("submitted"))
      .catch(err => console.log(err));
  };


  


  render() {
    return (
      <div>
        {this.state.owner && this.state.owner.guestcars.map(car => (

          <div className="container">
            <div className="row">
              <div className="col s12 m10">
                <div className="card horizontal">
                  <div className="card-image">
                    <h2 className="left"><i className="medium material-icons">account_circle</i></h2>
                  </div>
                  <div>
                    <div className="card-stacked">
                      <h5 className="right">Guest First Name: {car.firstName}</h5>
                      <div className="card-content">
                        <p className="left">Guest Last Name:{car.lastName}</p>
                        <br />
                        <p className="left">Lot # {car.lotNumber}</p>
                        <br />
                        <p className="left">Make: {car.car.make}</p>
                        <br />
                        <p className="left">Model: {car.car.model}</p>
                        <br />
                        <p className="left">Color: {car.car.color}</p>
                        <br />
                        <p className="left">License Plate: {car.car.licensePlate}</p>
                        <br />
                        <p className="left">Exp Date & Time: {moment(car.expDate).format("MM DD, YYYY hh:mm:ss")}</p>
                        <br />
                        <button onClick={() => this.renewGuest(car)}>Renew Guest</button>
                        <br />
                        <button onClick={() => this.triggerPreExp(car)}>Pre Expiration Trigger SMS</button>
                        <button onClick={() => this.triggerAlreadyExp(car)}>Expiration Trigger SMS</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default OwnerGuestList;
