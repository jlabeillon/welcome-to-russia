// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SaranskHotelAuthenticMain from 'src/components/Hotel/Hotels/Saransk/Authentic/Main';
import SaranskHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Saransk/Authentic/Hotel1';
import SaranskHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Saransk/Authentic/Hotel2';
import SaranskHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Saransk/Authentic/Hotel3';

// Code
const SaranskAuthentic = () => (
  <div>
    <Route path="/city/saransk/hotels/authentic" exact component={SaranskHotelAuthenticMain} />
    <Route path="/city/saransk/hotels/authentic/meridian" exact component={SaranskHotelAuthenticHotel1} />
    <Route path="/city/saransk/hotels/authentic/park" exact component={SaranskHotelAuthenticHotel2} />
    <Route path="/city/saransk/hotels/authentic/makarovskaya" exact component={SaranskHotelAuthenticHotel3} />
  </div>
);

// Export
export default SaranskAuthentic;
