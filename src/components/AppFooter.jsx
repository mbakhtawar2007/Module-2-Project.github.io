import React from 'react';
import { Layout } from 'antd';
import './PagesCss/Footer.css'; // Create this CSS file for styling

const { Footer } = Layout;

const AppFooter = () => (
  <Footer style={{ textAlign: 'center', backgroundColor: '#C0392B', color: '#fff' }}>
    © {new Date().getFullYear()} Recipe Platform. All Rights Reserved.
  </Footer>
);

export default AppFooter;
