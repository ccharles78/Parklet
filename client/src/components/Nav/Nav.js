import React from "react";
import { Link } from "react-router-dom";






const Nav = (props) => {

  let navLinks;

  console.log(props)

  switch (props.userType) {
    case 1:
      navLinks = <Link to="/mgmt">Add User</Link>;
      break;
    case 2:
      navLinks = <Link to="/owner">Add Guest</Link>
      break;
    case 3:
      navLinks = <Link to="/security">List of all current guests</Link>
      break;
    case 4:
      navLinks = (
        <div>
          <Link to="/mgmt">Add User</Link>
          <br />
          <Link to="/owner">Add Guest</Link>
          <br />
          <Link to="/security">Current guests</Link>
          <br />
          <Link to="/ownList">Current guests</Link>
        </div>
      )
      break;
    default:
      //navLinks = <Link to="/login">login</Link>
      break;
  }
// Shari - Chnaged Security and Ownlist title

  return (
    <nav className="nav-wrapper">


      {

        props.login ? navLinks : <Link to="/login">login</Link>

      }
    {props.login && <Link to="/logout">Logout</Link> }
    </nav>
  )
};

export default Nav;

//User Types
// 1 - mgmt
// 2 - owner
// 3 - security
// 4 - are developers

