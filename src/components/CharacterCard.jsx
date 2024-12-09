import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <div className={styles.card}>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} className={styles.cardImage} />
      </Link>
      <h3>{character.name}</h3>
      <button
        onClick={() => toggleFavorite(character)}
        className={styles.buttonCard}
      >
        {isFavorite ? '⭐ Remove from Favorites' : '☆ Add to Favorites'}
      </button>
    </div>
  );
};

export default CharacterCard;
