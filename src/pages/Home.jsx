import React, { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import styles from '../components/CharacterCard.module.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className={styles.cardsContainer}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;

