import React from 'react';
import { Layout, Typography, Row, Col, Avatar, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import '../PagesCss/About.css'; // Import CSS file

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function About() {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Head Chef', avatar: 'https://via.placeholder.com/150' },
    { name: 'Emily Johnson', role: 'Community Manager', avatar: 'https://via.placeholder.com/150' },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#1F1F1F' }}>
      {/* Header with Slide-in Animation */}
      <Header className="header-slide">
        <Title level={2} style={{ color: 'silver', margin: 0 }}>
          About Us
        </Title>
      </Header>

      <Content style={{ padding: '40px' }}>
        <Row justify="center" className="content-fade">
          <Col xs={24} md={16} lg={12}>
            <Title level={2} style={{ color: '#D32F2F', textAlign: 'center' }}>
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
              delicious recipes from around the world. Join us on this culinary journey and
              experience the magic of global flavors at your fingertips.
            </Paragraph>
          </Col>
        </Row>

        {/* Team Section */}
        <Row justify="center" style={{ marginTop: '40px' }}>
          <Col xs={24}>
            <Title level={3} style={{ color: '#D32F2F', textAlign: 'center', marginBottom: '20px' }}>
              Meet Our Team
            </Title>
            <Row justify="center" gutter={[16, 16]}>
              {teamMembers.map((member, index) => (
                <Col key={index} xs={24} sm={12} md={8} className="content-fade">
                  <Space direction="vertical" align="center" style={{ width: '100%' }}>
                    <Avatar src={member.avatar} size={120} />
                    <Text style={{ color: 'white', fontSize: '18px' }}>{member.name}</Text>
                    <Text style={{ color: 'grey', fontSize: '16px' }}>{member.role}</Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>

      {/* Footer with Social Links */}
      <Footer className="footer" style={{ textAlign: 'center' }}>
        <Space size="large">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined style={{ fontSize: '24px', color: 'silver' }} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined style={{ fontSize: '24px', color: 'silver' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined style={{ fontSize: '24px', color: 'silver' }} />
          </a>
        </Space>
      </Footer>
    </Layout>
  );
}

export default About;
