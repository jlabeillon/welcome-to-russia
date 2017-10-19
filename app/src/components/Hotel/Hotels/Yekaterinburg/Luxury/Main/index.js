// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgLuxuryMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/yekaterinburg/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/yekaterinburg/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/yekaterinburg/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/yekaterinburg/hotels/luxury/hyatt">
              <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-luxury-hyatt.jpg" />
              <p className="hotels-description">Hyatt Regency Ekaterinburg offers accommodation a short walk from the city square. All rooms feature individual climate control, LCD TVs and bathrooms with deep baths and rain showers.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/luxury/vysotsky">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-luxury-vysotsky.jpg" />
            <p className="hotels-description">Vysotsky Hotel is located on the 39th floor of a business centre in Yekaterinburg, within a 15-minute walk of Ploshchad 1905 Goda Metro Station. Wi-Fi access in all areas and private on-site parking are available free of charge.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/luxury/ramada">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-luxury-ramada.jpg" />
            <p className="hotels-description">This property is 3 minutes walk from the beach. A 10-minute drive from Koltsovo Airport, this hotel offers free Wi-Fi and a free spa with 2 swimming pools, sauna and steam room. This lakefront hotel is surrounded by forests.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default YekaterinburgLuxuryMain;
