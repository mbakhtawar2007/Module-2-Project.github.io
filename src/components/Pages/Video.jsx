// src/pages/Video.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {
  const { id } = useParams();
  
  return (
    <div>
      <video controls width="100%">
        <source src={`https://via.placeholder.com/recipe-video/${id}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <p>Description for video {id}.</p>
      </div>
    </div>
  );
};

export default Video;
