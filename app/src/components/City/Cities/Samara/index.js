// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Samara extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/samara/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/samara/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/samara/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Samara</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Samara, known from 1935 to 1991 as Kuybyshev, is the sixth largest city in Russia and the administrative center of Samara Oblast. It is situated in the southeastern part of European Russia at the confluence of the Volga and Samara Rivers on the east bank of the Volga. The Volga acts as the city’s western boundary; across the river are the Zhiguli Mountains, after which the local beer (Zhigulyovskoye) is named. The northern boundary is formed by the Sokolyi Hills and by the steppes in the south and east. The land within the city boundaries covers 46,597 hectares (115,140 acres). Population: 1,164,685 (2010 Census). The metropolitan area of Samara-Tolyatti-Syzran within Samara Oblast contains a population of over three million.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Samara;
