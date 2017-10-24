// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import RostovHotelEcoMain from 'src/components/Hotel/Hotels/Rostov/Eco/Main';
import RostovHotelEcoHotel1 from 'src/components/Hotel/Hotels/Rostov/Eco/Hotel1';
import RostovHotelEcoHotel2 from 'src/components/Hotel/Hotels/Rostov/Eco/Hotel2';
import RostovHotelEcoHotel3 from 'src/components/Hotel/Hotels/Rostov/Eco/Hotel3';

// Code
const RostovEco = () => (
  <div>
    <Route path="/city/rostov/hotels/eco" exact component={RostovHotelEcoMain} />
    <Route path="/city/rostov/hotels/eco/don" exact component={RostovHotelEcoHotel1} />
    <Route path="/city/rostov/hotels/eco/zagora" exact component={RostovHotelEcoHotel2} />
    <Route path="/city/rostov/hotels/eco/volna" exact component={RostovHotelEcoHotel3} />
  </div>
);

// Export
export default RostovEco;
