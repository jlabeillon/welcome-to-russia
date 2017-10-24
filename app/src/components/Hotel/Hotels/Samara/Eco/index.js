// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import SamaraHotelEcoMain from 'src/components/Hotel/Hotels/Samara/Eco/Main';
import SamaraHotelEcoHotel1 from 'src/components/Hotel/Hotels/Samara/Eco/Hotel1';
import SamaraHotelEcoHotel2 from 'src/components/Hotel/Hotels/Samara/Eco/Hotel2';
import SamaraHotelEcoHotel3 from 'src/components/Hotel/Hotels/Samara/Eco/Hotel3';

// Code
const SamaraEco = () => (
  <div>
    <Route path="/city/samara/hotels/eco" exact component={SamaraHotelEcoMain} />
    <Route path="/city/samara/hotels/eco/elyzium" exact component={SamaraHotelEcoHotel1} />
    <Route path="/city/samara/hotels/eco/zagora" exact component={SamaraHotelEcoHotel2} />
    <Route path="/city/samara/hotels/eco/volna" exact component={SamaraHotelEcoHotel3} />
  </div>
);

// Export
export default SamaraEco;
