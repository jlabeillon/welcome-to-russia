// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const YekaterinburgHotelAuthenticHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Renomme</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Featuring a sauna and fitness centre, Hotel Renomme is located in Yekaterinburg, right by Geologicheskaya Metro Station. The pedestrian Vaynera Street is within a 5-minute walk. Free WiFi and free private parking are provided. The air-conditioned rooms are decorated in bright colours and feature a flat-screen TV with cable channels. The bathroom comes with a hairdryer and free toiletries. At Hotel Renomme you will find a 24-hour front desk and Mélange cafe, serving pastry and deserts as well as Kryushon Restaurant, offering provincial cuisine. Other facilities offered at the property include a shared lounge, luggage storage and an ironing service.</p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8732.297086990013!2d60.601777!3d56.827515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x483e10e3d1fade52!2sRenome!5e0!3m2!1sen!2sfr!4v1508400770367" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default YekaterinburgHotelAuthenticHotel3;
