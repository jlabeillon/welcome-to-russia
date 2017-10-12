// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Local import
import MoscowEco from 'src/components/Hotel/Hotels/Moscow/Eco';
import MoscowAuthentic from 'src/components/Hotel/Hotels/Moscow/Authentic';
import MoscowLuxury from 'src/components/Hotel/Hotels/Moscow/Luxury';

import PetersbourgEco from 'src/components/Hotel/Hotels/Petersbourg/Eco';
import PetersbourgAuthentic from 'src/components/Hotel/Hotels/Petersbourg/Authentic';
import PetersbourgLuxury from 'src/components/Hotel/Hotels/Petersbourg/Luxury';

import YekaterinburgEco from 'src/components/Hotel/Hotels/Yekaterinburg/Eco';
import YekaterinburgAuthentic from 'src/components/Hotel/Hotels/Yekaterinburg/Authentic';
import YekaterinburgLuxury from 'src/components/Hotel/Hotels/Yekaterinburg/Luxury';

import SochiEco from 'src/components/Hotel/Hotels/Sochi/Eco';
import SochiAuthentic from 'src/components/Hotel/Hotels/Sochi/Authentic';
import SochiLuxury from 'src/components/Hotel/Hotels/Sochi/Luxury';

import KazanEco from 'src/components/Hotel/Hotels/Kazan/Eco';
import KazanAuthentic from 'src/components/Hotel/Hotels/Kazan/Authentic';
import KazanLuxury from 'src/components/Hotel/Hotels/Kazan/Luxury';

import VolgogradEco from 'src/components/Hotel/Hotels/Volgograd/Eco';
import VolgogradAuthentic from 'src/components/Hotel/Hotels/Volgograd/Authentic';
import VolgogradLuxury from 'src/components/Hotel/Hotels/Volgograd/Luxury';

import SaranskEco from 'src/components/Hotel/Hotels/Saransk/Eco';
import SaranskAuthentic from 'src/components/Hotel/Hotels/Saransk/Authentic';
import SaranskLuxury from 'src/components/Hotel/Hotels/Saransk/Luxury';

import SamaraEco from 'src/components/Hotel/Hotels/Samara/Eco';
import SamaraAuthentic from 'src/components/Hotel/Hotels/Samara/Authentic';
import SamaraLuxury from 'src/components/Hotel/Hotels/Samara/Luxury';

// Code
class Hotel extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/moscow/hotels/eco" component={MoscowEco} />
        <Route path="/city/moscow/hotels/authentic" component={MoscowAuthentic} />
        <Route path="/city/moscow/hotels/luxury" component={MoscowLuxury} />

        <Route path="/city/petersbourg/hotels/eco" component={PetersbourgEco} />
        <Route path="/city/petersbourg/hotels/authentic" component={PetersbourgAuthentic} />
        <Route path="/city/petersbourg/hotels/luxury" component={PetersbourgLuxury} />

        <Route path="/city/yekaterinburg/hotels/eco" component={YekaterinburgEco} />
        <Route path="/city/yekaterinburg/hotels/authentic" component={YekaterinburgAuthentic} />
        <Route path="/city/yekaterinburg/hotels/luxury" component={YekaterinburgLuxury} />

        <Route path="/city/sochi/hotels/eco" component={SochiEco} />
        <Route path="/city/sochi/hotels/authentic" component={SochiAuthentic} />
        <Route path="/city/sochi/hotels/luxury" component={SochiLuxury} />

        <Route path="/city/kazan/hotels/eco" component={KazanEco} />
        <Route path="/city/kazan/hotels/authentic" component={KazanAuthentic} />
        <Route path="/city/kazan/hotels/luxury" component={KazanLuxury} />

        <Route path="/city/volgograd/hotels/eco" component={VolgogradEco} />
        <Route path="/city/volgograd/hotels/authentic" component={VolgogradAuthentic} />
        <Route path="/city/volgograd/hotels/luxury" component={VolgogradLuxury} />

        <Route path="/city/saransk/hotels/eco" component={SaranskEco} />
        <Route path="/city/saransk/hotels/authentic" component={SaranskAuthentic} />
        <Route path="/city/saransk/hotels/luxury" component={SaranskLuxury} />

        <Route path="/city/samara/hotels/eco" component={SamaraEco} />
        <Route path="/city/samara/hotels/authentic" component={SamaraAuthentic} />
        <Route path="/city/samara/hotels/luxury" component={SamaraLuxury} />
      </div>
    );
  };
}

// Export
export default Hotel;
