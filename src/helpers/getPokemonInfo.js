import axios from 'axios';

export const getPokemonInfo = async (pokemonName) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  return data;
};
