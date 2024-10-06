// src/pages/Recipes.js
import { useState } from 'react';
import { Input, Row, Col, Card } from 'antd';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recipes = [
    { title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish' },
    { title: 'Chicken Tikka Masala', description: 'Marinated chicken in spicy sauce' },
    { title: 'Vegetable Stir-Fry', description: 'Mixed vegetables in soy sauce' },
    // Add more recipes as needed
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Recipes</h1>
      <Input
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <Row gutter={[16, 16]}>
        {filteredRecipes.map((recipe, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card title={recipe.title} hoverable>
              {recipe.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Recipes;
