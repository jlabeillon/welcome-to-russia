// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KaliningradArena extends React.Component {
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
            <h1 id="city-name">Kaliningrad Stadium</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Kaliningrad Stadium (also called Arena Baltika) is an association football stadium under construction in Oktyabrsky Island, Kaliningrad, Russia. It will host some of the games of the 2018 FIFA World Cup. It will also host FC Baltika Kaliningrad of the Russian Football National League, replacing Baltika Stadium. This will be a two-tier stadium, equipped with ultramodern security systems and CCTV. The project is based on the concept of the Allianz Arena, which hosted matches of the 2006 World Cup in Germany. The project cost is planned around 11 billion rubles. Commissioning is planned in 2017. The stadium following the 2018 World Cup will turn into 25,000 seating capacity and part of the roof will be retracted.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KaliningradArena;
