// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Petersbourg extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2">
            <NavLink to="/city/petersbourg/stadium" className="nav-left">Saint-Petersbourg stadium</NavLink>
            <a href="#" className="nav-left">Saint-Petersbourg transportation</a>
            <NavLink to="/city/petersbourg/hotels/luxury" className="nav-left">Saint-Petersbourg hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Saint-Petersbourg restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Saint-Petersbourg</h1>
            <div id="carousel"><Carousel /></div>
          <p id="city-description">Saint Petersburg is Russia’s second-largest city after Moscow, with five million inhabitants in 2012. An important Russian port on the Baltic Sea, it is politically administered as a federal subject (a federal city). Situated on the Neva River, at the head of the Gulf of Finland on the Baltic Sea, it was founded by Tsar Peter the Great on May 27 1703. In 1914, the name was changed from Saint Petersburg to Petrograd, in 1924 to Leningrad, and in 1991 back to Saint Petersburg. Between 1713 and 1728 and in 1732–1918, Saint Petersburg was the capital of imperial Russia. In 1918, the central government bodies moved to Moscow. Saint Petersburg is one of the modern cities of Russia, as well as its cultural capital. The Historic Centre of Saint Petersburg and Related Groups of Monuments constitute a UNESCO World Heritage Site. Saint Petersburg is home to The Hermitage, one of the largest art museums in the world. Many foreign consulates, international corporations, banks, and businesses have offices in Saint Petersburg.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Petersbourg;
