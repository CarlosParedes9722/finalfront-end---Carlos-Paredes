import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import About from './pages/About';
import Favorites from './pages/Favorites';
import CharacterDetails from './pages/CharacterDetail';

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;


