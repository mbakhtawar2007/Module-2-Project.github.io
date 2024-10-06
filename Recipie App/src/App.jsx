import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
// import Home from './pages/home';
import Home from './Components/Pages/home';
// import Recipes from './pages/Recipes';
import Recipes from './Components/Pages/Recipes';
// import About from './pages/About';
import About from './Components/Pages/About';
// import SignIn from './pages/SignIn';
import SignIn from './Components/Pages/SignIn';
// import SignUp from './pages/SignUp';
import SignUp from './Components/Pages/SignUp';
// import Navbar from './Components/Navbar';
import Navbar from './Components/navBar';
import AppFooter from './components/Footer';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Content>
        <AppFooter />
      </Layout>
    </Router>
  );
}

export default App;
