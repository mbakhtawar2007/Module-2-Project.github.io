import React from 'react';
import '../PagesCss/Recipes.css'; // Add your CSS file here

const RecipeCard = ({ videoSrc, title, description }) => (
  <div className="recipe-card" style={{ borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
    <video src={videoSrc} controls style={{ borderRadius: '10px', width: '100%' }} />
    <div className="recipe-content">
      <h3 style={{ color: '#C0392B' }}>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Recipes = () => {
  const recipeData = [
    {
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    // More recipes...
  ];

  return (
    <main className="content" style={{ padding: '20px', backgroundColor: '#ECF0F1' }}>
      <h1 style={{ textAlign: 'center', color: '#C0392B' }}>Recipes</h1>
      <p style={{ textAlign: 'center' }}>Here are some of our favorite recipes.</p>

      <div className="recipe-grid">
        {recipeData.map((recipe, index) => (
          <RecipeCard
            key={index}
            videoSrc={recipe.videoSrc}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
