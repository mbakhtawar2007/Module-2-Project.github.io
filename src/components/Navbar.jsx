import { Menu, Layout, Avatar, Button, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, UploadOutlined, BellOutlined, DownOutlined } from '@ant-design/icons';
import './PagesCss/Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  const userMenu = (
    <Menu
      items={[
        { key: '1', label: <Link to="/profile">Profile</Link> },
        { key: '2', label: <Link to="/settings">Settings</Link> },
        { key: '3', label: <Link to="/logout">Logout</Link> },
      ]}
    />
  );

  return (
    <Header className="navbar-header">
      <div className="logo">
        <Link to="/">RecipeZone</Link>
      </div>

      <Menu mode="horizontal" className="navbar-menu">
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
        <Menu.Item key="5">
          <Link to="/video">Video</Link>
        </Menu.Item>
      </Menu>

      <div className="navbar-actions">
        <BellOutlined className="icon-bell" />
        <Dropdown overlay={userMenu} trigger={['click']}>
          <Space>
            <Avatar size="large" icon={<UserOutlined />} />
            <DownOutlined className="icon-dropdown" />
          </Space>
        </Dropdown>
        <Button type="primary" icon={<UploadOutlined />} className="upload-btn">
          <Link to="/upload">Upload</Link>
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
