import React, { Component } from 'react';
import logo from './logo.svg';
import AddGuestForm from './components/AddGuestForm';
import AddUserForm from './components/AddUserForm';
import HomeLogin from './components/HomeLogin';
//import MessageList from './components/MessageList';
// import Protected from './components/Protected';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import OwnerPage from './components/OwnerPage';
import { createSecureContext } from 'tls';
//import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-281280.okta.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oaa21ptsuXTzLK0O356'
// }

class App extends Component {


  //default, user hits the page and they will not be logged in and will not have a user type
  constructor(props) {
    super(props)
    this.state = {
      login: false,
      currentUser: {}
    }
  }

  setCurrentUser = (userData) => {
    this.setState({
      currentUser: userData
    })

  }

  changeLoginState = () => {

    this.setState({
      login: true
    });
  };

  render() {




    return (

      <Router>
        <div>
          <Nav login={this.state.login} userType={this.state.currentUser.userType}/>



          <Switch>
            <Route exact path="/guest" component={AddGuestForm} />
            <Route exact path="/mgmt" component={AddUserForm} />
            {/* <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}

            {
              //code that defaults to the login page
            }
            <Route exact path="/login" render={props => (
              <HomeLogin {...props}
                changeLoginState={this.changeLoginState}
                setCurrentUser={this.setCurrentUser} />
            )} />

            <Route exact path="/owner" render={props => (
              <OwnerPage {...props}
                ownerID={this.state.currentUser._id} />
            )} />

          </Switch>

        </div>
      </Router>
    );


  }
}

export default App;
