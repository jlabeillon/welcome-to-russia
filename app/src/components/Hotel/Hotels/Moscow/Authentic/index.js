// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import MoscowHotelAuthenticMain from 'src/components/Hotel/Hotels/Moscow/Authentic/Main';
import MoscowHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Moscow/Authentic/Hotel1';
import MoscowHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Moscow/Authentic/Hotel2';
import MoscowHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Moscow/Authentic/Hotel3';

// Code
const MoscowAuthentic = () => (
  <div>
    <Route path="/city/moscow/hotels/authentic" exact component={MoscowHotelAuthenticMain} />
    <Route path="/city/moscow/hotels/authentic/tchaikovsky" exact component={MoscowHotelAuthenticHotel1} />
    <Route path="/city/moscow/hotels/authentic/radisson" exact component={MoscowHotelAuthenticHotel2} />
    <Route path="/city/moscow/hotels/authentic/ivan" exact component={MoscowHotelAuthenticHotel3} />
  </div>
);

// Export
export default MoscowAuthentic;
