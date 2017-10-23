// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Moscow from 'src/containers/City/Moscow';
import Petersbourg from 'src/containers/City/Petersbourg';
import Yekaterinburg from 'src/containers/City/Yekaterinburg';
import Sochi from 'src/containers/City/Sochi';
import Kaliningrad from 'src/containers/City/Kaliningrad';
import Kazan from 'src/containers/City/Kazan';
import Volgograd from 'src/containers/City/Volgograd';
import Saransk from 'src/containers/City/Saransk';
import Samara from 'src/containers/City/Samara';
import Rostov from 'src/containers/City/Rostov';
import Novgorod from 'src/containers/City/Novgorod';

// Code
const City = () => (
  <div>
    <Route path="/city/moscow" exact component={Moscow} />
    <Route path="/city/saint-petersbourg" exact component={Petersbourg} />
    <Route path="/city/yekaterinburg" exact component={Yekaterinburg} />
    <Route path="/city/sochi" exact component={Sochi} />
    <Route path="/city/kaliningrad" exact component={Kaliningrad} />
    <Route path="/city/kazan" exact component={Kazan} />
    <Route path="/city/volgograd" exact component={Volgograd} />
    <Route path="/city/saransk" exact component={Saransk} />
    <Route path="/city/samara" exact component={Samara} />
    <Route path="/city/rostov" exact component={Rostov} />
    <Route path="/city/nizhny-novgorod" exact component={Novgorod} />
  </div>
);
// Export
export default City;
