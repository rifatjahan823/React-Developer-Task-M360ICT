import React from "react";
import { Button, Checkbox, Form, Input, } from "antd";
import { MdAlternateEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { ApiResponse, login, setAuth } from "../redux/user/authSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import '../css/Form.css'



type FieldType = {
  email?: string;
  name?: string;
  password?: string;
  remember?: string;
};

interface SignInFormInputs {
    email: string;
    password: string;
  }
const SignInForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    
    const onFinish = async (data: SignInFormInputs) => {
      dispatch(login({ email: data.email, password: data.password })).then((action) => {
        const response: ApiResponse = (action.payload as ApiResponse) || { token: '' };
        const token = response.token;
        const user = { email: data.email, };
        dispatch(setAuth({ isAuthenticated: true, token, user }));
        navigate('/');
      });
    };
  
  return (
    <div className="form_section">
         <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* ***********Email***************** */}
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
              type="email"
                prefix={<MdAlternateEmail style={{color:"#C5CBD3"}}/>}
                placeholder="Your Email"
              />
            </Form.Item>

            {/* ***************Password************** */}
            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Create Password" prefix={<BiSolidLock style={{color:"#C5CBD3"}}/>} />
            </Form.Item>
            {/* ***************mark************** */}
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
            
            >
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" block htmlType="submit">
               Sign In
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};

export default SignInForm;
