// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import KazanHotelLuxuryMain from 'src/components/Hotel/Hotels/Kazan/Luxury/Main'
import KazanHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Kazan/Luxury/Hotel1';
import KazanHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Kazan/Luxury/Hotel2';
import KazanHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Kazan/Luxury/Hotel3';

// Code
class KazanLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/kazan/hotels/luxury" exact component={KazanHotelLuxuryMain} />
        <Route path="/city/kazan/hotels/luxury/hilton" exact component={KazanHotelLuxuryHotel1} />
        <Route path="/city/kazan/hotels/luxury/shalyapin" exact component={KazanHotelLuxuryHotel2} />
        <Route path="/city/kazan/hotels/luxury/luciano" exact component={KazanHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default KazanLuxury;
