// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SaranskArena extends React.Component {
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
            <h1 id="city-name">Mordovia Arena</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Mordovia Arena is a football stadium currently under construction in Saransk, Mordovia, Russia in time for the 2018 FIFA World Cup. It will also host FC Mordovia Saransk of the Russian Premier League, replacing Start Stadium. It will have a capacity of 44,442 spectators.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SaranskArena;
