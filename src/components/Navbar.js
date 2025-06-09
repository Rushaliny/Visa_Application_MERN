import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import "./Footer"

const Navbar = () => {
  return (
    <>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/land">
                  <h2>AirVisa</h2>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/book" className='nav-link' >Apply Visa</Link>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <Link to="/bookings" className='nav-link' >List of Application</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
