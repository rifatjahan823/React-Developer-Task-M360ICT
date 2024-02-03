import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import dashboardIcon from '../Assets/Dashboard-icon.png'
import userIcon from '../Assets/user-icon.png'
import salesIcon from '../Assets/sales-icon.png'
import logo from '../Assets/logo.png'
import { HiMenuAlt1 } from "react-icons/hi";


const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  return (
    <div>
      <div className="mobli_menu">
        <HiMenuAlt1 onClick={showDrawer} style={{fontSize:"30px",cursor:"pointer"}}/>
        <Drawer onClose={onClose} open={open} placement="left">
          <div>
         < Link to='/'><img src={logo} alt=""  /></Link>
            <p>Pages</p>
            <ul className="side_menu">
              <li>
                <Link
                  className={location.pathname === "/" ? "active-link" : ""}
                  to="/"
                >
                  <img src={dashboardIcon} alt="" /> Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/users" ? "active-link" : ""
                  }
                  to="/users"
                >
                  <img src={userIcon} alt="" /> Users
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/sales" ? "active-link" : ""
                  }
                  to="/sales"
                >
                  <img src={salesIcon} alt="" /> Sales
                </Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileSidebar;
