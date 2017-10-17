// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class NovgorodArena extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Buy tickets</a>
            <a href="#" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Nizhny Novgorod Stadium</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Nizhny Novgorod Stadium is a football stadium in Nizhny Novgorod, Russia which is under construction. It is one of the venues for the 2018 FIFA World Cup. It will have a capacity of 44,899 spectators.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default NovgorodArena;
