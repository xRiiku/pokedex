import React, { useState } from 'react';

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
    }
    function handleClickJhoto() {
        setJhotoVisible(true);
    }
    function handleClickHoenn() {
        setHoennVisible(true);
    }
    function handleClickSinnoh() {
        setSinnohVisible(true);
    }
    function handleClickTeselia() {
        setTeseliaVisible(true);
    }
    function handleClickKalos() {
        setKalosVisible(true);
    }
    function handleClickAlola() {
        setAlolaVisible(true);
    }
    function handleClickGalar() {
        setGalarVisible(true);
    }
    function handleClickOther() {
        setOtherVisible(true);
    }

    return (
        <div className='selector-container'>

        <div>
        <button onClick={handleClickKanto}>KANTO</button>
        {KantoVisible && <Kanto />}
        </div>

        <div>
        <button onClick={handleClickJhoto}>JHOTO</button>
        {JhotoVisible && <Jhoto />}
        </div>

        <div>
        <button onClick={handleClickHoenn}>HOENN</button>
        {HoennVisible && <Hoenn />}
        </div>

        <div>
        <button onClick={handleClickSinnoh}>SINNOH</button>
        {SinnohVisible && <Sinnoh />}
        </div>

        <div>
        <button onClick={handleClickTeselia}>TESELIA</button>
        {TeseliaVisible && <Teselia />}
        </div>

        <div>
        <button onClick={handleClickKalos}>KALOS</button>
        {KalosVisible && <Kalos />}
        </div>

        <div>
        <button onClick={handleClickAlola}>ALOLA</button>
        {AlolaVisible && <Alola />}
        </div>

        <div>
        <button onClick={handleClickGalar}>GALAR</button>
        {GalarVisible && <Galar />}
        </div>

        <div>
        <button onClick={handleClickOther}>OTHERS</button>
        {OtherVisible && <Other />}
        </div>

        </div>
    );
}

export default LeagueSelector;
