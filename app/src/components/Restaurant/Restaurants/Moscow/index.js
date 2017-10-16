// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RestaurantsMoscow extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

      {/* Header */}
        <Header />

          <h1 className="restaurants-city">Moscow Restaurants</h1>

          <div className="row">
            <div className="col-xs-12">
              <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-pushkin.jpg" />
              <p className="restaurants-name">Cafe Pushkin</p>
              <p>Cuisine: European, Russian, Eastern European, Central European, Vegetarian, Friendly, Vegan Options, Gluten Free Options</p>
              <p>Good For: Local cuisine, Large groups, Special occasions, Business meetings, Families with children, Romantic</p>
              <p>Price: €51 - €59</p>
              <p>Adress: Tverskoi Blvd., 26A, Moscow 125009, Russia</p>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-wine-crab.jpg" />
            <p className="restaurants-name">Wine & Crab Restaurant</p>
            <p>Cuisine: Seafood, Mediterranean, Wine Bar, European, Gluten Free Options</p>
            <p>Good For: Families with children, Special occasions, Business meetings, Large groups, Romantic</p>
            <p>Price: €40 - €50</p>
            <p>Adress: Nikoliskaya st., 19/21, Moscow 109012, Russia</p>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-savva.jpg" />
            <p className="restaurants-name">SAVVA</p>
            <p>Cuisine: Russian, European, Eastern European, Central European, Vegetarian Friendly, Gluten Free Options</p>
            <p>Good For: Special occasions, Local cuisine, Business meetings, Families with children, Romantic, Scenic view, Large groups</p>
            <p>Price: €22 - €51</p>
            <p>Adress: Teatralny Dr., 2, Moscow 109012, Russia</p>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default RestaurantsMoscow;
