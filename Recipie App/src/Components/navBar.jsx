import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
// import './Navbar.css';

const Navbar = () => {
  return (
    <Menu mode="horizontal" className="navbar">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/recipes">Recipes</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/signin">Sign In</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
