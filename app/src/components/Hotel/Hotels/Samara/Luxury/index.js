// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import SaranskHotelLuxuryMain from 'src/components/Hotel/Hotels/Saransk/Luxury/Main'
import SaranskHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Saransk/Luxury/Hotel1';
import SaranskHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Saransk/Luxury/Hotel2';
import SaranskHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Saransk/Luxury/Hotel3';

// Code
class SaranskLuxury extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/saransk/hotels/luxury" exact component={SaranskHotelLuxuryMain} />
        <Route path="/city/saransk/hotels/luxury/admiral" exact component={SaranskHotelLuxuryHotel1} />
        <Route path="/city/saransk/hotels/luxury/victoria" exact component={SaranskHotelLuxuryHotel2} />
        <Route path="/city/saransk/hotels/luxury/severny" exact component={SaranskHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default SaranskLuxury;
