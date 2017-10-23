// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import KaliningradHotelAuthenticMain from 'src/components/Hotel/Hotels/Kaliningrad/Authentic/Main';
import KaliningradHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Kaliningrad/Authentic/Hotel1';
import KaliningradHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Kaliningrad/Authentic/Hotel2';
import KaliningradHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Kaliningrad/Authentic/Hotel3';

// Code
const KaliningradAuthentic = () => (
  <div>
    <Route path="/city/kaliningrad/hotels/authentic" exact component={KaliningradHotelAuthenticMain} />
    <Route path="/city/kaliningrad/hotels/authentic/tchaikovsky" exact component={KaliningradHotelAuthenticHotel1} />
    <Route path="/city/kaliningrad/hotels/authentic/chaika" exact component={KaliningradHotelAuthenticHotel2} />
    <Route path="/city/kaliningrad/hotels/authentic/usadba" exact component={KaliningradHotelAuthenticHotel3} />
  </div>
);

// Export
export default KaliningradAuthentic;
