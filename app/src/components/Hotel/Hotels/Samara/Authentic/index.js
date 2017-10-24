// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SamaraHotelAuthenticMain from 'src/components/Hotel/Hotels/Samara/Authentic/Main';
import SamaraHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Samara/Authentic/Hotel1';
import SamaraHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Samara/Authentic/Hotel2';
import SamaraHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Samara/Authentic/Hotel3';

// Code
const SamaraAuthentic = () => (
  <div>
    <Route path="/city/samara/hotels/authentic" exact component={SamaraHotelAuthenticMain} />
    <Route path="/city/samara/hotels/authentic/hotel19" exact component={SamaraHotelAuthenticHotel1} />
    <Route path="/city/samara/hotels/authentic/sivre" exact component={SamaraHotelAuthenticHotel2} />
    <Route path="/city/samara/hotels/authentic/europe" exact component={SamaraHotelAuthenticHotel3} />
  </div>
);

// Export
export default SamaraAuthentic;
