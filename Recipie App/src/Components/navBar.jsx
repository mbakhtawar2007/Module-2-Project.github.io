import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => (
  <Header>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/recipes">Recipes</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/signin">Sign In</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default Navbar;
