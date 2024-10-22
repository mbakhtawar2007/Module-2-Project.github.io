import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import '../PagesCss/About.css'; // Importing the CSS file

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

function About() {
  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#1F1F1F' }}>
      {/* Header with Slide-in Animation */}
      <Header className="header-slide">
        <Title level={2} style={{ color: 'silver', margin: 0 }}>
          About Us
        </Title>
      </Header>

      <Content style={{ padding: '40px' }}>
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <div className="content-fade">
              <Title
                level={2}
                style={{ color: '#D32F2F', textAlign: 'center' }}
              >
                Our Mission
              </Title>
              <Paragraph
                style={{
                  color: 'lightgrey',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  padding: '20px',
                  borderRadius: '8px',
                  backgroundColor: '#2B2B2B',
                }}
              >
                We aim to create a platform where food enthusiasts can share, discover, and enjoy 
                delicious recipes from around the world. Join us on this culinary journey, and 
                experience the magic of global flavors at your fingertips.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default About;
