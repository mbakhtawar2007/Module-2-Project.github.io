import { Row, Col, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import '../PagesCss/Home.css'; // Import your CSS file
// import './HomeAnimations.css'; // Importing the new CSS file for animations

const { Title } = Typography;

const Home = () => (
  <div style={{ padding: '20px', backgroundColor: '#ECF0F1' }}>
    <Title level={1} className="title-fade" style={{ textAlign: 'center', color: '#C0392B' }}>
      Discover Amazing Recipes
    </Title>
    <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
      <Col xs={24} sm={12} md={8}>
        <Link to="/recipes/spaghetti-carbonara">
          <Card
            hoverable
            className="card-scale"
            cover={<img alt="Spaghetti Carbonara" src="https://via.placeholder.com/300" />}
            style={{ borderRadius: '10px' }}
          >
            <Card.Meta title="Spaghetti Carbonara" description="10K Views • 2 days ago" />
          </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Link to="/recipes/chicken-tikka">
          <Card
            hoverable
            className="card-scale"
            cover={<img alt="Chicken Tikka" src="https://via.placeholder.com/300" />}
            style={{ borderRadius: '10px' }}
          >
            <Card.Meta title="Chicken Tikka Masala" description="25K Views • 1 week ago" />
          </Card>
        </Link>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Link to="/recipes/vegetable-stirfry">
          <Card
            hoverable
            className="card-scale"
            cover={<img alt="Vegetable Stir Fry" src="https://via.placeholder.com/300" />}
            style={{ borderRadius: '10px' }}
          >
            <Card.Meta title="Vegetable Stir Fry" description="5K Views • 3 days ago" />
          </Card>
        </Link>
      </Col>
    </Row>
  </div>
);

export default Home;
