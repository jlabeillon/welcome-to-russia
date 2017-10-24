// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import RostovHotelAuthenticMain from 'src/components/Hotel/Hotels/Rostov/Authentic/Main';
import RostovHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Rostov/Authentic/Hotel1';
import RostovHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Rostov/Authentic/Hotel2';
import RostovHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Rostov/Authentic/Hotel3';

// Code
const RostovAuthentic = () => (
  <div>
    <Route path="/city/rostov/hotels/authentic" exact component={RostovHotelAuthenticMain} />
    <Route path="/city/rostov/hotels/authentic/nabokov" exact component={RostovHotelAuthenticHotel1} />
    <Route path="/city/rostov/hotels/authentic/legenda" exact component={RostovHotelAuthenticHotel2} />
    <Route path="/city/rostov/hotels/authentic/petrovsky" exact component={RostovHotelAuthenticHotel3} />
  </div>
);

// Export
export default RostovAuthentic;
