// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import SochiHotelLuxuryMain from 'src/components/Hotel/Hotels/Sochi/Luxury/Main'
import SochiHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel1';
import SochiHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel2';
import SochiHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel3';

// Code
class SochiLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/sochi/hotels/luxury" exact component={SochiHotelLuxuryMain} />
        <Route path="/city/sochi/hotels/luxury/pullman" exact component={SochiHotelLuxuryHotel1} />
        <Route path="/city/sochi/hotels/luxury/hyatt" exact component={SochiHotelLuxuryHotel2} />
        <Route path="/city/sochi/hotels/luxury/rodina" exact component={SochiHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default SochiLuxury;
