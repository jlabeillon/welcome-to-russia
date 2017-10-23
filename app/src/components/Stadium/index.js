// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Luzhniki from 'src/components/Stadium/Stadiums/Moscow/Luzhniki';
import Otkrytiye from 'src/components/Stadium/Stadiums/Moscow/Otkrytiye';
import PetersbourgArena from 'src/components/Stadium/Stadiums/Petersbourg';
import YekaterinburgArena from 'src/components/Stadium/Stadiums/Yekaterinburg';
import SochiArena from 'src/components/Stadium/Stadiums/Sochi';
import KazanArena from 'src/components/Stadium/Stadiums/Kazan';
import VolgogradArena from 'src/components/Stadium/Stadiums/Volgograd';
import SaranskArena from 'src/components/Stadium/Stadiums/Saransk';
import SamaraArena from 'src/components/Stadium/Stadiums/Samara';
import RostovArena from 'src/components/Stadium/Stadiums/Rostov';
import KaliningradArena from 'src/components/Stadium/Stadiums/Kaliningrad';
import NovgorodArena from 'src/components/Stadium/Stadiums/Novgorod';

// Code
const Stadium = () => (
  <div>
    <Route path="/city/moscow/stadium/luzhniki" exact component={Luzhniki} />
    <Route path="/city/moscow/stadium/otkrytiye" exact component={Otkrytiye} />
    <Route path="/city/petersbourg/stadium" exact component={PetersbourgArena} />
    <Route path="/city/yekaterinburg/stadium" exact component={YekaterinburgArena} />
    <Route path="/city/sochi/stadium" exact component={SochiArena} />
    <Route path="/city/kazan/stadium" exact component={KazanArena} />
    <Route path="/city/volgograd/stadium" exact component={VolgogradArena} />
    <Route path="/city/saransk/stadium" exact component={SaranskArena} />
    <Route path="/city/samara/stadium" exact component={SamaraArena} />
    <Route path="/city/rostov/stadium" exact component={RostovArena} />
    <Route path="/city/kaliningrad/stadium" exact component={KaliningradArena} />
    <Route path="/city/novgorod/stadium" exact component={NovgorodArena} />
  </div>
);
// Export
export default Stadium;
