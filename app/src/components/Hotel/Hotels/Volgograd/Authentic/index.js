// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import VolgogradHotelAuthenticMain from 'src/components/Hotel/Hotels/Volgograd/Authentic/Main'
import VolgogradHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Volgograd/Authentic/Hotel1';
import VolgogradHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Volgograd/Authentic/Hotel2';
import VolgogradHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Volgograd/Authentic/Hotel3';

// Code
class VolgogradAuthentic extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/volgograd/hotels/authentic" exact component={VolgogradHotelAuthenticMain} />
        <Route path="/city/volgograd/hotels/authentic/zamok" exact component={VolgogradHotelAuthenticHotel1} />
        <Route path="/city/volgograd/hotels/authentic/plaza" exact component={VolgogradHotelAuthenticHotel2} />
        <Route path="/city/volgograd/hotels/authentic/sloboda" exact component={VolgogradHotelAuthenticHotel3} />
      </div>
    );
  };
}

// Export
export default VolgogradAuthentic;
