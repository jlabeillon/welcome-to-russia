// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Moscow from 'src/components/City/Cities/Moscow';
import Petersbourg from 'src/components/City/Cities/Petersbourg';
import Yekaterinburg from 'src/components/City/Cities/Yekaterinburg';
import Sochi from 'src/components/City/Cities/Sochi';
import Kaliningrad from 'src/components/City/Cities/Kaliningrad';
import Kazan from 'src/components/City/Cities/Kazan';
import Volgograd from 'src/components/City/Cities/Volgograd';
import Saransk from 'src/components/City/Cities/Saransk';
import Samara from 'src/components/City/Cities/Samara';
import Rostov from 'src/components/City/Cities/Rostov';
import Novgorod from 'src/components/City/Cities/Novgorod';

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
