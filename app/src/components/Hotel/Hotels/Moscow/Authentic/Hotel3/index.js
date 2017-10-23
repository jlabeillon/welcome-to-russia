// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelAuthenticHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Ivan Chai - hotel and coffee </h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description"> One of our bestsellers in Moscow! Featuring free WiFi throughout the property, Ivan Chai - hotel and coffee offers accommodation in Moscow. All rooms are equipped with a private bathroom. Extras include free toiletries and a hairdryer. You will find a 24-hour front desk at the property. The hotel also offers free use of bicycles. Gorky Park is 6 km from Ivan Chai - hotel and coffee, while Luzhniki Stadium is 7 km away. The nearest airport is Vnukovo International Airport, 24 km from Ivan Chai - hotel and coffee. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8997.379088927502!2d37.6444448!3d55.6829934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc09408791ad22a31!2sIvan+Chai+-+hotel+and+coffee!5e0!3m2!1sen!2sfr!4v1508336206710" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelAuthenticHotel3;
