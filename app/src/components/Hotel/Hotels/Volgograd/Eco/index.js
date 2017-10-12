// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import VolgogradHotelEcoMain from 'src/components/Hotel/Hotels/Volgograd/Eco/Main'
import VolgogradHotelEcoHotel1 from 'src/components/Hotel/Hotels/Volgograd/Eco/Hotel1';
import VolgogradHotelEcoHotel2 from 'src/components/Hotel/Hotels/Volgograd/Eco/Hotel2';
import VolgogradHotelEcoHotel3 from 'src/components/Hotel/Hotels/Volgograd/Eco/Hotel3';

// Code
class VolgogradEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/volgograd/hotels/eco" exact component={VolgogradHotelEcoMain} />
        <Route path="/city/volgograd/hotels/eco/lambert" exact component={VolgogradHotelEcoHotel1} />
        <Route path="/city/volgograd/hotels/eco/kani" exact component={VolgogradHotelEcoHotel2} />
        <Route path="/city/volgograd/hotels/eco/ram" exact component={VolgogradHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default VolgogradEco;
