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
//import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-281280.okta.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oaa21ptsuXTzLK0O356'
// }

class App extends Component {
  render() {
    this.state = {
      loggedIn: false
    }



    return (

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/guest" component={AddGuestForm} />
            <Route exact path="/mgmt" component={AddUserForm} />
            {/* <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
              <Route exact path="/login" component={HomeLogin} />
              <Route exact path="/owner" component={OwnerPage} />
          
          </Switch>

        </div>
      </Router>
    );


  }
}

export default App;
