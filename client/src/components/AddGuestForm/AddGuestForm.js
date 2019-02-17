import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { Button, Form, column } from 'react-materialize'




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
      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        lotNumber: parseInt(this.state.lotNumber),
        car: {
          make: this.state.carMake,
          model: this.state.carModel,
          color: this.state.carColor,
          licensePlate: this.state.licensePlate,
        },
        ownerId: this.props.ownerID
      }
      console.log(data)
      API.saveGuest(data)
        .then(res => console.log("submitted"))
        .catch(err => console.log(err));
    }

  };



  render() {
    console.log(this.props)
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
                  value={this.state.lotNumber}
                  onChange={this.handleInputChange}
                  name="lotNumber"
                  id="icon_prefix" 
                  type="text" 
                  className="validate" />
                  <label htmlFor="icon_prefix">Lot Number</label>
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
                disabled={!(this.state.firstName && this.state.lastName && this.state.lotNumber && this.state.carMake && this.state.carModel && this.state.carColor && this.state.licensePlate)}
                onClick={this.handleFormSubmit}
                className="btn waves-effect waves-light col s12">Start Parking</button>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                <button className="btn waves-effect waves-light col s12">Save as Favorite</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>




      /* <form>
 
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
 
</form> */


    );
  }
}


export default AddGuestForm;
