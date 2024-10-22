import { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Button, Switch } from 'antd';
import { Link } from 'react-router-dom';
import '../PagesCss/Home.css'; 

const { Title } = Typography;

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Spaghetti Carbonara', views: '10K', date: '2 days ago', img: 'https://via.placeholder.com/300' },
    { id: 2, title: 'Chicken Tikka Masala', views: '25K', date: '1 week ago', img: 'https://via.placeholder.com/300' },
    { id: 3, title: 'Vegetable Stir Fry', views: '5K', date: '3 days ago', img: 'https://via.placeholder.com/300' },
  ]);

  // Handle Dark Mode toggle
  const toggleDarkMode = (checked) => setDarkMode(checked);

  // Handle adding/removing recipes to favorites
  const handleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter((id) => id !== recipeId));
    } else {
      setFavorites([...favorites, recipeId]);
    }
  };

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-controls">
        <Title level={1} className="title-fade">
          Discover Amazing Recipes
        </Title>
        <Switch checked={darkMode} onChange={toggleDarkMode} checkedChildren="Dark" unCheckedChildren="Light" />
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: '20px' }}>
        {recipes.map((recipe) => (
          <Col xs={24} sm={12} md={8} key={recipe.id}>
            <Link to={`/recipes/${recipe.title.toLowerCase().replace(/ /g, '-')}`}>
              <Card
                hoverable
                className="card-scale"
                cover={<img alt={recipe.title} src={recipe.img} />}
                style={{ borderRadius: '10px' }}
              >
                <Card.Meta title={recipe.title} description={`${recipe.views} Views • ${recipe.date}`} />
              </Card>
            </Link>
            <Button
              type={favorites.includes(recipe.id) ? 'primary' : 'default'}
              onClick={() => handleFavorite(recipe.id)}
              style={{ marginTop: '10px' }}
            >
              {favorites.includes(recipe.id) ? 'Saved' : 'Save'}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
