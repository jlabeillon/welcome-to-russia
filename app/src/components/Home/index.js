// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      {/* Header */}
        <Header />
      {/* Body */}
      {/* Cities pictures and navigation */}
        <div className="row">
          <div className="home-picture-container">
            <a href=""><img id="big-picture-home" src="images/moscow-1.jpg" /></a>
            <div id="first-medium">
              <a href=""><img className="medium-picture-home" src="images/petersbourg.jpg" /></a>
              <a href=""><img className="medium-picture-home" src="images/sochi.jpg" /></a>
            </div>
            <div id="second-medium">
            <a href=""><img className="medium-picture-home" src="images/yekaterinburg.jpg" /></a>
            <a href=""><img className="medium-picture-home" src="images/kaliningrad.jpg" /></a>
            </div>
          </div>
          <div id="small-row">
            <a href=""><img className="small-picture-home" src="images/volgograd.jpg" /></a>
            <a href=""><img className="small-picture-home" src="images/saransk.jpg" /></a>
            <a href=""><img className="small-picture-home" src="images/samara.jpg" /></a>
            <a href=""><img className="small-picture-home" src="images/rostov.jpg" /></a>
            <a href=""><img className="small-picture-home" src="images/kazan.jpg" /></a>
            <a href=""><img className="small-picture-home" src="images/novgorod.jpg" /></a>
          </div>
        </div>
        {/* Greetings */}
        <h1 id="greetings-home">Welcome to Russia</h1>
        {/* Bottom nav */}
        <div className="row col-xs-12" id="bottom-nav-container">
          <div className="image">
            <a href=""><img className="bottom-nav" src="images/visa-home.jpg" />
            <span id="visa-home-container"><p id="visa-home-text">visa</p></span></a>
          </div>
          <div className="image">
            <a href=""><img className="bottom-nav" src="images/hotels-home.jpg" />
            <span id="hotels-home-container"><p id="hotels-home-text">hotels</p></span></a>
          </div>
          <div className="image">
            <a href=""><img className="bottom-nav" src="images/competition-home.jpg" />
            <span id="competition-home-container"><p id="competition-home-text">competition</p></span></a>
          </div>
          <div className="image">
            <a href=""><img className="bottom-nav" src="images/transportation-home.jpg" />
            <span id="transports-home-container"><p id="transports-home-text">transports</p></span></a>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* end of container fluid */}
      </div>
    );
  };
}

// Export
export default Home;
