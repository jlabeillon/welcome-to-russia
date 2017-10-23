// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SochiHotelEcoMain from 'src/components/Hotel/Hotels/Sochi/Eco/Main';
import SochiHotelEcoHotel1 from 'src/components/Hotel/Hotels/Sochi/Eco/Hotel1';
import SochiHotelEcoHotel2 from 'src/components/Hotel/Hotels/Sochi/Eco/Hotel2';
import SochiHotelEcoHotel3 from 'src/components/Hotel/Hotels/Sochi/Eco/Hotel3';

// Code
const SochiEco = () => (
  <div>
    <Route path="/city/sochi/hotels/eco" exact component={SochiHotelEcoMain} />
    <Route path="/city/sochi/hotels/eco/victor" exact component={SochiHotelEcoHotel1} />
    <Route path="/city/sochi/hotels/eco/prima" exact component={SochiHotelEcoHotel2} />
    <Route path="/city/sochi/hotels/eco/marika" exact component={SochiHotelEcoHotel3} />
  </div>
);

// Export
export default SochiEco;
