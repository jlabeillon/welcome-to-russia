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
          <Route path="/city/:slug" exact component={City} />
          <Route path="/city/:slug/hotels/:slug" exact component={Hotel} />
          <Route path="/city/:slug/restaurants" exact component={Restaurants} />
          <Route path="/city/:slug/stadium" exact component={Stadium} />
          <Route path="/city/:slug/stadium/:slug" exact component={Stadium} />
      </div>
    );
  };
}

// Export
export default App;
