import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";




class HomeLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.homeLogin({
        username: this.state.username,
        password: this.state.password

      })
        .then(res => {
          console.log(res.data)
          this.props.setCurrentUser(res.data)
          this.props.changeLoginState()
          if (res.data.userType === 2) {
            this.props.history.push("/owner")
          }
          else if (res.data.userType === 1) {
            this.props.history.push("/mgmt")
          }
          else if (res.data.userType === 3) {
            this.props.history.push("/security")
          }
        })
        .then(res => console.log("submitted"))
        .catch(err => console.log(err));
    }
  };



  render() {
    return (

      <div>
      <div class="container center" id="logo">
        <div class="row">
          <i class="fas fa-parking fa-spin fa-fw"></i>arklet
      </div>
      <div class="row">
          <i class="medium material-icons">directions_car</i>
      </div>
      </div>
        <form>
          <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="User Name"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
          />


          <FormBtn
            disabled={!(this.state.username && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Login
          </FormBtn>
        </form>


      </div>
    );
  }
}


export default HomeLogin;
