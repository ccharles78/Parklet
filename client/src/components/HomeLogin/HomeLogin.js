import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import '../../index.css';
import '../../load.css';
import '../../login.css';
import '../../main.css';
import '../../nag.css';
import logo from '../PLogo.png';




class HomeLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      showLogin: false


    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loginButton = event => {
    this.setState({
      showLogin: true
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
        <div className="container center">
        <div className="row">
{!this.state.showLogin ? 
 
        <div id="logo-load">
          <div className="row">
          <img className="fa-parking" src={logo}  />
            {/* <i className="fas fa-parking"></i> */} arklet
          </div>
          <div className="row">
            <i className="medium material-icons" onClick={this.loginButton}>directions_car</i>
          </div>
        </div>
        
        : 

        <div className="col s12 offset-s3 z-depth-4" id="panel">
          <form>
            <div className="row">
              <div className="login-header col s12 center" id="logo-login">
              <img className="fa-parking" src={logo}  />
                {/* <i className="fas fa-parking"></i> */}arklet 
                            </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input 
                 value={this.state.username}
                 onChange={this.handleInputChange}
                 name="username"
                type="text" 
                className="validate" />
                  <label htmlFor="Login">Login ID</label>
                            </div>
              </div>
              <div className="row">
                <div className="input-field  col s12" id="password">
                  <i className="material-icons prefix">lock_outline</i>
                  <input 
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password" 
                  className="validate" />
                    <label htmlFor="password">Password</label>
                            </div>
                </div>


                <div className="row">
                  <div className="input-field col s12">
                   <button
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
                className="btn waves-effect waves-light col s12"
              >Login </button>
                  </div>
                </div>
                    </form>

            </div>
            

}
</div>
</div>
            {/* <form>
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
            </form> */}


      </div>
          );
        }
      }
      
      
      export default HomeLogin;
