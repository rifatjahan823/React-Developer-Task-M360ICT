import React from "react";
import SignUpForm from "../componenets/SignUpForm";
import { Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import { blue } from "@ant-design/colors";
import MainNavbar from "../Layout/MainNavbar";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div>
        <MainNavbar/>
      <Row justify="center">
        <Col  xxl={7} xl={9} lg={11} md={14} sm={20}>
          <h2 style={{textAlign:'center',fontWeight:'bold'}}>Getting Started</h2>
          <p style={{color:"#8A94A6",textAlign:'center',fontWeight:500}}>Create an account to continue!</p>
          <SocialLogin/>
          <Divider plain>OR</Divider>
          <SignUpForm />
          <p style={{color:"#8A94A6",textAlign:"center",fontSize:"16px",fontWeight:500}}>Already have an account? <Link style={{color:blue.primary,}} to='/signin'>Sign In</Link></p>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
