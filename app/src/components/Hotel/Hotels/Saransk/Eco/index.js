// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import SaranskHotelEcoMain from 'src/components/Hotel/Hotels/Saransk/Eco/Main'
import SaranskHotelEcoHotel1 from 'src/components/Hotel/Hotels/Saransk/Eco/Hotel1';
import SaranskHotelEcoHotel2 from 'src/components/Hotel/Hotels/Saransk/Eco/Hotel2';
import SaranskHotelEcoHotel3 from 'src/components/Hotel/Hotels/Saransk/Eco/Hotel3';

// Code
class SaranskEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/saransk/hotels/eco" exact component={SaranskHotelEcoMain} />
        <Route path="/city/saransk/hotels/eco/shpinat" exact component={SaranskHotelEcoHotel1} />
        <Route path="/city/saransk/hotels/eco/olympia" exact component={SaranskHotelEcoHotel2} />
        <Route path="/city/saransk/hotels/eco/vizit" exact component={SaranskHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default SaranskEco;
