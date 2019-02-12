import React from "react";
import { Link } from "react-router-dom";






const Nav = (props) => {



  console.log(props)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     
     
     {props.login ? 
     <div>
       <Link to="/guest">Add Guest</Link>
      <br />
      <Link to="/mgmt">Add User</Link>
      <br />
      <Link to="/owner">Security Parking List</Link>
      <br /> </div> : <Link to="/login">login</Link> }

    </nav>
  )
};

export default Nav;
