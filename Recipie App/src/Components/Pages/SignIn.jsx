import React from 'react';
import { Form, Input, Button } from 'antd';
// import './SignIn.css';

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <Form
        name="signin"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
