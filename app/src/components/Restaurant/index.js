// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Restaurants from 'src/containers/Restaurant';

// Code
const Restaurant = () => (
  <Route path="/city/:slug/restaurants" component={Restaurants} />
);

// Export
export default Restaurant;
