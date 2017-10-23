// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelEcoHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">People Business Novinsky Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">One of our top picks in Moscow. Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi. Set in a historic building with a grand façade and private yard, the hotel offers simply decorated rooms. Guests have use of a lounge with a flat-screen TV. Public computers with free internet access are also available. PEOPLE Business Novinsky Hotel offers a 24-hour front desk, where guests can book a wide variety of tours in and around Moscow. Help with visas and registration is also provided. Smolenskaya Metro Station (500 m) offers direct connections to Moscow’s city centre and all Moscow train stations. The American Embassy is a 2-minute walk away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8981.166386762938!2d37.5820478!3d55.7534366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb58f9277172a2879!2sPEOPLE+Business+Novinsky+Hotel!5e0!3m2!1sen!2sfr!4v1508336556708" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelEcoHotel1;
