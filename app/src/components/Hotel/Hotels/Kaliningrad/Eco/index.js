// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import KaliningradHotelEcoMain from 'src/components/Hotel/Hotels/Kaliningrad/Eco/Main';
import KaliningradHotelEcoHotel1 from 'src/components/Hotel/Hotels/Kaliningrad/Eco/Hotel1';
import KaliningradHotelEcoHotel2 from 'src/components/Hotel/Hotels/Kaliningrad/Eco/Hotel2';
import KaliningradHotelEcoHotel3 from 'src/components/Hotel/Hotels/Kaliningrad/Eco/Hotel3';

// Code
const KaliningradEco = () => (
  <div>
    <Route path="/city/kaliningrad/hotels/eco" exact component={KaliningradHotelEcoMain} />
    <Route path="/city/kaliningrad/hotels/eco/cottbus" exact component={KaliningradHotelEcoHotel1} />
    <Route path="/city/kaliningrad/hotels/eco/traktir" exact component={KaliningradHotelEcoHotel2} />
    <Route path="/city/kaliningrad/hotels/eco/smile" exact component={KaliningradHotelEcoHotel3} />
  </div>
);

// Export
export default KaliningradEco;
