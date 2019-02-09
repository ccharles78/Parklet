import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<Link to="/guest">Add Guest</Link>
<br />
<Link to="/mgmt">Add Owner</Link>
<br />
<Link to="/security">Security Parking List</Link>

  </nav>
);

export default Nav;
