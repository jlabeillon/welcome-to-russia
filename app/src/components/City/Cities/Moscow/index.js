// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Moscow extends React.Component {

  // componentWillMount() {
  //   axios
  //     .get('http://localhost/Projet/back/welcome-to-russia/project/web/app_dev.php/json/city/moscou')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch(() => {
  //       console.error('Ajax failed');
  //     });
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/moscow/stadium/luzhniki" className="nav-left">Luzhniki stadium</NavLink>
            <NavLink to="/city/moscow/stadium/otkrytiye" className="nav-left">Otkrytiye stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/moscow/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Moscow</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia’s symbolic center. It’s home to Lenin’s Mausoleum, the State Historical Museum’s comprehensive collection and St. Basil’s Cathedral, known for its colorful, onion-shaped domes.

            Moscow is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe, as well as the largest city entirely on the European continent. By broader definitions Moscow is among the world’s largest cities, being the 14th largest metro area, the 18th largest agglomeration, the 15th largest urban area, and the 11th largest by population within city limits worldwide.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Moscow;
