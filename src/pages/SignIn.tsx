import React from "react";
import SignInForm from "../componenets/SignInForm";
import { Col, Divider, Row } from "antd";
import MainNavbar from "../Layout/MainNavbar";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import { blue } from "@ant-design/colors";
import '../css/Form.css'

const SignIn = () => {
  return (
    <div>
       <MainNavbar/>
        <div className="form_width">
          <h2 style={{textAlign:'center',fontWeight:'bold'}}>Sign In</h2>
          <p style={{color:"#8A94A6",textAlign:'center',fontWeight:500}}>Welcome back, you’ve been missed!</p>
          <SocialLogin/>
          <Divider plain>OR</Divider>
          <SignInForm />
          <p style={{color:"#8A94A6",textAlign:"center",fontSize:"16px",fontWeight:500}}>Don’t have an account yet?<Link style={{color:blue.primary,}} to='/signup'> Sign Up</Link></p>
        </div>
      
    </div>
  );
};

export default SignIn;
