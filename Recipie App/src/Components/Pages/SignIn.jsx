// src/pages/SignIn.js
import { Form, Input, Button } from 'antd';

const SignIn = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    // Handle sign-in logic here
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sign In</h1>
      <Form
        name="signin"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: '300px' }}
      >
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
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
