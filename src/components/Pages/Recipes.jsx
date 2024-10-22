// src/pages/Recipes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../PagesCss/Recipes.css'; // Importing CSS file

const RecipeCard = ({ id, title, description, videoSrc }) => (
  <Link to={`/recipes/${id}`} className="recipe-card-link">
    <div className="recipe-card slide-up">
      <video 
        src={videoSrc} 
        controls 
        className="recipe-video" 
      />
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-description">{description}</p>
      </div>
    </div>
  </Link>
);

const Recipes = () => {
  const recipeData = [
    {
      id: 'spaghetti-carbonara',
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with eggs, cheese, and pancetta.',
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      id: 'chicken-tikka',
      title: 'Chicken Tikka Masala',
      description: 'A flavorful Indian curry with marinated chicken.',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      id: 'vegetable-stirfry',
      title: 'Vegetable Stir Fry',
      description: 'A healthy dish with seasonal vegetables and soy sauce.',
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

  return (
    <main className="recipes-content">
      <h1 className="title-fade">Recipes</h1>
      <p className="recipes-subtitle">Click on a recipe to view its details.</p>

      <div className="recipe-grid">
        {recipeData.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            {...recipe} 
          />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
