import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Pages/Home';

import Recipes from './components/Pages/Recipes'

import About from './components/Pages/About'

import UploadRecipe from './components/Pages/Upload';

import RecipeDetails from './components/Pages/RecipeDetails';

import Navbar from './components/Navbar';

import Footer from './components/AppFooter';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/upload" element={<UploadRecipe />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
