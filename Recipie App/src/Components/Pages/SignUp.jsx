// src/pages/SignUp.js
import { Form, Input, Button } from 'antd';

const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Handle sign-up logic here
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sign Up</h1>
      <Form
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: '300px' }}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
