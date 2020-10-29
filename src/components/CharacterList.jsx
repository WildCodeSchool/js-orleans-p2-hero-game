import React from 'react';
import './CharacterList.css';

import ThanosIc from '../assets/Thanos_icone-min.png';
import FlashIc from '../assets/Flash_icone-min.png';
import GamoraIc from '../assets/Gamora_icone-min.png';
import GreenlanternIc from '../assets/Greenlantern_icone-min.png';
import GrootIc from '../assets/Groot_icone-min.png';
import HarleyquinnIc from '../assets/Harleyquinn_icone-min.png';
import HulkIc from '../assets/Hulk_icone-min.png';
import InvisibleWomanIc from '../assets/Invisiblewoman_icone-min.png';
import IronManIc from '../assets/Ironman.icone-min.png';
import JokerIc from '../assets/Joker_icone-min.png';
import MedusaIc from '../assets/Medusa_icone-min.png';
import MeraIc from '../assets/Mera_icone-min.png';
import PoisonIvyIc from '../assets/Poisonivy_icone-min.png';
import QuickSilverIc from '../assets/Quicksilver_icone-min.png';
import SpiderManIc from '../assets/Spiderman_icone-min.png';
import SuperGirlIc from '../assets/Supergirl_icone-min.png';
import SuperManIc from '../assets/Superman_icone-min.png';
import WolwerineIc from '../assets/Wolwerine_icone-min.png';
import WonderWomanIc from '../assets/Wonderwoman_icone-min.png';
import CaptainMarvelIc from '../assets/Captainmarvel_icone-min.png';

import StrenghtIc from '../assets/Icone_Force.png';
import IntelIc from '../assets/Icone_Intelligence.png';
import SpeedIc from '../assets/Icone_Rapidité.png';
import DurabilityIc from '../assets/Icone_Resistance.png';

import CaptainMarvelStat from '../assets/Carte_CaptainMarvel-min.png';
import FlashStat from '../assets/Carte_Flash-min.png';
import GamoraStat from '../assets/Carte_Gamora-min.png';
import GreenLanternStat from '../assets/Carte_Greenlantern-min.png';
import GrootStat from '../assets/Carte_Groot-min.png';
import HarleyQuinnStat from '../assets/Carte_Harleyquinn-min.png';
import HulkStat from '../assets/Carte_Hulk-min.png';
import InvisibleWomanStat from '../assets/Carte_Invisiblewoman-min.png';
import IronManStat from '../assets/Carte_Ironman-min.png';
import JokerStat from '../assets/Carte_Joker-min.png';
import MedusaStat from '../assets/Carte_Medusa-min.png';
import MeraStat from '../assets/Carte_Mera-min.png';
import PoisonIvyStat from '../assets/Carte_Poisonivy-min.png';
import QuickSilverStat from '../assets/Carte_QuickSilver-min.png';
import SpiderManStat from '../assets/Carte_Spiderman-min.png';
import SuperGirlStat from '../assets/Carte_Supergirl-min.png';
import SuperManStat from '../assets/Carte_Superman-min.png';
import ThanosStat from '../assets/Carte_Thanos-min.png';
import WolwerineStat from '../assets/Carte_Wolwerine-min.png';
import WonderWomanStat from '../assets/Carte_Wonderwoman-min.png';

const CharacterList = () => {

    

        const [change, setChange] = React.useState(false);

        const QuickSilver= () => setChange(!change);
        const SuperMan= () => setChange(!change);
    




    return (
        <div id="personnage" className="list">
            
            <img id="icons" className="one" src={QuickSilverIc} onClick={QuickSilver} />
                {change && (
                    <img className="card" src={QuickSilverStat} />
                )}
            <img id="icons" className="two" src={SuperManIc}  onClick={SuperMan} />
                {change && (
                    <img className="card" src={SuperManStat} />
                )}
            <img id="icons" className="five" src={SuperGirlIc}/>
            <img id="icons" className="six" src={MeraIc}/>
            <img id="icons" className="seven" src={FlashIc}/>

            <img id="icons" className="three" src={CaptainMarvelIc}/>
            <img id="icons" className="four" src={GrootIc}/>
            <img id="icons" className="eight" src={GamoraIc}/>
            <img id="icons" className="nine" src={IronManIc}/>
            <img id="icons" className="ten" src={GreenlanternIc}/>

            <img id="icons" className="eleven" src={HulkIc}/>
            <img id="icons" className="twelve" src={InvisibleWomanIc}/>
            <img id="icons" className="thirteen" src={WonderWomanIc}/>
            <img id="icons" className="seventeen" src={WolwerineIc}/>
            <img id="icons" className="eighteen" src={ThanosIc}/>

            <img id="icons" className="sixteen" src={JokerIc}/>
            <img id="icons" className="fifteen" src={HarleyquinnIc}/>
            <img id="icons" className="fourteen" src={PoisonIvyIc}/>
            <img id="icons" className="nineteen" src={MedusaIc}/>
            <img id="icons" className="twenty" src={SpiderManIc}/>

            <img className="strenght" src={StrenghtIc} />
            <img className="speed" src={SpeedIc} />
            <img className="durabi" src={DurabilityIc} />
            <img className="intel" src={IntelIc} />
        </div>
    )
}

export default CharacterList;
