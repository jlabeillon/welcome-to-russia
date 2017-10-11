// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import PetersbourgHotelAuthenticMain from 'src/components/Hotel/Hotels/Petersbourg/Authentic/Main'
import PetersbourgHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Petersbourg/Authentic/Hotel1';
import PetersbourgHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Petersbourg/Authentic/Hotel2';
import PetersbourgHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Petersbourg/Authentic/Hotel3';

// Code
class PetersbourgAuthentic extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/petersbourg/hotels/authentic" exact component={PetersbourgHotelAuthenticMain} />
        <Route path="/city/petersbourg/hotels/authentic/pushka" exact component={PetersbourgHotelAuthenticHotel1} />
        <Route path="/city/petersbourg/hotels/authentic/ekaterina" exact component={PetersbourgHotelAuthenticHotel2} />
        <Route path="/city/petersbourg/hotels/authentic/hermitage" exact component={PetersbourgHotelAuthenticHotel3} />
      </div>
    );
  };
}

// Export
export default PetersbourgAuthentic;
