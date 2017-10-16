// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

import MoscowRestaurants from 'src/components/Restaurant/Restaurants/Moscow';

// Code
class Restaurant extends React.Component {
  render() {
    return (
      <Route path="/city/moscow/restaurants" component={MoscowRestaurants} />
    );
  };
}

// Export
export default Restaurant;
