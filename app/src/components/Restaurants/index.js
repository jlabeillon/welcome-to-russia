// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';

// Code
class Restaurants extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="hotels-body">

        <div className="row">
          <div className="col-xs-1">
            <img className="logo-russia" src="" alt="logo-russia" />
          </div>
          <div className="col-xs-7">
            <span>Nav component</span>
          </div>
          <div className="col-xs-4">
            <a href="">Inscription</a>
            <a href="">Connection</a>
          </div>
        </div>

          <h1>Restaurants</h1>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="restaurants-image" src="images/restaurants/moscow-pushkin.jpg" />
              <p className="restaurants-description">The café, which is really a five-star restaurant, is open 24 hours a day and is situated in a building that was renovated to look exactly like a Russian aristocrats home circa 1825. The staff speaks a beautiful, pre-Sovietized Russian (and English) and serves some of the best fare in town.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="restaurants-image" src="images/restaurants/moscow-pushkin.jpg" />
              <p className="restaurants-description">The café, which is really a five-star restaurant, is open 24 hours a day and is situated in a building that was renovated to look exactly like a Russian aristocrats home circa 1825. The staff speaks a beautiful, pre-Sovietized Russian (and English) and serves some of the best fare in town.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="restaurants-image" src="images/restaurants/moscow-pushkin.jpg" />
              <p className="restaurants-description">The café, which is really a five-star restaurant, is open 24 hours a day and is situated in a building that was renovated to look exactly like a Russian aristocrats home circa 1825. The staff speaks a beautiful, pre-Sovietized Russian (and English) and serves some of the best fare in town.</p>
            </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default Restaurants;
