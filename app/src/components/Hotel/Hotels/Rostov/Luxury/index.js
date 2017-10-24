// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import RostovHotelLuxuryMain from 'src/components/Hotel/Hotels/Rostov/Luxury/Main';
import RostovHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Rostov/Luxury/Hotel1';
import RostovHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Rostov/Luxury/Hotel2';
import RostovHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Rostov/Luxury/Hotel3';

// Code
const RostovLuxury = () => (
  <div>
    <Route path="/city/rostov/hotels/luxury" exact component={RostovHotelLuxuryMain} />
    <Route path="/city/rostov/hotels/luxury/izvolte" exact component={RostovHotelLuxuryHotel1} />
    <Route path="/city/rostov/hotels/luxury/soho" exact component={RostovHotelLuxuryHotel2} />
    <Route path="/city/rostov/hotels/luxury/mercure" exact component={RostovHotelLuxuryHotel3} />
  </div>
);

// Export
export default RostovLuxury;
