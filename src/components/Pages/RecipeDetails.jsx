// src/pages/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { Button } from 'antd';

const RecipeDetails = () => {
  const { recipeId } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Video Player</h1>
      <video width="100%" controls>
        <source src={`https://via.placeholder.com/recipe-video/${recipeId}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Button type="primary" style={{ marginTop: '10px' }}>
        <a href={`https://via.placeholder.com/recipe-video/${recipeId}`} download>
          Download Recipe
        </a>
      </Button>
    </div>
  );
};

export default RecipeDetails;
