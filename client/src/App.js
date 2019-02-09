import React, { Component } from 'react';
import logo from './logo.svg';
import AddGuestForm from './components/AddGuestForm';
import AddOwnerForm from './components/AddOwnerForm';
import HomeLogin from './components/HomeLogin';
//import MessageList from './components/MessageList';
// import Protected from './components/Protected';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
//import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// const config = {
//   issuer: 'https://dev-281280.okta.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oaa21ptsuXTzLK0O356'
// }

class App extends Component {
  render() {



    return (

      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/guest" component={AddGuestForm} />
            <Route exact path="/mgmt" component={AddOwnerForm} />
            {/* <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
              <Route exact path="/home" component={HomeLogin} />
          </Switch>

          {/* <Security issuer='https://dev-281280.okta.com/oauth2/default'
            client_id='0oaa21ptsuXTzLK0O356'
            redirect_uri={window.location.origin + '/implicit/callback'} >
            <Route path='/' exact={true} component={HomeLogin} />
            {/* <SecureRoute path='/protected' component={Protected} /> */}
           {/* </div> <Route path='/implicit/callback' component={ImplicitCallback} />
          </Security>}*/}
        </div>
      </Router>
    );


  }
}

export default App;
