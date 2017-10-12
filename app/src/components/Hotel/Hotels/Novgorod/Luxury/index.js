// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import NovgorodHotelLuxuryMain from 'src/components/Hotel/Hotels/Novgorod/Luxury/Main'
import NovgorodHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Novgorod/Luxury/Hotel1';
import NovgorodHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Novgorod/Luxury/Hotel2';
import NovgorodHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Novgorod/Luxury/Hotel3';

// Code
class NovgorodLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/novgorod/hotels/luxury" exact component={NovgorodHotelLuxuryMain} />
        <Route path="/city/novgorod/hotels/luxury/sova" exact component={NovgorodHotelLuxuryHotel1} />
        <Route path="/city/novgorod/hotels/luxury/marriott" exact component={NovgorodHotelLuxuryHotel2} />
        <Route path="/city/novgorod/hotels/luxury/chayka" exact component={NovgorodHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default NovgorodLuxury;
