// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import YekaterinburgHotelAuthenticMain from 'src/components/Hotel/Hotels/Yekaterinburg/Authentic/Main';
import YekaterinburgHotelAuthenticHotel1 from 'src/components/Hotel/Hotels/Yekaterinburg/Authentic/Hotel1';
import YekaterinburgHotelAuthenticHotel2 from 'src/components/Hotel/Hotels/Yekaterinburg/Authentic/Hotel2';
import YekaterinburgHotelAuthenticHotel3 from 'src/components/Hotel/Hotels/Yekaterinburg/Authentic/Hotel3';

// Code
const YekaterinburgAuthentic = () => (
  <div>
    <Route path="/city/yekaterinburg/hotels/authentic" exact component={YekaterinburgHotelAuthenticMain} />
    <Route path="/city/yekaterinburg/hotels/authentic/red" exact component={YekaterinburgHotelAuthenticHotel1} />
    <Route path="/city/yekaterinburg/hotels/authentic/chekhov" exact component={YekaterinburgHotelAuthenticHotel2} />
    <Route path="/city/yekaterinburg/hotels/authentic/renomme" exact component={YekaterinburgHotelAuthenticHotel3} />
  </div>
);

// Export
export default YekaterinburgAuthentic;
