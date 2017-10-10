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
      </div>
    );
  };
}

// Export
export default Hotel;
