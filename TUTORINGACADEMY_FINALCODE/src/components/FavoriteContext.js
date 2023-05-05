import React, { useState, createContext, useContext } from "react";


const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (tutor) => {
    setFavorites([...favorites, tutor]);
  };

  const removeFavorite = (tutorId) => {
    setFavorites(favorites.filter((tutor) => tutor.id !== tutorId));
  };
  
  const showFavorites = () => {
    return favorites;
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, showFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
