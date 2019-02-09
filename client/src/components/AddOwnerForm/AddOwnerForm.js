import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";



class AddOwnerForm extends Component {
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
     if (this.state.firstName && this.state.lastName && this.state.phoneNumber && this.state.address && this.state.username && this.state.password && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate) {
    API.saveOwner({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      username: this.state.username,
      password: this.state.password,
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
    //console.log(this.state);
  };



  render() {
    return (

      <div>
        <form>
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
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <Input
            value={this.state.address}
            onChange={this.handleInputChange}
            name="address"
            placeholder="Address"
          />
          <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Login Name"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
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
            disabled={!(this.state.firstName && this.state.lastName && this.state.phoneNumber && this.state.address && this.state.username && this.state.password && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate)}
            onClick={this.handleFormSubmit}
          >
            Submit GUest
          </FormBtn>
        </form>


      </div>
    );
  }
}


export default AddOwnerForm;
