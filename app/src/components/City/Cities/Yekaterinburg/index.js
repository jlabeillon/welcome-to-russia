// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Yekaterinburg extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/yekaterinburg/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/yekaterinburg/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Yekaterinburg</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Yekaterinburg, alternatively romanised as Ekaterinburg, is the main industrial, administrative, and cultural centre of the Sverdlovsk Oblast, in the Ural Federal District. With a Russia Census-estimated population of 1,488,791 as of 2017, Yekaterinburg is Russia’s fourth-largest city after Moscow, Saint Petersburg, and Novosibirsk. Situated on the Iset River, Yekaterinburg is located east of the Ural Mountains, in the middle of the Eurasian continent, on the border of Europe and Asia, with an area of 495 square kilometres. The Yekaterinburg agglomeration is the fourth largest urban agglomeration in Russia, as well as one of the three most developed post-industrial agglomerations of the country. Yekaterinburg is also the headquarters of the Central Military District.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Yekaterinburg;
