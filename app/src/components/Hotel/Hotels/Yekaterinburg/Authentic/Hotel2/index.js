// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class YekaterinburgHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Chekhov Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">The Chekhov is a 3-star hotel in central Ekaterinburg, 300 m from Geologicheskaya Metro Station. Set in 19th-century restored mansion, it features free Wi-Fi and free private parking on site.

            The soundproofed rooms of the Chekhov Hotel are equipped with air conditioning, flat-screen TVs and DVD player. The private bathrooms include a bathtub and provide comfortable bathrobes and slippers.

            Hotel Chekhov offers a permanent exhibition dedicated to the life and work of the writer A.P. Chekhov and his days in Ekaterinburg.

            Guests can enjoy the central location and discover contemporary Russian cuisine in one of the many cafes and restaurants that surround the hotel. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8731.661494771019!2d60.6008154!3d56.8302411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf37469196597eac1!2sChekhov!5e0!3m2!1sen!2sfr!4v1508400590691" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default YekaterinburgHotelAuthenticHotel2;
