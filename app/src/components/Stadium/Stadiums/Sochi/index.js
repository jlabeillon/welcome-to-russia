// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiArena extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Buy tickets</a>
            <a href="#" className="nav-left">Stadium website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Fisht Olympic Stadium</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Fisht Olympic Stadium is an outdoor stadium in Sochi, Russia. Located in Sochi Olympic Park and named after Mount Fisht, the 40,000-capacity stadium was constructed for the 2014 Winter Olympics and Paralympics, where it served as the venue for their opening and closing ceremonies. The stadium was originally built as an enclosed facility; it was re-opened in 2016 as an open-air football stadium, to host matches as part of the 2017 FIFA Confederations Cup and 2018 FIFA World Cup.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiArena;
