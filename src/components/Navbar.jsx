import { Menu, Layout, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, UploadOutlined, BellOutlined } from '@ant-design/icons';
import './PagesCss/Navbar.css'; // Ensure to import your CSS

const { Header } = Layout;

const Navbar = () => (
  <Header style={{ backgroundColor: '#C0392B', display: 'flex', justifyContent: 'space-between' }}>
    <Menu theme="dark" mode="horizontal" style={{ flex: 1 }}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/recipes">Recipes</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/upload">Upload</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/about">About Us</Link>
      </Menu.Item>
    </Menu>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <BellOutlined style={{ fontSize: '24px', color: '#fff' }} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Button type="primary" icon={<UploadOutlined />} style={{ backgroundColor: '#ECF0F1', color: '#C0392B' }}>
        <Link to="/upload">Upload</Link>
      </Button>
    </div>
  </Header>
);

export default Navbar;
