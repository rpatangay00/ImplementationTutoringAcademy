import React from 'react';
import { useFavoriteContext } from './FavoriteContext';

const TutorCardInner = ({ tutor }) => {
  const { favorites, addFavorite } = useFavoriteContext();

  const isFavorite = favorites.some((favTutor) => favTutor.id === tutor.id);

  const handleClick = () => {
    addFavorite(tutor);
  };

  return (
    <div> 
    <div className="tutor-card" align="center">
      <h3>
        {tutor.name} -- {Array.isArray(tutor.subject) ? tutor.subject.join(", ") : tutor.subject} --       <button onClick={handleClick} disabled={isFavorite}>
        {isFavorite ? <span className="favorite-btn">Favorited</span> : <span className="add-favorite-btn">Add to favorites</span>}
      </button> {isFavorite && <span>❤️</span>}
      </h3>

    </div>
    </div>
  );
};

const TutorCard = ({ tutor }) => {
  return (
    <TutorCardInner
      tutor={{
        ...tutor,
        isFavorite: false,
      }}
    />
  );
};

export default TutorCard;
