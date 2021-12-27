import React from 'react';
import { useFetchPokemon } from '../../hooks/useFetchPokemon';

export const PokemonGrid = () => {
  const { data, loading } = useFetchPokemon('');
  console.log(data);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {data.results.map((pokelist) => (
            <li>{pokelist.name}</li>
          ))}
        </div>
      )}
    </>
  );
};
