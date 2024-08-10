import React, { useState, useEffect } from 'react';
import './App.css';

interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return (
    <>
    <div className="App">
      {pokemon && (
        <div className="pokemon-card">
          <div className="pokemon-info">
            <h2>#00{pokemon.id} </h2>
            <h1>{pokemon.name}</h1>
            <div className="pokemon-type">
              {pokemon.types.map((typeInfo, index) => (
                <span key={index} className={`type-${typeInfo.type.name}`}>
                  {typeInfo.type.name}
                </span>
              ))}
            </div>
          
            <button onClick={fetchRandomPokemon}>Next Pokémon</button>
          </div>
          <div className="pokemon-image">
            <img src={pokemon.sprites.front_default} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
