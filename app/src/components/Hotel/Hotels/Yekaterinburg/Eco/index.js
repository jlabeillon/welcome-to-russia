// Import
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// Local import
import YekaterinburgHotelEcoMain from 'src/components/Hotel/Hotels/Yekaterinburg/Eco/Main'
import YekaterinburgHotelEcoHotel1 from 'src/components/Hotel/Hotels/Yekaterinburg/Eco/Hotel1';
import YekaterinburgHotelEcoHotel2 from 'src/components/Hotel/Hotels/Yekaterinburg/Eco/Hotel2';
import YekaterinburgHotelEcoHotel3 from 'src/components/Hotel/Hotels/Yekaterinburg/Eco/Hotel3';

// Code
class YekaterinburgEco extends React.Component {
  render() {
    return (
      <div>
        <Route path="/city/yekaterinburg/hotels/eco" exact component={YekaterinburgHotelEcoMain} />
        <Route path="/city/yekaterinburg/hotels/eco/bolshoy" exact component={YekaterinburgHotelEcoHotel1} />
        <Route path="/city/yekaterinburg/hotels/eco/ural" exact component={YekaterinburgHotelEcoHotel2} />
        <Route path="/city/yekaterinburg/hotels/eco/lhouse" exact component={YekaterinburgHotelEcoHotel3} />
      </div>
    );
  };
}

// Export
export default YekaterinburgEco;
