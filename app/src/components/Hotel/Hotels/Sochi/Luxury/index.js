// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SochiHotelLuxuryMain from 'src/components/Hotel/Hotels/Sochi/Luxury/Main';
import SochiHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel1';
import SochiHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel2';
import SochiHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Sochi/Luxury/Hotel3';

// Code
const SochiLuxury = () => (
  <div>
    <Route path="/city/sochi/hotels/luxury" exact component={SochiHotelLuxuryMain} />
    <Route path="/city/sochi/hotels/luxury/pullman" exact component={SochiHotelLuxuryHotel1} />
    <Route path="/city/sochi/hotels/luxury/hyatt" exact component={SochiHotelLuxuryHotel2} />
    <Route path="/city/sochi/hotels/luxury/rodina" exact component={SochiHotelLuxuryHotel3} />
  </div>
);

// Export
export default SochiLuxury;
