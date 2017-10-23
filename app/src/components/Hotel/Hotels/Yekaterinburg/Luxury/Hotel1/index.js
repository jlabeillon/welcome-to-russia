// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const YekaterinburgHotelLuxuryHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hyatt Regency Ekaterinburg</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Hyatt Regency Ekaterinburg offers accommodation a short walk from the city square. All rooms feature individual climate control, LCD TVs and bathrooms with deep baths and rain showers. The spa & fitness centre includes a state-of-the-art gym, a sauna, a hammam and a whirlpool bath. There’s also an indoor swimming pool with poolside seating and panoramic views of the city. The hotel features 2 restaurants and 3 lounge bars. The lounge area provides daily complimentary evening cocktails and hors d’ oeuvres, available for Club room categories. The Hyatt can provide guided tours of the historic city of Yekaterinburg, visiting the Historical Square, the Dam and the Cathedral–on–the-Blood.A dedicated concierge can help you make dinner reservations and arrange transportation to Koltsovo International Airport. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8728.704440618756!2d60.5918681!3d56.842923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbab2bed7ee6441bc!2sHyatt+Regency+Ekaterinburg!5e0!3m2!1sen!2sfr!4v1508342677804" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default YekaterinburgHotelLuxuryHotel1;
