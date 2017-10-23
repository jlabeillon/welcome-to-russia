// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const KazanArena = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="http://www.fifa.com/worldcup/organisation/ticketing/index.html" className="nav-left">Buy tickets</a>
        <a href="http://kazanarena.com/en/" className="nav-left">Stadium website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Kazan Arena</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">The Kazan Arena (Russian: Казань Арена; Tatar: Казан-Арена) is a stadium in Kazan, Russia. It was completed in July 2013, and will host football matches, especially Rubin Kazan’s home games in the Russian Premier League. The stadium has the largest outside screen in Europe.</p>
      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default KazanArena;
