// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const KazanHotelEcoHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Berison Moskovskaya</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Berison Moskovskaya is located in the centre of Kazan, on the bank of Lake Kaban. The Kazan Kremlin is 2 km away. Free WiFi access is available. Each room here will provide you with air conditioning and cable TV. Featuring a shower, private bathroom also comes with free toiletries. At Berison Moskovskaya you will find a 24-hour front desk. A variety of cafés and restaurants can be found within a 5-minute walk of the hotel. Ploshchad Tukaya Metro Station is 500 m away. Kazan Central Train Station is 1.5 km from the hotel, and Kazan International Airport is 25 km away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8974.231743059525!2d49.1151001!3d55.7835492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2ee85020f8083f6!2sBerison+Moskovskaya!5e0!3m2!1sen!2sfr!4v1508406159214" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default KazanHotelEcoHotel1;
