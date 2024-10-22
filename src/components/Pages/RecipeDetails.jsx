// src/pages/RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { Button, Typography } from 'antd';
import '../PagesCss/RecipeDetails.css'; // Import any required CSS

const { Title, Paragraph } = Typography;

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the URL

  const recipeVideos = {
    'spaghetti-carbonara': {
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish with eggs, cheese, and pancetta.',
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    'chicken-tikka': {
      title: 'Chicken Tikka Masala',
      description: 'A flavorful Indian curry made with marinated chicken.',
      videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    },
    'vegetable-stirfry': {
      title: 'Vegetable Stir Fry',
      description: 'A healthy dish with seasonal vegetables and soy sauce.',
      videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  };

  const recipe = recipeVideos[recipeId];

  return (
    <div className="recipe-details">
      <Title>{recipe.title}</Title>
      <video width="100%" controls>
        <source src={recipe.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Paragraph>{recipe.description}</Paragraph>
      <Button type="primary" style={{ marginTop: '10px' }}>
        <a href={recipe.videoSrc} download>Download Recipe</a>
      </Button>
    </div>
  );
};

export default RecipeDetails;
