import React from "react";
import SignUpForm from "../componenets/SignUpForm";
import {  Divider } from "antd";
import { Link } from "react-router-dom";
import { blue } from "@ant-design/colors";
import MainNavbar from "../Layout/MainNavbar";
import SocialLogin from "../SocialLogin/SocialLogin";
import '../css/Form.css'

const SignUp = () => {
  return (
    <div >
        <MainNavbar/>
        <div className="form_width">
          <h2 style={{textAlign:'center',fontWeight:'bold'}}>Getting Started</h2>
          <p style={{color:"#8A94A6",textAlign:'center',fontWeight:500}}>Create an account to continue!</p>
          <SocialLogin/>
          <Divider plain>OR</Divider>
          <SignUpForm />
          <p style={{color:"#8A94A6",textAlign:"center",fontSize:"16px",fontWeight:500}}>Already have an account? <Link style={{color:blue.primary,}} to='/signin'>Sign In</Link></p>
        </div>
    </div>
  );
};

export default SignUp;
