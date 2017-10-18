// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Lotte Hotel St. Petersburg</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Offering a terrace and spa centre, Lotte Hotel St. Petersburg is located in Saint Petersburg. The hotel has a sauna and fitness centre, and guests can enjoy a meal at the restaurant.

            Every room is equipped with a flat-screen TV. All rooms come with a private bathroom equipped with a bath or shower. For your comfort, you will find bathrobes, slippers and a hairdryer.

            There is a 24-hour front desk at the property.

            Saint Isaac’s Cathedral is 400 m from Lotte Hotel St. Petersburg, while Admiralty Building is 700 m away. The nearest airport is Pulkovo Airport, 21 km from the property. </p>

            <section className="get-in-touch col-xs-6">
             <h1 className="title">Contact the hotel</h1>
             <form className="contact-form row" action="/email-sended">
                <div className="form-field col x-50">
                   <input id="name" className="input-text js-input" type="text" required />
                   <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col x-50">
                   <input id="email" className="input-text js-input" type="email" required />
                   <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                   <input id="message" className="input-text js-input" type="text" required />
                   <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                   <input className="submit-btn" type="submit" value="Submit"/>
                </div>
             </form>
            </section>

            <div className="col-xs-6 map-hotel">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7996.178424257677!2d30.310422!3d59.931402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x71def80ee9724829!2sLotte+Otel&#39;+Sankt-Peterburg!5e0!3m2!1sen!2sfr!4v1508339964935" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelLuxuryHotel2;
