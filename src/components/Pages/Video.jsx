// src/pages/Video.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Divider, Rate } from 'antd';

const Video = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  // Example data (replace with actual data retrieval logic)
  const videoSource = `https://your-video-source.com/videos/${id}.mp4`;
  const recipeTitle = `Delicious Recipe ${id}`;
  const ingredients = ['1 cup flour', '2 eggs', '1/2 cup sugar', '1 tsp baking powder', '1/2 cup milk'];
  const instructions = [
    'Preheat the oven to 350°F (175°C).',
    'In a bowl, mix flour and baking powder.',
    'In another bowl, beat the eggs and sugar until fluffy.',
    'Combine the mixtures and add milk.',
    'Pour the batter into a greased pan and bake for 30 minutes.',
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', color: 'black' }}>
      <h2 style={{ textAlign: 'center', color: '#c0392b', fontFamily: 'Roboto, sans-serif' }}>
        {recipeTitle}
      </h2>
      
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Spin size="large" />
        </div>
      )}
      
      <video
        controls
        width="100%"
        onLoadedData={handleLoadedData}
        style={{ display: loading ? 'none' : 'block', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Divider orientation="left">Ingredients</Divider>
      <ul style={{ paddingLeft: '20px' }}>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>{ingredient}</li>
        ))}
      </ul>

      <Divider orientation="left">Instructions</Divider>
      <ol style={{ paddingLeft: '20px' }}>
        {instructions.map((instruction, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>{instruction}</li>
        ))}
      </ol>

      <Divider orientation="left">Rate this Recipe</Divider>
      <Rate allowHalf defaultValue={2.5} style={{ fontSize: '24px', marginBottom: '20px' }} />

      <Divider orientation="left">Comments</Divider>
      <div style={{ marginTop: '20px' }}>
        <textarea
          rows="4"
          style={{ width: '100%', borderRadius: '8px', padding: '10px', border: '1px solid #ccc' }}
          placeholder="Leave your comments here..."
        />
        <button style={{ marginTop: '10px', backgroundColor: '#c0392b', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 15px' }}>
          Submit Comment
        </button>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Description for video {id}. This video showcases the cooking process step by step.</p>
      </div>
    </div>
  );
};

export default Video;
