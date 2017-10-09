// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

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
            <h1 id="city-name">Samara Stadium</h1>
            <span>Carousel component</span>
            <p id="city-description">Luzhniki Stadium is a sports stadium in Moscow, Russia. Its total seating capacity is 81,000 seats, all covered (upgraded). The stadium is a part of the Luzhniki Olympic Complex, and is located in Khamovniki District of the Central Administrative Okrug of Moscow city. The name Luzhniki derives from the flood meadows in the bend of Moskva River where the stadium was built, translating roughly as "The Meadows". Its the biggest stadium in eastern Europe.

            In the past its field has been used as the home ground (at various times) for football games played by PFC CSKA Moscow, Torpedo Moscow and Spartak Moscow, however, there are currently no clubs based at the stadium. Today it is mainly used as one of the home grounds of the Russian national football team. It is one of the few major European stadia to use an artificial pitch, having installed a FIFA-approved FieldTurf pitch in 2002. The pitch is necessary because regular grass pitches cannot withstand the harsh Russian winters and must be replaced at high cost. However, a temporary natural grass pitch was installed for the 2008 UEFA Champions League Final. The stadium is also used from time to time for various other sporting events and for concerts.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SamaraArena;
