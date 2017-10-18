// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class RostovArena extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Buy tickets</a>
            <a href="#" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Rostov Arena</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Rostov Arena is a association football stadium in Rostov-on-Don, Russia which is under construction. It is one of the venues for the 2018 FIFA World Cup. It will also host FC Rostov of the Russian Premier League, replacing Olimp – 2. It will have a capacity of 45,000 spectators.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default RostovArena;
