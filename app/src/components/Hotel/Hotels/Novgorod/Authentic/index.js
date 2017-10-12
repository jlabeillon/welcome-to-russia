// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import NovgorodHotelAuthenticMain from 'src/components/Hotel/Hotels/Novgorod/Authentic/Main'
import NovgorodHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Novgorod/Authentic/Hotel1';
import NovgorodHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Novgorod/Authentic/Hotel2';
import NovgorodHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Novgorod/Authentic/Hotel3';

// Code
class NovgorodAuthentic extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/novgorod/hotels/authentic" exact component={NovgorodHotelAuthenticMain} />
        <Route path="/city/novgorod/hotels/authentic/volne" exact component={NovgorodHotelAuthenticHotel1} />
        <Route path="/city/novgorod/hotels/authentic/joy" exact component={NovgorodHotelAuthenticHotel2} />
        <Route path="/city/novgorod/hotels/authentic/nikitin" exact component={NovgorodHotelAuthenticHotel3} />
      </div>
    );
  };
}

// Export
export default NovgorodAuthentic;
