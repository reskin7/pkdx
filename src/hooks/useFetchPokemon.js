import { useEffect, useState } from 'react';
import { getPokemonInfo } from '../helpers/getPokemonInfo';

export const useFetchPokemon = (pokemonName = '') => {
  const [pokemonInfo, setPokemonInfo] = useState({ data: {}, loading: true });

  useEffect(() => {
    getPokemonInfo(pokemonName).then((r) =>
      setPokemonInfo({ data: r, loading: false })
    );
  }, [pokemonName]);

  return pokemonInfo;
};
