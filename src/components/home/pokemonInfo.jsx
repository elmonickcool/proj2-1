import React, { useState, useEffect } from 'react';
import PokemonFlavorText from './pokemonDescription';


function PokemonInfo(props) {
  const [type, setType] = useState();
  const [id, setID] = useState();
  const [sprites, setSprites] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonHeight,setPokemonHeight] = useState();
  const [pokemonWeight,setPokemonWeight] = useState();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`);
      const data = await response.json();
      setType(data.types[0].type.name);
      setID(data.id);
      setPokemonName(data.name);
      setPokemonHeight(data.height);
      setPokemonWeight(data.weight);
      
      setSprites(data.sprites.other['official-artwork'].front_default);
    }
    fetchData();
  }, [props.pokemonName]);

  return (
    <div>
      <div className="row">
        <div className="col">
           #{id}
        </div>
        
      </div>
      <div className="row">
        <div className="col">
            <img className='img-fluid d-block' src={sprites} alt={props.pokemonName} />
        </div>
        <div className="col">
          {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
          <PokemonFlavorText textPokemon={pokemonName} />
        </div>
        <div className="row">
         Type: {type}
        </div>
        <div className="row">
         Height: {pokemonHeight}
        </div>
        <div className="row">
         Weight: {pokemonWeight}
        </div>
      </div>   
    </div>
  );
}

export default PokemonInfo;