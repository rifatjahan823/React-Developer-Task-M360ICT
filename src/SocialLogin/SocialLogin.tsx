import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Flex } from 'antd';

const SocialLogin = () => {
    return (
       <div style={{padding:'10px 0'}}>
         <Flex  wrap="wrap" gap="large" align='center' justify='center'>
           <button style={{background:"#F0F5FA",color:"#8A94A6",border:"none",padding:'10px 20px',fontWeight:'bold',borderRadius:"10px",cursor:"pointer"}}><Flex align='center'><FcGoogle style={{fontSize:"20px",marginRight:"5px"}}/> Sign Up with Google</Flex></button>
           {/* -----------apple------------ */}
           <button style={{background:"#F0F5FA",color:"#8A94A6",border:"none",padding:'10px 20px',fontWeight:'bold',borderRadius:"10px",cursor:"pointer"}}><Flex  align='center'><FaApple style={{fontSize:"20px",marginRight:"5px"}}/> Sign Up with Apple ID</Flex></button>
        </Flex>
       </div>
    );
};

export default SocialLogin;