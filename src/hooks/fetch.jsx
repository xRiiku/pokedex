import React, { useState, useEffect } from 'react';
import { firstUpper } from '../helper/helper.js'


function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='container'>
      {pokemonList.map(pokemon => (
        <Pokemon key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

export function Pokemon({ url }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error(error));
  }, [url]);


  if (!pokemonData) return <div> Loading...</div>;

  
  return (

    <div className='card-pokemon'>
				<span className='pokemon-id'>Nº {pokemonData.id}</span>
					<div className='card-img'>
						<img src={pokemonData.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemonData?.name}`} />
						</div>

						<div className=' card-info'>
							<h1>{firstUpper(pokemonData.name)}</h1>
							<div className='card-types'>
								{pokemonData.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}> {type.type.name} </span>
								))}
							</div>
            </div>
    </div>
  
  );
}

export default PokemonList;
