// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import PetersbourgHotelLuxuryMain from 'src/components/Hotel/Hotels/Petersbourg/Luxury/Main'
import PetersbourgHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Petersbourg/Luxury/Hotel1';
import PetersbourgHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Petersbourg/Luxury/Hotel2';
import PetersbourgHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Petersbourg/Luxury/Hotel3';

// Code
class PetersbourgLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/petersbourg/hotels/luxury" exact component={PetersbourgHotelLuxuryMain} />
        <Route path="/city/petersbourg/hotels/luxury/four" exact component={PetersbourgHotelLuxuryHotel1} />
        <Route path="/city/petersbourg/hotels/luxury/lotte" exact component={PetersbourgHotelLuxuryHotel2} />
        <Route path="/city/petersbourg/hotels/luxury/belmond" exact component={PetersbourgHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default PetersbourgLuxury;
