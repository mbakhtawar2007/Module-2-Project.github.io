import React from 'react';
import { Card } from 'antd';
// import './Recipes.css';

const Recipes = () => {
  const recipeList = [
    { title: 'Pasta', description: 'A simple pasta recipe.' },
    { title: 'Salad', description: 'A healthy salad recipe.' },
    // Add more recipes here
  ];

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <div className="recipes-grid">
        {recipeList.map((recipe, index) => (
          <Card title={recipe.title} key={index}>
            <p>{recipe.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
