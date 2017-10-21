// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class YekaterinburgArena extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="http://www.fifa.com/worldcup/organisation/ticketing/index.html" className="nav-left">Buy tickets</a>
            <a href="http://www.fifa.com/worldcup/destination/stadiums/stadium=5031304/index.html" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Central Stadium</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Central Stadium is a multi-purpose stadium in Yekaterinburg, Russia. The capacity of the stadium is 35,000. It is one of 12 venues in 11 Host Cities for the 2018 FIFA World Cup in Russia during which it will be called Ekaterinburg Arena.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default YekaterinburgArena;
