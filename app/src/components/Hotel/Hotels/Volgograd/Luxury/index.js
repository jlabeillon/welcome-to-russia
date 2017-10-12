// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import VolgogradHotelLuxuryMain from 'src/components/Hotel/Hotels/Volgograd/Luxury/Main'
import VolgogradHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Volgograd/Luxury/Hotel1';
import VolgogradHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Volgograd/Luxury/Hotel2';
import VolgogradHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Volgograd/Luxury/Hotel3';

// Code
class KazanLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/volgograd/hotels/luxury" exact component={VolgogradHotelLuxuryMain} />
        <Route path="/city/volgograd/hotels/luxury/hampton" exact component={VolgogradHotelLuxuryHotel1} />
        <Route path="/city/volgograd/hotels/luxury/hilton" exact component={VolgogradHotelLuxuryHotel2} />
        <Route path="/city/volgograd/hotels/luxury/volgograd" exact component={VolgogradHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default KazanLuxury;
