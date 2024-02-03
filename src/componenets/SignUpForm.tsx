import React from "react";
import { Button, Checkbox, Form, Input, } from "antd";
import { useAddUserMutation } from "../redux/user/userApi";
import { MdAlternateEmail } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";
import { BiSolidLock } from "react-icons/bi";
import Step from "./ui/Step";


type FieldType = {
  email?: string;
  name?: string;
  password?: string;
  remember?: string;
};

const SignUpForm = () => {
  //Create user
  const [addUser] = useAddUserMutation();

  const onFinish = async (data: any) => {
    const response = await addUser(data);
    console.log(response);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div >
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
            {/* *******Name************* */}
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: "Please input your name" }]}
            >
              <Input placeholder="Your Name" prefix={<RiUserSmileFill style={{color:"#C5CBD3"}}/>} />
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
            {/* ************Step********** */}
            <Step/>
            {/* ***************mark************** */}
            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
            
            >
              <Checkbox>I agree to the Terms & Conditions</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" block htmlType="submit">
               Sign UP
              </Button>
            </Form.Item>
          </Form>
    </div>
  );
};

export default SignUpForm;
