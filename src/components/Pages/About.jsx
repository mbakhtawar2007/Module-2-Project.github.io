import React from 'react';
import { Layout, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function About() {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529', color: 'white' }}>
        <Title level={2} style={{ color: 'white' }}>About Us</Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Title level={2}>Our Mission</Title>
        <Paragraph>
          We aim to create a platform where food enthusiasts can share, discover, and enjoy delicious recipes from around the world.
        </Paragraph>
      </Content>
    </Layout>
  );
}

export default About;
