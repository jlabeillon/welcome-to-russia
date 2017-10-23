// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelLuxuryHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Belmond Grand Hotel Europe</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Set in a stunning central location of St. Petersburg is this grand hotel that offers elegant accommodation in a fantastic setting. Belmond Grand Hotel Europe provides luxurious living in rooms that are gracefully designed and equipped with all modern facilities you require. Satellite TV and minibar are offered in air-conditioned rooms. The private bathroom is fitted with bathrobes, slippers, hairdryer and free toiletries. To ensure a stress free stay, the property offers concierge service, tour desk and ticket service. Cash machine can be found on site. There are many nearby theatres, museums and attractions including the Arts Square, the Admiralty, and the Tsar’s former Winter Palace. Alternatively, there are a wide variety of shops, bars and cafés along the well known Nevsky Avenue to pass enjoyable moments. After a day’s exploration, return to Belmond Grand Hotel Europe and select one of the 6 restaurants and/or cafés for delightful cuisines and refreshing drinks. The friendly and helpful staff provides 24-hour assistance, making sure your stay is as hassle-free and as pleasant as possible.</p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7995.192961194622!2d30.330477!3d59.93549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b908d832cb0bab3!2sBelmond+Grand+Hotel+Europe!5e0!3m2!1sen!2sfr!4v1508340170856" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelLuxuryHotel3;
