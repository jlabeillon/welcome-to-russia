// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Pansionat PrimaVera</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This property is 4 minutes walk from the beach. Featuring free WiFi, a year-round outdoor pool and a seasonal outdoor pool, Pansionat PrimaVera offers accommodation in Sochi. Guests can enjoy the on-site restaurant.

            All rooms are equipped with a flat-screen TV with cable channels. A terrace or balcony are featured in certain rooms.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.758627742125!2d39.69450391549707!3d43.63238247912202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5cb6044d7cc23%3A0xe88cfd72c40b16ce!2sul.+Poltavskaya%2C+32%2C+Sochi%2C+Krasnodarskiy+kray%2C+Russia%2C+354008!5e0!3m2!1sen!2sfr!4v1508402479212" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelEcoHotel2;
