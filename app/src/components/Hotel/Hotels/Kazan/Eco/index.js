// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import KazanHotelEcoMain from 'src/components/Hotel/Hotels/Kazan/Eco/Main'
import KazanHotelEcoHotel1 from 'src/components/Hotel/Hotels/Kazan/Eco/Hotel1';
import KazanHotelEcoHotel2 from 'src/components/Hotel/Hotels/Kazan/Eco/Hotel2';
import KazanHotelEcoHotel3 from 'src/components/Hotel/Hotels/Kazan/Eco/Hotel3';

// Code
class KazanEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/kazan/hotels/eco" exact component={KazanHotelEcoMain} />
        <Route path="/city/kazan/hotels/eco/moskovskaya" exact component={KazanHotelEcoHotel1} />
        <Route path="/city/kazan/hotels/eco/kamala" exact component={KazanHotelEcoHotel2} />
        <Route path="/city/kazan/hotels/eco/gvardeiskaya" exact component={KazanHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default KazanEco;
