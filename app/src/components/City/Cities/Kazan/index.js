// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Kazan extends React.Component {

      // componentWillMount() {
      //   this.props.actions.loadKazan();
      //

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/kazan/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/kazan/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Kazan</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Kazan is the capital and largest city of the Republic of Tatarstan, Russia. With a population of 1,143,535, it is the eighth most populous city in Russia. Kazan lies at the confluence of the Volga and Kazanka Rivers in European Russia. The Kazan Kremlin is a World Heritage Site.

            In April 2009, the Russian Patent Office granted Kazan the right to brand itself as the "Third Capital" of Russia. In 2009 it was chosen as the "Sports capital of Russia" and it still is referred to as such. The city hosted the 2013 Summer Universiade, 2014 World Fencing Championships, the 2015 World Aquatics Championships, and is one of the host cities for the 2017 FIFA Confederations Cup and the 2018 FIFA World Cup.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Kazan;
