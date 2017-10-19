// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Kaliningrad extends React.Component {

      // componentWillMount() {
      //   this.props.actions.loadKaliningrad();
      // }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/kaliningrad/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/kaliningrad/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/kaliningrad/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Kaliningrad</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Kaliningrad is the administrative center of Kaliningrad Oblast, a Russian exclave between Poland and Lithuania on the Baltic Sea.

            In the Middle Ages, it was the site of Old Prussian settlement Twangste. In 1255, during the Northern Crusades, a new fortress was built by the Teutonic Knights. The city became the capital of the Duchy of Prussia and East Prussia (part of Germany). It was heavily damaged during World War II and its population fled or was removed by force when it became a Russian city. According to the 2010 Census, its population was 431,902.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Kaliningrad;
