import React from 'react';
import { useFavoriteContext } from './FavoriteContext';

const TutorCardInner = ({ tutor }) => {
  const { favorites, addFavorite } = useFavoriteContext();

  const isFavorite = favorites.some((favTutor) => favTutor.id === tutor.id);

  const handleClick = () => {
    addFavorite(tutor);
  };

  return (
    <div className="tutor-card">
      <h3>
        {tutor.name} {isFavorite && <span>❤️</span>}
      </h3>
      <p>{Array.isArray(tutor.subject) ? tutor.subject.join(", ") : tutor.subject}</p>
      <button onClick={handleClick} disabled={isFavorite}>
        {isFavorite ? <span className="favorite-btn">Favorited</span> : <span className="add-favorite-btn">Add to favorites</span>}
      </button>
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
