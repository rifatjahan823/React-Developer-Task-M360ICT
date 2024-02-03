import React from "react";
import Sidebar from "./Sidebar";
import { Col, Row } from "antd";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar isAuthenticated={false}/>
      <Row className="">
        <Col span={0} lg={4}>
          <Sidebar />
        </Col>
        <Col span={24} lg={20} style={{padding:'10px 30px'}}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardLayout;
