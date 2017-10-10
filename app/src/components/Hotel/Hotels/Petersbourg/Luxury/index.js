// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import MoscowHotelLuxuryMain from 'src/components/Hotel/Hotels/Moscow/Luxury/Main'
import MoscowHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Moscow/Luxury/Hotel1';
import MoscowHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Moscow/Luxury/Hotel2';
import MoscowHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Moscow/Luxury/Hotel3';

// Code
class MoscowAuthentic extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/moscow/hotels/luxury" exact component={MoscowHotelLuxuryMain} />
        <Route path="/city/moscow/hotels/luxury/ararat" exact component={MoscowHotelLuxuryHotel1} />
        <Route path="/city/moscow/hotels/luxury/regis" exact component={MoscowHotelLuxuryHotel2} />
        <Route path="/city/moscow/hotels/luxury/four" exact component={MoscowHotelLuxuryHotel3} />
      </div>
    );
  };
}

// Export
export default MoscowAuthentic;
