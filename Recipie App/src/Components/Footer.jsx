// src/components/Footer.js
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer style={{ textAlign: 'center', padding: '20px', background: '#2B1B17', color: '#C0C0C0' }}>
    <p>&copy; {new Date().getFullYear()} Recipe Platform. All rights reserved.</p>
    <p>
      Follow us on 
      <a href="https://twitter.com" style={{ color: '#C0C0C0', margin: '0 10px' }}>Twitter</a> |
      <a href="https://facebook.com" style={{ color: '#C0C0C0', margin: '0 10px' }}>Facebook</a>
    </p>
  </Footer>
);

export default AppFooter;
