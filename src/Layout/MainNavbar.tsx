import { Flex } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { Select } from 'antd';
import '../css/MainNavbar.css'

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); 
};

const MainNavbar = () => {
  return (
    <nav style={{ padding: "10px 30px" }}>
      <Flex align="center" justify="space-between">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div>
          <Select
            labelInValue
            defaultValue={{ value: "lucy", label: "English (UK)" }}
            style={{ width: 120, }}
            onChange={handleChange}
            options={[
              {
                value: "English (UK)",
                label: "Bangla",
              },
              {
                value: "lucy",
                label: "English (UK))",
              },
            ]}
          />
        </div>
      </Flex>
    </nav>
  );
};

export default MainNavbar;
