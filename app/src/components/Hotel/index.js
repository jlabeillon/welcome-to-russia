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
      </div>
    );
  };
}

// Export
export default Hotel;
