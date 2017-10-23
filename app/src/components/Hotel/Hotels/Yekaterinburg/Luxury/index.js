// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import YekaterinburgHotelLuxuryMain from 'src/components/Hotel/Hotels/Yekaterinburg/Luxury/Main';
import YekaterinburgHotelLuxuryHotel1 from 'src/components/Hotel/Hotels/Yekaterinburg/Luxury/Hotel1';
import YekaterinburgHotelLuxuryHotel2 from 'src/components/Hotel/Hotels/Yekaterinburg/Luxury/Hotel2';
import YekaterinburgHotelLuxuryHotel3 from 'src/components/Hotel/Hotels/Yekaterinburg/Luxury/Hotel3';

// Code
const YekaterinburgLuxury = () => (
  <div>
    <Route path="/city/yekaterinburg/hotels/luxury" exact component={YekaterinburgHotelLuxuryMain} />
    <Route path="/city/yekaterinburg/hotels/luxury/hyatt" exact component={YekaterinburgHotelLuxuryHotel1} />
    <Route path="/city/yekaterinburg/hotels/luxury/vysotsky" exact component={YekaterinburgHotelLuxuryHotel2} />
    <Route path="/city/yekaterinburg/hotels/luxury/ramada" exact component={YekaterinburgHotelLuxuryHotel3} />
  </div>
);

// Export
export default YekaterinburgLuxury;
