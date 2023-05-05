import React from 'react';
import TutorCard from './TutorCard';
import { useFavoriteContext } from './FavoriteContext';
import './FavoriteList.css';


const FavoriteList = () => {
  const { favorites } = useFavoriteContext();

  if (!favorites || favorites.length === 0) {
    return <div>No favorites found</div>;
  }

  return (
    <div className="favorites-container">
      {favorites.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
};

export default FavoriteList;
