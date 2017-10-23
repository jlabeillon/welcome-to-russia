// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelAuthenticHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Radisson Royal Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">This luxury hotel is situated at the intersection of Moscow’s Kutuzovskiy Prospekt and Novy Arbat and occupies a Stalinist skyscraper. It offers free Wi-Fi, an indoor pool and modern spa facilities. Rooms at Radisson Royal Hotel offer stylish décor and classic-style furniture, offering a flat-screen TV and views of the city or inner courtyard. All rooms have high ceilings, and some have a separate seating area. 11 restaurants of the Radisson Royal are known for their unique cuisine, original cocktails and panoramic views of Moscow. Breakfast, served at Veranda Restaurant, offers a variety of dining options. Guests can enjoy evening cocktails and light snacks at the Radisson’s 24-hour Lobby Bar and Club restaurant. After working out in the gym, visitors can relax in the sauna or in the spa bath. Massage services can also be booked. River boat trips along the Moskva River are available all year round.</p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3877828946584!2d37.5666978310056!3d55.75176559073101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bc92c3a5d6b%3A0x2b93f3fd18df302d!2sKutuzovskiy+pr.%2C+2%2F1%2C+Moskva%2C+Russia%2C+121248!5e0!3m2!1sen!2sfr!4v1508335998416" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelAuthenticHotel2;
