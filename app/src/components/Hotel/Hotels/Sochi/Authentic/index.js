// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SochiHotelAuthenticMain from 'src/components/Hotel/Hotels/Sochi/Authentic/Main';
import SochiHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Sochi/Authentic/Hotel1';
import SochiHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Sochi/Authentic/Hotel2';
import SochiHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Sochi/Authentic/Hotel3';

// Code
const SochiAuthentic = () => (
  <div>
    <Route path="/city/sochi/hotels/authentic" exact component={SochiHotelAuthenticMain} />
    <Route path="/city/sochi/hotels/authentic/anna" exact component={SochiHotelAuthenticHotel1} />
    <Route path="/city/sochi/hotels/authentic/chebotarev" exact component={SochiHotelAuthenticHotel2} />
    <Route path="/city/sochi/hotels/authentic/tsvetnoy" exact component={SochiHotelAuthenticHotel3} />
  </div>
);

// Export
export default SochiAuthentic;
