// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import NovgorodHotelEcoMain from 'src/components/Hotel/Hotels/Novgorod/Eco/Main'
import NovgorodHotelEcoHotel1 from 'src/components/Hotel/Hotels/Novgorod/Eco/Hotel1';
import NovgorodHotelEcoHotel2 from 'src/components/Hotel/Hotels/Novgorod/Eco/Hotel2';
import NovgorodHotelEcoHotel3 from 'src/components/Hotel/Hotels/Novgorod/Eco/Hotel3';

// Code
class NovgorodEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/novgorod/hotels/eco" exact component={NovgorodHotelEcoMain} />
        <Route path="/city/novgorod/hotels/eco/mona" exact component={NovgorodHotelEcoHotel1} />
        <Route path="/city/novgorod/hotels/eco/baget" exact component={NovgorodHotelEcoHotel2} />
        <Route path="/city/novgorod/hotels/eco/max" exact component={NovgorodHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default NovgorodEco;
