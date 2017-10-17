// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SamaraArena extends React.Component {
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
            <h1 id="city-name">Cosmos Arena</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Cosmos Arena is a football stadium in Samara, Russia which is under construction. The stadium is one of the venues for the 2018 FIFA World Cup. It will be called Samara Arena during the World Cup. It will also host FC Krylia Sovetov Samara of the Russian Premier League, replacing Metallurg Stadium. It will have a capacity of 44,918 spectators Samara authorities announced their design tender in late 2012 with cost estimated at $320 million.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SamaraArena;
