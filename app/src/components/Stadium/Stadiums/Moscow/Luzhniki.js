// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const Luzhniki = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="http://www.fifa.com/worldcup/organisation/ticketing/index.html" className="nav-left">Buy tickets</a>
        <a href="http://eng.luzhniki.ru/" className="nav-left">Stadium website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Luzhniki Stadium</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Luzhniki Stadium is a sports stadium in Moscow, Russia. Its total seating capacity is 81,000 seats, all covered (upgraded). The stadium is a part of the Luzhniki Olympic Complex, and is located in Khamovniki District of the Central Administrative Okrug of Moscow city. The name Luzhniki derives from the flood meadows in the bend of Moskva River where the stadium was built, translating roughly as "The Meadows". Its the biggest stadium in eastern Europe.</p>
      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default Luzhniki;
