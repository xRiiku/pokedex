import React, { useState } from 'react';
import './LeagueSelector.css'
import Pokedex from '../hooks/Pokedex';


const LeagueSelector = () => {
    const [KantoVisible, setKantoVisible] = useState(false);
    const [JhotoVisible, setJhotoVisible] = useState(false);
    const [HoennVisible, setHoennVisible] = useState(false);
    const [SinnohVisible, setSinnohVisible] = useState(false);
    const [TeseliaVisible, setTeseliaVisible] = useState(false);
    const [KalosVisible, setKalosVisible] = useState(false);
    const [AlolaVisible, setAlolaVisible] = useState(false);
    const [GalarVisible, setGalarVisible] = useState(false);
    const [OtherVisible, setOtherVisible] = useState(false);

    function handleClickKanto() {
        setKantoVisible(true);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
        
    }
    function handleClickJhoto() {
        setJhotoVisible(true);
        setKantoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickHoenn() {
        setHoennVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickSinnoh() {
        setSinnohVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickTeselia() {
        setTeseliaVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickKalos() {
        setKalosVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickAlola() {
        setAlolaVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setGalarVisible(false);
        setOtherVisible(false);
    }
    function handleClickGalar() {
        setGalarVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setOtherVisible(false);
    }
    function handleClickOther() {
        setOtherVisible(true);
        setKantoVisible(false);
        setJhotoVisible(false);
        setHoennVisible(false);
        setSinnohVisible(false);
        setTeseliaVisible(false);
        setKalosVisible(false);
        setAlolaVisible(false);
        setGalarVisible(false);
    }

    return (
        <div className='selector-container'>
            <div className='buttons'>
                <button className='kantoBtn' onClick={handleClickKanto}>KANTO</button>
                <button className='jhotoBtn' onClick={handleClickJhoto}>JHOTO</button>
                <button className='hoennBtn' onClick={handleClickHoenn}>HOENN</button>
                <button className='sinnohBtn' onClick={handleClickSinnoh}>SINNOH</button>
                <button className='teseliaBtn' onClick={handleClickTeselia}>TESELIA</button>
                <button className='kalosBtn' onClick={handleClickKalos}>KALOS</button>
                <button className='alolaBtn' onClick={handleClickAlola}>ALOLA</button>
                <button className='galarBtn' onClick={handleClickGalar}>GALAR</button>
                <button className='othersBtn' onClick={handleClickOther}>OTHERS</button>
            </div>

            <div className='pokemons'>
                {KantoVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=151"/>}
                {JhotoVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"/>}
                {HoennVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=135&offset=251"/>}
                {SinnohVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=107&offset=386"/>}
                {TeseliaVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=156&offset=493"/>}
                {KalosVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=71&offset=649"/>}
                {AlolaVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=81&offset=721"/>}
                {GalarVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=96&offset=802"/>}
                {OtherVisible && <Pokedex url="https://pokeapi.co/api/v2/pokemon?limit=0&offset=898"/>}
            </div>


        </div>
    );
}

export default LeagueSelector;
