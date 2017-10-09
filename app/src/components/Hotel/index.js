// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import MoscowEco from 'src/components/Hotel/Hotels/Moscow/Eco';
import MoscowAuthentic from 'src/components/Hotel/Hotels/Moscow/Authentic';
import MoscowLuxury from 'src/components/Hotel/Hotels/Moscow/Luxury';



// Code
class Hotel extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/moscow/hotels/eco" component={MoscowEco} />
        <Route path="/city/moscow/hotels/authentic" component={MoscowAuthentic} />
        <Route path="/city/moscow/hotels/luxury" component={MoscowLuxury} />
      </div>
    );
  };
}

// Export
export default Hotel;
