import React from 'react';
import { FaBars, FaRegUserCircle, FaRegTimesCircle } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file
import masala from "../images/masala.png"

const Navbar = ({ toggleSidey, isCollapsed }) => {
  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="container-fluid">
          <div className="col-auto">
            <div className="logo-container">
              <img src={masala} alt="masala" className={`logo ${isCollapsed ? 'collapsed' : ''}`} />
            </div>
          </div>
          <div className={`col ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="menu-toggle-btn" onClick={toggleSidey}>
              {isCollapsed ? <FaRegTimesCircle size={20} /> : <FaBars />}
            </button>
          </div>
          <div className="col-end">
            <div className="user-dropdown">
              <a href="#" className="user-icon">
                <FaRegUserCircle size={22}/>
              </a>
              <div className="dropdown-menu">
                <a href="changepassword">Change Password</a>
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
