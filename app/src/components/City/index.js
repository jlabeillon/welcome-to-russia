// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Moscow from 'src/containers/City/Moscow';
import Petersbourg from 'src/components/City/Cities/Petersbourg';
// import Petersbourg from 'src/containers/City/Petersbourg';
import Yekaterinburg from 'src/components/City/Cities/Yekaterinburg';
// import Yekaterinburg from 'src/containers/City/Yekaterinburg';
import Sochi from 'src/components/City/Cities/Sochi';
// import Sochi from 'src/containers/City/Sochi';
import Kaliningrad from 'src/components/City/Cities/Kaliningrad';
// import Kaliningrad from 'src/containers/City/Kaliningrad';
import Kazan from 'src/components/City/Cities/Kazan';
// import Kazan from 'src/containers/City/Kazan';
import Volgograd from 'src/components/City/Cities/Volgograd';
// import Volgograd from 'src/containers/City/Volgograd';
import Saransk from 'src/components/City/Cities/Saransk';
// import Saransk from 'src/containers/City/Saransk';
import Samara from 'src/components/City/Cities/Samara';
// import Samara from 'src/containers/City/Samara';
import Rostov from 'src/components/City/Cities/Rostov';
// import Rostov from 'src/containers/City/Rostov';
import Novgorod from 'src/components/City/Cities/Novgorod';
// import Novgorod from 'src/containers/City/Novgorod';

// Code
class City extends React.Component {
  render() {
    return (
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
    )
  };
}
// Export
export default City;
