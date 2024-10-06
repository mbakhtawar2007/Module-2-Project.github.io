// src/pages/Home.js
import { Row, Col, Card } from 'antd';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h1>Welcome to the Recipe Platform</h1>
    <p>Discover and share delicious recipes!</p>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8}>
        <Card title="Spaghetti Carbonara" hoverable>
          A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card title="Chicken Tikka Masala" hoverable>
          Marinated chicken cooked in a creamy spiced tomato sauce.
        </Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card title="Vegetable Stir-Fry" hoverable>
          A mix of fresh vegetables stir-fried with soy sauce and sesame oil.
        </Card>
      </Col>
    </Row>
  </div>
);

export default Home;
