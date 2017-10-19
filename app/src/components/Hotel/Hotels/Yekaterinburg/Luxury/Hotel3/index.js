// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ramada Ekaterinburg Hotel & Spa</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Get the celebrity treatment with world-class service at Ramada Ekaterinburg Hotel & Spa

            One of our top picks in Yekaterinburg.

            This property is 3 minutes walk from the beach. A 10-minute drive from Koltsovo Airport, this hotel offers free Wi-Fi and a free spa with 2 swimming pools, sauna and steam room. This lakefront hotel is surrounded by forests.

            The Ramada Ekaterinburg Hotel & Spa offers rooms with modern décor and wonderful views of the surrounding countryside. Each air-conditioned room has a seating area, a TV and tea/coffee facilities.

            The Ramada Ekaterinburg spa features an indoor swimming pool and a year-round outdoor heated pool, hot tub and gym. Guests can also make an appointment in the hairdressing salon.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8744.401457194293!2d60.7173433!3d56.7755823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x146803b1cc938961!2sRamada+Yekaterinburg!5e0!3m2!1sen!2sfr!4v1508343145644" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelLuxuryHotel3;
