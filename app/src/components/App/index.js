// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import City from 'src/components/City';
import Home from 'src/components/Home';
import Hotels from 'src/components/Hotels';
import Hotel from 'src/components/Hotels/Hotel';
import Restaurants from 'src/components/Restaurants';
import Stadium from 'src/components/Stadium';

// Code
class App extends React.Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/city/moscow" exact component={City} />
          <Route path="/city/moscow/hotels" exact component={Hotels} />
          <Route path="/city/moscow/hotel" exact component={Hotel} />
          <Route path="/city/moscow/restaurants" exact component={Restaurants} />
          <Route path="/city/moscow/stadium" exact component={Stadium} />
      </div>
    );
  };
}

// Export
export default App;
