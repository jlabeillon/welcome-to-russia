// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Restaurants from 'src/containers/Restaurant';

// Code
class Restaurant extends React.Component {
  render() {
    return (
      <Route path="/city/:slug/restaurants" component={Restaurants} />
    );
  };
}

// Export
export default Restaurant;
