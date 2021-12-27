import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import './styles.css';

export const PokemonItem = () => {
  const { data, loading } = useFetchPokemon('salamence');
  console.log(data);

  return (
    <>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="container">
          <div className="pokemon_card">
            <div className="pokemon_title">
              {data.name} <p className="pokemon_id">#{data.id}</p>
            </div>
            <div className="pokemon_image_container">
              <img src={data.sprites?.front_default} alt="" />
            </div>
            <div className="pokemon_stats">
              <div className="types">
                Type\d/s:
                {data.types.map((t) => (
                  <li key={t.type.name}>{t.type.name}</li>
                ))}
              </div>
              <div className="height_weight">
                <ul>
                  <li>Height: {data.height}</li>
                  <li>Weight: {data.weight}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
