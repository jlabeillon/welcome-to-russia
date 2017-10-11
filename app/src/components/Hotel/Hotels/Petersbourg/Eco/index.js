// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import PetersbourgHotelEcoMain from 'src/components/Hotel/Hotels/Petersbourg/Eco/Main'
import PetersbourgHotelEcoHotel1 from 'src/components/Hotel/Hotels/Petersbourg/Eco/Hotel1';
import PetersbourgHotelEcoHotel2 from 'src/components/Hotel/Hotels/Petersbourg/Eco/Hotel2';
import PetersbourgHotelEcoHotel3 from 'src/components/Hotel/Hotels/Petersbourg/Eco/Hotel3';

// Code
class PetersbourgEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/petersbourg/hotels/eco" exact component={PetersbourgHotelEcoMain} />
        <Route path="/city/petersbourg/hotels/eco/piter" exact component={PetersbourgHotelEcoHotel1} />
        <Route path="/city/petersbourg/hotels/eco/capital" exact component={PetersbourgHotelEcoHotel2} />
        <Route path="/city/petersbourg/hotels/eco/gora" exact component={PetersbourgHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default PetersbourgEco;
