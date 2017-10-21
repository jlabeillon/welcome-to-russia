// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class PetersbourgArena extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="http://www.fifa.com/worldcup/organisation/ticketing/index.html" className="nav-left">Buy tickets</a>
            <a href="http://piterarena.com/en" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Krestovsky Stadium</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">The Krestovsky Stadium, also called Zenit Arena, is a retractable roof stadium in the western portion of Krestovsky Island in Saint Petersburg, Russia, which serves as home for FC Zenit Saint Petersburg. The stadium was opened in 2017 for the FIFA Confederations Cup. Initially, it was planned to be completed by December 2008, which was changed to late 2011 and was scheduled to open in 2017. As of May 2017, the stadium is 518% late and 548% over budget. The stadium has a capacity of 68,134 people. It is called Saint Petersburg Stadium during the 2017 FIFA Confederations Cup and 2018 FIFA World Cup.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default PetersbourgArena;
