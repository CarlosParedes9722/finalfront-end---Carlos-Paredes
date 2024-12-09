import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import styles from '../components/CharacterCard.module.css';

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>No favorites yet. Add some!</p>;
  }

  return (
    <div>
      <h1>Favorites</h1>
      <div className={styles.cardsContainer}>
        {favorites.map((fav) => (
          <div
            key={fav.id}
            className={styles.card}
          >
            <img src={fav.image} alt={fav.name} className={styles.cardImage} />
            <h3>{fav.name}</h3>
            <button
              onClick={() => toggleFavorite(fav)}
              className={styles.cardButton}
            >
              ⭐ Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
