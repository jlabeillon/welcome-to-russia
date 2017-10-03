// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';

// Code
class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-1">
            <img className="logo-russia" src="" alt="logo-russia" />
          </div>
          <div className="col-7">
            <span>Nav component</span>
          </div>
          <div className="col-4">
            <a href="">Inscription</a>
            <a href="">Connection</a>
          </div>
        </div>

        <div className="row">
          <div>
            <a href=""><img id="big-picture-home" src="images/moscow-1.jpg" /></a>
            <a href=""><img id="medium-picture-home" src="images/petersbourg.jpg" /></a>
            <a href=""><img id="medium-picture-home" src="images/sochi.jpg" /></a>
            <a href=""><img id="medium-picture-home" src="images/yekaterinburg.jpg" /></a>
            <a href=""><img id="medium-picture-home" src="images/kaliningrad.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/volgograd.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/saransk.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/samara.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/rostov.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/kazan.jpg" /></a>
            <a href=""><img id="small-picture-home" src="images/novgorod.jpg" /></a>
          </div>
        </div>

        <h1 id="greetings-home">Welcome to Russia</h1>

        <div className="row">
          <div className="col-2" id="visa-nav-home">Visa</div>
          <div className="col-2" id="hotels-nav-home">Hotels</div>
          <div className="col-2" id="competition-nav-home">Competition</div>
          <div className="col-2" id="transports-nav-home">Transports</div>
        </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default Home;
