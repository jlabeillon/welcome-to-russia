// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const YekaterinburgHotelAuthenticHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">R.E.D. Inn</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Featuring free WiFi throughout the property, R.E.D. Inn is located in Yekaterinburg, 400 m from Uralochka Sports Centre. Free private parking is available on site. Rooms are fitted with a flat-screen TV. All rooms are equipped with a shared bathroom. For your comfort, you will find bathrobes and slippers. There are shops at the property. The hotel also offers bike hire. Church of All Saints is 1 km from R.E.D. Inn, while Sevastyanov’s House is 1.4 km away. The nearest airport is Koltsovo International Airport, 17 km from R.E.D. Inn. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2181.7600498700135!2d60.59418481609471!3d56.85005961429792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e65a2bfa10f%3A0xef18b0d7c7d60a77!2sKrasnyy+per.%2C+5%2C+Yekaterinburg%2C+Sverdlovskaya+oblast&#39;%2C+Russia%2C+620027!5e0!3m2!1sen!2sfr!4v1508400325641" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default YekaterinburgHotelAuthenticHotel1;
