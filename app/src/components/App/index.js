// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Local import
import City from 'src/components/City';
import Home from 'src/components/Home';
import Hotel from 'src/components/Hotel';
import Restaurant from 'src/components/Restaurant';
import Stadium from 'src/components/Stadium';
import Visa from 'src/components/Visa';
import Accommodation from 'src/components/Hotel/Accommodation';
import Transport from 'src/components/Transport';
import Competition from 'src/components/Competition';

// Code
class App extends React.Component {
  render() {
    return (
      <div>
          <Route path="/" exact component={Home} />
          <Route path="/city/:city" exact component={City} />
          <Route path="/city/:city/hotels/:category" exact component={Hotel} />
          <Route path="/city/:city/hotels/:category/:hotel" exact component={Hotel} />
          <Route path="/city/:city/restaurants" exact component={Restaurant} />
          <Route path="/city/:city/stadium" exact component={Stadium} />
          <Route path="/city/:city/stadium/:name" exact component={Stadium} />
          <Route path="/visa" exact component={Visa} />
          <Route path="/email-sended" exact component={Hotel} />
          <Route path="/accommodation" exact component={Accommodation} />
          <Route path="/transports" exact component={Transport} />
          <Route path="/competition" exact component={Competition} />
      </div>
    );
  };
}

// Export
export default App;
