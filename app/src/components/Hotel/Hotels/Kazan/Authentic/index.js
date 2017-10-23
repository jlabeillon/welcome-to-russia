// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import KazanHotelAuthenticMain from 'src/components/Hotel/Hotels/Kazan/Authentic/Main';
import KazanHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Kazan/Authentic/Hotel1';
import KazanHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Kazan/Authentic/Hotel2';
import KazanHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Kazan/Authentic/Hotel3';

// Code
const KazanAuthentic = () => (
  <div>
    <Route path="/city/kazan/hotels/authentic" exact component={KazanHotelAuthenticMain} />
    <Route path="/city/kazan/hotels/authentic/kikhot" exact component={KazanHotelAuthenticHotel1} />
    <Route path="/city/kazan/hotels/authentic/sapozhok" exact component={KazanHotelAuthenticHotel2} />
    <Route path="/city/kazan/hotels/authentic/tatarskaya" exact component={KazanHotelAuthenticHotel3} />
  </div>
);

// Export
export default KazanAuthentic;
