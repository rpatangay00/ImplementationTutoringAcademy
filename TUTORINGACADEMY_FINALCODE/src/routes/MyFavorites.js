import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TutorList from '../components/TutorList';
import FavoriteList from '../components/FavoriteList';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/MyFavorites.css';

function MyFavorites() {
  return (
    <div className="MyFavorites">
      <NavBar />
      <Routes>
        <Route path="/" element={<TutorList />} />
        <Route path="/favorites" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MyFavorites;