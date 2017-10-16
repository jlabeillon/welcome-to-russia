// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Home extends React.Component {

  Tralala = () => (
    console.log('yes')
  );

  render() {
    return (
      <div className="container">
      {/* Header */}
        <Header />
      {/* Body */}
      {/* Cities pictures and navigation */}
        <div className="row">
          <div className="home-picture-container">

            <div className="image">
              <NavLink to="/city/moscow" onClick={this.Tralala}><img id="big-picture-home" src="/images/moscow-1.jpg" />
              <span id="moscow-home-container"><p id="moscow-home-text">Moscow</p></span></NavLink>
            </div>

            <div id="first-medium">

              <div className="image">
                <NavLink to="/city/saint-petersbourg"><img className="medium-picture-home" src="/images/petersbourg.jpg" />
                <span id="petersbourg-home-container"><p id="petersbourg-home-text">Saint-Petersbourg</p></span></NavLink>
              </div>

              <div className="image">
                <NavLink to="/city/sochi"><img className="medium-picture-home" src="/images/sochi-1.jpg" />
                <span id="sochi-home-container"><p id="sochi-home-text">Sochi</p></span></NavLink>
              </div>

            </div>
            <div id="second-medium">

              <div className="image">
                <a href="/city/yekaterinburg"><img className="medium-picture-home" src="/images/yekaterinburg.jpg" />
                <span id="yekaterinburg-home-container"><p id="yekaterinburg-home-text">Yekaterinburg</p></span></a>
              </div>

              <div className="image">
                <NavLink to="/city/kazan"><img className="medium-picture-home" src="/images/kazan-1.jpg" />
                <span id="kazan-home-container"><p id="kazan-home-text">Kazan</p></span></NavLink>
              </div>

            </div>
          </div>
          <div id="small-row">

            <div className="image">
              <NavLink to="/city/volgograd"><img className="small-picture-home" src="/images/volgograd.jpg" />
              <span id="volgograd-home-container"><p id="volgograd-home-text">Volgograd</p></span></NavLink>
            </div>

            <div className="image">
              <NavLink to="/city/saransk"><img className="small-picture-home" src="/images/saransk.jpg" />
              <span id="saransk-home-container"><p id="saransk-home-text">Saransk</p></span></NavLink>
            </div>

            <div className="image">
              <NavLink to="/city/samara"><img className="small-picture-home" src="/images/samara.jpg" />
              <span id="samara-home-container"><p id="samara-home-text">Samara</p></span></NavLink>
            </div>

            <div className="image">
              <NavLink to="/city/rostov"><img className="small-picture-home" src="/images/rostov.jpg" />
              <span id="rostov-home-container"><p id="rostov-home-text">Rostov-on-Don</p></span></NavLink>
            </div>

            <div className="image">
              <NavLink to="/city/kaliningrad"><img className="small-picture-home" src="/images/kaliningrad-3.jpg" />
              <span id="kaliningrad-home-container"><p id="kaliningrad-home-text">Kaliningrad</p></span></NavLink>
            </div>

            <div className="image">
              <NavLink to="/city/nizhny-novgorod"><img className="small-picture-home" src="/images/novgorod.jpg" />
              <span id="novgorod-home-container"><p id="novgorod-home-text">Nizhny Novgorod</p></span></NavLink>
            </div>

          </div>
        </div>
        {/* Greetings */}
        <h1 id="greetings-home">Welcome to Russia</h1>
        {/* Bottom nav */}
        <div className="row col-xs-12" id="bottom-nav-container">
          <div className="image">
            <NavLink to="/visa"><img className="bottom-nav" src="/images/visa-home.jpg" />
            <span id="visa-home-container"><p id="visa-home-text">visa</p></span></NavLink>
          </div>
          <div className="image">
            <NavLink to="/hotels"><img className="bottom-nav" src="/images/hotels-home.jpg" />
            <span id="hotels-home-container"><p id="hotels-home-text">hotels</p></span></NavLink>
          </div>
          <div className="image">
            <NavLink to="/competition"><img className="bottom-nav" src="/images/competition-home.jpg" />
            <span id="competition-home-container"><p id="competition-home-text">competition</p></span></NavLink>
          </div>
          <div className="image">
            <NavLink to="/transports"><img className="bottom-nav" src="/images/transportation-home.jpg" />
            <span id="transports-home-container"><p id="transports-home-text">transports</p></span></NavLink>
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
