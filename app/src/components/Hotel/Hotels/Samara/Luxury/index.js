// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import SamaraHotelLuxuryMain from 'src/components/Hotel/Hotels/Samara/Luxury/Main'
import SamaraHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel1';
import SamaraHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel2';
import SamaraHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel3';

// Code
class SamaraLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/samara/hotels/luxury" exact component={SamaraHotelLuxuryMain} />
        <Route path="/city/samara/hotels/luxury/holiday" exact component={SamaraHotelLuxuryHotel1} />
        <Route path="/city/samara/hotels/luxury/renaissance" exact component={SamaraHotelLuxuryHotel2} />
        <Route path="/city/samara/hotels/luxury/glinka" exact component={SamaraHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default SamaraLuxury;
