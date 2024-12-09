import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
