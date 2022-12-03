import {Routes, Route, useNavigate} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Profile from './pages/Profile';
import AboutMe from './pages/AboutMe';
import Courses from './pages/Courses';
import Pokemons from './pages/Pokemons';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/products" element={<Products />} />   
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/pokemons" element={<Pokemons />} />  
        <Route path="/profile" element={<Profile/>}>
          <Route path="" element={<AboutMe />} />
          <Route path="courses" element={<Courses />} />
			  </Route> 
        <Route path="*" element={<h1>Page not found</h1>} />
			</Routes>
		  <Footer />
    </div>
  );
}

export default App;
