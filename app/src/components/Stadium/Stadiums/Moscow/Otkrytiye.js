// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Otkrytiye extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="http://www.fifa.com/worldcup/organisation/ticketing/index.html" className="nav-left">Buy tickets</a>
            <a href="http://otkritiearena.ru/en/" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Otkrytiye Arena</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Otkritie Arena is a multi-purpose stadium in Moscow, Russia. The venue is used mostly for football matches, hosting the home matches of Spartak Moscow and occasionally the Russian national team. It will be called Spartak Stadium during the 2017 FIFA Confederations Cup and 2018 FIFA World Cup. The stadium is designed with a capacity of 45,360 people.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Otkrytiye;
