// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import MoscowHotelEcoMain from 'src/components/Hotel/Hotels/Moscow/Eco/Main';
import MoscowHotelEcoHotel1 from 'src/components/Hotel/Hotels/Moscow/Eco/Hotel1';
import MoscowHotelEcoHotel2 from 'src/components/Hotel/Hotels/Moscow/Eco/Hotel2';
import MoscowHotelEcoHotel3 from 'src/components/Hotel/Hotels/Moscow/Eco/Hotel3';

// Code
const MoscowEco = () => (
  <div>
    <Route path="/city/moscow/hotels/eco" exact component={MoscowHotelEcoMain} />
    <Route path="/city/moscow/hotels/eco/novinsky" exact component={MoscowHotelEcoHotel1} />
    <Route path="/city/moscow/hotels/eco/cosmos" exact component={MoscowHotelEcoHotel2} />
    <Route path="/city/moscow/hotels/eco/izmailovo" exact component={MoscowHotelEcoHotel3} />
  </div>
);

// Export
export default MoscowEco;
