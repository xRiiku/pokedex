import React, { useState } from 'react';
import './LeagueSelector.css'
import Kanto from '../hooks/Kanto-1gen'
import Jhoto from '../hooks/Jhoto-2gen'
import Hoenn from '../hooks/Hoenn-3gen'
import Sinnoh from '../hooks/Sinnoh-4gen'
import Teselia from '../hooks/Teselia-5gen'
import Kalos from '../hooks/Kalos-6gen'
import Alola from '../hooks/Alola-7gen'
import Galar from '../hooks/Galar-8gen'
import Other from '../hooks/Other-9gen'

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
                {KantoVisible && <Kanto />}
                {JhotoVisible && <Jhoto />}
                {HoennVisible && <Hoenn />}
                {SinnohVisible && <Sinnoh />}
                {TeseliaVisible && <Teselia />}
                {KalosVisible && <Kalos />}
                {AlolaVisible && <Alola />}
                {GalarVisible && <Galar />}
                {OtherVisible && <Other />}
            </div>


        </div>
    );
}

export default LeagueSelector;
