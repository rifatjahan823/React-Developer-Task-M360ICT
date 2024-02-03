
import { Flex, Input, notification } from "antd";
import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import {  Dropdown } from "antd";
import { FaRegUserCircle } from "react-icons/fa";
import logo from '../Assets/logo.png'
import '../css/Navbar.css'
import { Link,} from "react-router-dom";
import { useAppDispatch,} from "../redux/hooks/hooks";
import { clearAuth, setAuth } from "../redux/user/authSlice";
import MobileSidebar from "./MobileSidebar";


interface NavigationMenuProps {
  isAuthenticated: boolean;
}
type ItemType = {
  key: string;
  label: JSX.Element;
};

const Navbar = ({ isAuthenticated }: NavigationMenuProps) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(clearAuth());
    localStorage.removeItem('authState');
  };

  useEffect(() => {
    const storedAuthState = localStorage.getItem('authState');
    
    try {
      if (storedAuthState) {
        const authState = JSON.parse(storedAuthState);
        dispatch(setAuth(authState));
      }
    } catch (error) {
      console.error('Error parsing stored auth state:', error);
      localStorage.removeItem('authState');

      notification.error({
        message: 'Authentication Error',
        description: 'There was an issue with your authentication state. Please log in again.',
      });
    }
  }, [dispatch]);

  const items: ItemType[] = [
    {
      key: "2",
      label: <Link to='/'>Profile</Link>,
    },
       {
          key: "3",
          label: <span onClick={handleLogout}>Logout</span>,
        },
        isAuthenticated &&
       {
          key: "1",
          label: <Link to='/signin'>Sign In</Link>,
        },
  ].filter(Boolean) as ItemType[];

 

  return (
    <nav style={{ padding: '10px 15px' }}>
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <div className="dashboard_logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
            <MobileSidebar />
          </div>
          <Input
            className="search_bar"
            type="search"
            name=""
            id=""
            placeholder="Search"
            suffix={<BiSearch />}
          />
        </Flex>
        <Flex align="center">
          <IoNotificationsOutline style={{ color: "#B0B7C3", fontSize: "25px" }} />
          <div>
            <Dropdown
              menu={{ items }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <FaRegUserCircle
                style={{ color: "#B0B7C3", fontSize: "25px", marginLeft: "15px" }}
              />
              
            </Dropdown>
          </div>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
