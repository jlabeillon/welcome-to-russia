// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Saransk extends React.Component {

      // componentWillMount() {
      //   this.props.actions.loadSaransk();
      // }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/saransk/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/saransk/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Saransk</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Saransk is the capital city of the Republic of Mordovia, Russia, as well as its financial and economic center. It is located in the Volga basin at the confluence of the Saranka and Insar Rivers, about 630 kilometers east of Moscow. Population: 297,415 (2010 Census)</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Saransk;
