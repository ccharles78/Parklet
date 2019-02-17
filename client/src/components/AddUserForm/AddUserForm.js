import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";
import { Button, Form, column } from 'react-materialize'



class AddUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    username: "",
    password: "",
    carMake: "",
    carModel: "",
    carColor: "",
    licensePlate: "",

  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
   event.preventDefault();
    //if (this.state.firstName && this.state.lastName && this.state.phoneNumber && this.state.address && this.state.username && this.state.password && this.state.userType && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate) {
      API.saveOwner({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        username: this.state.username,
        password: this.state.password,
        userType: this.state.userType,
        car: {
          make: this.state.carMake,
          model: this.state.carModel,
          color: this.state.carColor,
          licensePlate: this.state.licensePlate
        }




        
      })
        .then(res => console.log("submitted"))
        .catch(err => console.log(err));
    //}
    //console.log(this.state);
  };



  render() {
    return (

      <div className="container">
        <div className="row">

          <div className="col s12" >
            <form>
              <div className="row">
                <div className="login-header col s12 center" id="logo">
                  <i className="fas fa-parking"></i>arklet
              </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    value={this.state.userType}
                    onChange={this.handleInputChange}
                    name="userType"
                    id="icon_prefix"
                    type="text"
                    className="validate" />
                  <label htmlFor="icon_prefix">User Type</label>
                </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      value={this.state.firstName}
                      onChange={this.handleInputChange}
                      name="firstName"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">First Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      name="lastName"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">assistant</i>
                    <input
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                      name="phoneNumber"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Phone Number</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">assistant</i>
                    <input
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      name="address"
                      className="validate" />
                    <label htmlFor="icon_prefix">Address</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">assistant</i>
                    <input
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      name="username"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">User Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">assistant</i>
                    <input
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">directions_car</i>
                    <input
                      value={this.state.carMake}
                      onChange={this.handleInputChange}
                      name="carMake"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Car Make</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">directions_car</i>
                    <input
                      value={this.state.carModel}
                      onChange={this.handleInputChange}
                      name="carModel"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Car Model</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">directions_car</i>
                    <input
                      value={this.state.carColor}
                      onChange={this.handleInputChange}
                      name="carColor"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">Car Color</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">directions_car</i>
                    <input
                      value={this.state.licensePlate}
                      onChange={this.handleInputChange}
                      name="licensePlate"
                      id="icon_prefix"
                      type="text"
                      className="validate" />
                    <label htmlFor="icon_prefix">License Plate</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <button
                      disabled={!(this.state.firstName && this.state.lastName && this.state.username && this.state.password && this.state.userType)}
                      onClick={this.handleFormSubmit}
                      className="btn waves-effect waves-light col s12">Save User</button>
                  </div>
                </div>
         
            </form>

          </div>
          </div>

        </div>


        );
      }
    }
    
    
    export default AddUserForm;
