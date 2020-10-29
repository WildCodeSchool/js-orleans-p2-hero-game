import React from 'react';
import './ListPersos.css';

import ThanosIc from 'url:~/src/assets/Thanos_icone-min.png';
import FlashIc from 'url:~/src/assets/Flash_icone-min.png';
import GamoraIc from 'url:~/src/assets/Gamora_icone-min.png';
import GreenlanternIc from 'url:~/src/assets/Greenlantern_icone-min.png';
import GrootIc from 'url:~/src/assets/Groot_icone-min.png';
import HarleyquinnIc from 'url:~/src/assets/Harleyquinn_icone-min.png';
import HulkIc from 'url:~/src/assets/Hulk_icone-min.png';
import InvisibleWomanIc from 'url:~/src/assets/Invisiblewoman_icone-min.png';
import IronManIc from 'url:~/src/assets/Ironman.icone-min.png';
import JokerIc from 'url:~/src/assets/Joker_icone-min.png';
import MedusaIc from 'url:~/src/assets/Medusa_icone-min.png';
import MeraIc from 'url:~/src/assets/Mera_icone-min.png';
import PoisonIvyIc from 'url:~/src/assets/Poisonivy_icone-min.png';
import QuickSilverIc from 'url:~/src/assets/Quicksilver_icone-min.png';
import SpiderManIc from 'url:~/src/assets/Spiderman_icone-min.png';
import SuperGirlIc from 'url:~/src/assets/Supergirl_icone-min.png';
import SuperManIc from 'url:~/src/assets/Superman_icone-min.png';
import WolwerineIc from 'url:~/src/assets/Wolwerine_icone-min.png';
import WonderWomanIc from 'url:~/src/assets/Wonderwoman_icone-min.png';
import CaptainMarvelIc from 'url:~/src/assets/Captainmarvel_icone-min.png';

import StrenghtIc from 'url:~/src/assets/Icone_Force.png';
import IntelIc from 'url:~/src/assets/Icone_Intelligence.png';
import SpeedIc from 'url:~/src/assets/Icone_Rapidité.png';
import DurabilityIc from 'url:~/src/assets/Icone_Resistance.png';

import CaptainMarvelStat from 'url:~/src/assets/Carte_CaptainMarvel-min.png';
import FlashStat from 'url:~/src/assets/Carte_Flash-min.png';
import GamoraStat from 'url:~/src/assets/Carte_Gamora-min.png';
import GreenLanternStat from 'url:~/src/assets/Carte_Greenlantern-min.png';
import GrootStat from 'url:~/src/assets/Carte_Groot-min.png';
import HarleyQuinnStat from 'url:~/src/assets/Carte_Harleyquinn-min.png';
import HulkStat from 'url:~/src/assets/Carte_Hulk-min.png';
import InvisibleWomanStat from 'url:~/src/assets/Carte_Invisiblewoman-min.png';
import IronManStat from 'url:~/src/assets/Carte_Ironman-min.png';
import JokerStat from 'url:~/src/assets/Carte_Joker-min.png';
import MedusaStat from 'url:~/src/assets/Carte_Medusa-min.png';
import MeraStat from 'url:~/src/assets/Carte_Mera-min.png';
import PoisonIvyStat from 'url:~/src/assets/Carte_Poisonivy-min.png';
import QuickSilverStat from 'url:~/src/assets/Carte_QuickSilver-min.png';
import SpiderManStat from 'url:~/src/assets/Carte_Spiderman-min.png';
import SuperGirlStat from 'url:~/src/assets/Carte_Supergirl-min.png';
import SuperManStat from 'url:~/src/assets/Carte_Superman-min.png';
import ThanosStat from 'url:~/src/assets/Carte_Thanos-min.png';
import WolwerineStat from 'url:~/src/assets/Carte_Wolwerine-min.png';
import WonderWomanStat from 'url:~/src/assets/Carte_Wonderwoman-min.png';

function ListPersos() {

    let perso = [
        {
            id: 0,
            image: QuickSilverStat,
        },
        {
            id: 1,
            image: SuperManStat,
        },
        {
            id: 2,
            image: SuperGirlStat,
        },
        {
            id: 3,
            image: MeraStat,
        },
        {
            id: 4,
            image: FlashStat,
        },
        {
            id: 5,
            image: CaptainMarvelStat,
        },
        {
            id: 6,
            image: GrootStat,
        },
        {
            id: 7,
            image: GamoraStat,
        },
        {
            id: 8,
            image: IronManStat,
        },
        {
            id: 9,
            image: GreenLanternStat,
        },
        {
            id: 10,
            image: HulkStat,
        },
        {
            id: 11,
            image: InvisibleWomanStat,
        },
        {
            id: 12,
            image: WonderWomanStat,
        },
        {
            id: 13,
            image: WolwerineStat,
        },
        {
            id: 14,
            image: ThanosStat,
        },
        {
            id: 15,
            image: JokerStat,
        },
        {
            id: 16,
            image: HarleyQuinnStat,
        },
        {
            id: 17,
            image: PoisonIvyStat,
        },
        {
            id: 18,
            image: MedusaStat,
        },
        {
            id: 19,
            image: SpiderManStat,
        },
    ];


    function changeImage(n) {
        return <img id="card" src={perso[n].image} />;
    }




    return (
        <div id="personnage" className="list">
            <img id="card" src={perso[0].image} />

            <img id="icons" className="one" src={QuickSilverIc} onClick={changeImage(1)} />
            <img id="icons" className="two" src={SuperManIc} onClick={changeImage(2)} />
            <img id="icons" className="five" src={SuperGirlIc} />
            <img id="icons" className="six" src={MeraIc} />
            <img id="icons" className="seven" src={FlashIc} />

            <img id="icons" className="three" src={CaptainMarvelIc} />
            <img id="icons" className="four" src={GrootIc} />
            <img id="icons" className="eight" src={GamoraIc} />
            <img id="icons" className="nine" src={IronManIc} />
            <img id="icons" className="ten" src={GreenlanternIc} />

            <img id="icons" className="eleven" src={HulkIc} />
            <img id="icons" className="twelve" src={InvisibleWomanIc} />
            <img id="icons" className="thirteen" src={WonderWomanIc} />
            <img id="icons" className="seventeen" src={WolwerineIc} />
            <img id="icons" className="eighteen" src={ThanosIc} />

            <img id="icons" className="sixteen" src={JokerIc} />
            <img id="icons" className="fifteen" src={HarleyquinnIc} />
            <img id="icons" className="fourteen" src={PoisonIvyIc} />
            <img id="icons" className="nineteen" src={MedusaIc} />
            <img id="icons" className="twenty" src={SpiderManIc} />

            <img className="strenght" src={StrenghtIc} />
            <img className="speed" src={SpeedIc} />
            <img className="durabi" src={DurabilityIc} />
            <img className="intel" src={IntelIc} />
        </div>
    )
}

export default ListPersos;
