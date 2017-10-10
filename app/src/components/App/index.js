// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import City from 'src/components/City';
import Home from 'src/components/Home';
import Hotel from 'src/components/Hotel';
import Restaurants from 'src/components/Restaurants';
import Stadium from 'src/components/Stadium';

// Code
class App extends React.Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/city/:city" exact component={City} />
          <Route path="/city/:city/hotels/:category" exact component={Hotel} />
          <Route path="/city/:city/hotels/:category/:hotel" exact component={Hotel} />
          <Route path="/city/:city/restaurants" exact component={Restaurants} />
          <Route path="/city/:city/stadium" exact component={Stadium} />
          <Route path="/city/:city/stadium/:name" exact component={Stadium} />
      </div>
    );
  };
}

// Export
export default App;
