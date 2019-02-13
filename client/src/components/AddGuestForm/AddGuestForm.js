import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import {Button,Form,column}from 'react-materialize'




class AddGuestForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    lotNumber: "",
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
     if (this.state.firstName && this.state.lastName && this.state.lotNumber && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate) {
    API.saveGuest({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      lotNumber: parseInt(this.state.lotNumber),
      car: {
        make: this.state.carMake,
      model: this.state.carModel,
      color: this.state.carColor,
      licensePlate: this.state.licensePlate
      }

     // author: this.state.author,
      // synopsis: this.state.synopsis
    })
      .then(res => console.log("submitted"))
      .catch(err => console.log(err));
    }
    console.log(this.state);
  };



  render() {
    return (

      <form>
      <row>      
        
          <Input
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name"
          />
          
          <Input
            value={this.state.lastName}
            onChange={this.handleInputChange}
            name="lastName"
            placeholder="Last Name"
          />
          <Input
            value={this.state.lotNumber}
            onChange={this.handleInputChange}
            name="lotNumber"
            placeholder="Lot Number"
          />
          <Input
            value={this.state.carMake}
            onChange={this.handleInputChange}
            name="carMake"
            placeholder="Make of Car"
          />
          <Input
            value={this.state.carModel}
            onChange={this.handleInputChange}
            name="carModel"
            placeholder="Car Model"
          />
          <Input
            value={this.state.carColor}
            onChange={this.handleInputChange}
            name="carColor"
            placeholder="Color of Car"
          />
           <Input
            value={this.state.licensePlate}
            onChange={this.handleInputChange}
            name="licensePlate"
            placeholder="License Plate"
          />




          <FormBtn
            disabled={!(this.state.firstName && this.state.lastName && this.state.lotNumber && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate)}
            onClick={this.handleFormSubmit}
          >
            Submit GUest
          </FormBtn>
          </row>
        </form>
        
      
    );
  }
}


export default AddGuestForm;
