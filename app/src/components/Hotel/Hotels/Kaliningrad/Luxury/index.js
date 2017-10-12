// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import KaliningradHotelLuxuryMain from 'src/components/Hotel/Hotels/Kaliningrad/Luxury/Main'
import KaliningradHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Kaliningrad/Luxury/Hotel1';
import KaliningradHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Kaliningrad/Luxury/Hotel2';
import KaliningradHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Kaliningrad/Luxury/Hotel3';

// Code
class KaliningradLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/kaliningrad/hotels/luxury" exact component={KaliningradHotelLuxuryMain} />
        <Route path="/city/kaliningrad/hotels/luxury/palace" exact component={KaliningradHotelLuxuryHotel1} />
        <Route path="/city/kaliningrad/hotels/luxury/kaiserhof" exact component={KaliningradHotelLuxuryHotel2} />
        <Route path="/city/kaliningrad/hotels/luxury/buen" exact component={KaliningradHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default KaliningradLuxury;
