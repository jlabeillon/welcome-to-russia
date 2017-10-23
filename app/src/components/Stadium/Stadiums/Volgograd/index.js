// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const VolgogradArena = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Buy tickets</a>
        <a href="#" className="nav-left">Stadium website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Volgograd Stadium</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Volgograd Arena is a football stadium in Volgograd, Russia which is under construction. The stadium is one of the venues for the 2018 FIFA World Cup. It will also host FC Rotor Volgograd. It will have a capacity of 45,568 spectators.</p>
      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default VolgogradArena;
