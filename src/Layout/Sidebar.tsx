import React, { useState } from "react";
import  "../css/Sidebar.css";
import dashboardIcon from '../Assets/Dashboard-icon.png'
import userIcon from '../Assets/user-icon.png'
import salesIcon from '../Assets/sales-icon.png'
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

  const location = useLocation();
  return (
    <div>
  
      {/* ***********Desktop************** */}
      <div className="desktop_menu"  >
        <p>Pages</p>
        <ul className="side_menu">
      <li><Link className={location.pathname === '/' ? 'active-link' : ''} to='/'><img src={dashboardIcon} alt="" /> Dashboard</Link>
      </li>
      <li >
        <Link className={location.pathname === '/users' ? 'active-link' : ''} to='/users'><img src={userIcon} alt="" /> Users</Link>
      </li>
      <li>
        <Link className={location.pathname === '/sales' ? 'active-link' : ''} to='/sales'><img src={salesIcon} alt="" /> Sales</Link>
      </li>
    </ul>
      </div>
    </div>
  );
};

export default Sidebar;
