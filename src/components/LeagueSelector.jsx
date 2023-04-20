import React, { useState } from 'react';
import './LeagueSelector.css'
import Pokedex from '../hooks/Pokedex';


const LeagueSelector = () => {
    const [visible, setVisible] = useState('');

    const handleClick = (name) => {
        setVisible(name);
    }

    return (
        <div className='selector-container'>
            <div className='buttons'>
                <button className='kantoBtn'  onClick={() => handleClick('kanto')}>KANTO</button>
                <button className='jhotoBtn'  onClick={() => handleClick('jhoto')}>JHOTO</button>
                <button className='hoennBtn'  onClick={() => handleClick('hoenn')}>HOENN</button>
                <button className='sinnohBtn'  onClick={() => handleClick('sinnoh')}>SINNOH</button>
                <button className='teseliaBtn'  onClick={() => handleClick('teselia')}>TESELIA</button>
                <button className='kalosBtn'  onClick={() => handleClick('kalos')}>KALOS</button>
                <button className='alolaBtn'  onClick={() => handleClick('alola')}>ALOLA</button>
                <button className='galarBtn'  onClick={() => handleClick('galar')}>GALAR</button>
                <button className='othersBtn'  onClick={() => handleClick('others')}>OTHERS</button>
            </div>
            <div className='pokemons'>
                {visible === 'kanto' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=151"/>}
                {visible === 'jhoto' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"/>}
                {visible === 'hoenn' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"/>}
                {visible === 'sinnoh' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"/>}
                {visible === 'teselia' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=156&offset=493"/>}
                {visible === 'kalos' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=71&offset=649"/>}
                {visible === 'alola' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=81&offset=721"/>}
                {visible === 'galar' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=96&offset=802"/>}
                {visible === 'others' && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=0&offset=898"/>}
            </div>
        </div>
    );
    }

export default LeagueSelector;
