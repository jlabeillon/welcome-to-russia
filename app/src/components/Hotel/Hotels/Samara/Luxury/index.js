// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SamaraHotelLuxuryMain from 'src/components/Hotel/Hotels/Samara/Luxury/Main';
import SamaraHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel1';
import SamaraHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel2';
import SamaraHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Samara/Luxury/Hotel3';

// Code
const SamaraLuxury = () => (
  <div>
    <Route path="/city/samara/hotels/luxury" exact component={SamaraHotelLuxuryMain} />
    <Route path="/city/samara/hotels/luxury/holiday" exact component={SamaraHotelLuxuryHotel1} />
    <Route path="/city/samara/hotels/luxury/renaissance" exact component={SamaraHotelLuxuryHotel2} />
    <Route path="/city/samara/hotels/luxury/glinka" exact component={SamaraHotelLuxuryHotel3} />
  </div>
);

// Export
export default SamaraLuxury;
