// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelAuthenticHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Tchaikovsky Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Situated in Moscow, 1 km from Kremlin, Red Square and State Historical Museum, Tchaikovsky Hotel boasts air-conditioned rooms with free WiFi throughout the property. The hotel is located in the historical building. Guests can enjoy the on-site bar. Private parking is available on site. Each room has a flat-screen TV. Some rooms feature a seating area for your convenience. You will find a coffee machine in the room. For your comfort, you will find bathrobes, slippers and free toiletries. You will find a 24-hour front desk at the property. Russian and European cuisine is offered in the on’site restaurant. Banquet facilities are also offered. Arbat Street is 1 km from Tchaikovsky Hotel, while The Kremlin is 1.1 km away. The nearest airport is Sheremetyevo International Airport, 26 km from Tchaikovsky Hotel.  </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.075826430667!2d37.60004981593074!3d55.75718498055455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4ed83b89db%3A0x4957288e4a1d43c0!2sBolshaya+Nikitskaya+ul.%2C+24%2F1%D1%816%2C+Moskva%2C+Russia%2C+125009!5e0!3m2!1sen!2sfr!4v1508335474506" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelAuthenticHotel1;
