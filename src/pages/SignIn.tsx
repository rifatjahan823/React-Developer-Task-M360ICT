import React from "react";
import SignInForm from "../componenets/SignInForm";
import { Col, Divider, Row } from "antd";
import MainNavbar from "../Layout/MainNavbar";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { blue } from "@ant-design/colors";

const SignIn = () => {
  return (
    <div>
       <MainNavbar/>
      <Row justify="center">
        <Col xxl={7} xl={9} lg={11} md={14} sm={20}>
          <h2 style={{textAlign:'center',fontWeight:'bold'}}>Sign In</h2>
          <p style={{color:"#8A94A6",textAlign:'center',fontWeight:500}}>Welcome back, you’ve been missed!</p>
          <SocialLogin/>
          <Divider plain>OR</Divider>
          <SignInForm />
          <p style={{color:"#8A94A6",textAlign:"center",fontSize:"16px",fontWeight:500}}>Don’t have an account yet?<Link style={{color:blue.primary,}} to='/signup'>Sign Up</Link></p>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
