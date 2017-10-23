// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const YekaterinburgHotelEcoHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Bolshoy Ural na Malysheva Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Situated in Yekaterinburg, 400 m from the central stadium and Cathedral of St. John the Baptist, Bolshoy Ural na Malysheva Hotel features air-conditioned rooms with free WiFi. Free private parking is available on site.  A flat-screen TV with cable channels, as well as a computer are available. Certain units feature a seating area where you can relax. Certain rooms include views of the garden or city. You will find shops at the property. There is also a lounge area and conference rooms at the property. Yekaterinburg Train Station is a 12-minute tram ride away. Yekaterinburg city centre is a 5-minute drive away. Koltsovo International Airport is 17 km away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.9251731112913!2d60.579304315972706!3d56.83007298085514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ef9fcb14723%3A0xcd4ba6b4d260e83b!2sul.+Malysheva%2C+2%D0%95%2C+Yekaterinburg%2C+Sverdlovskaya+oblast&#39;%2C+Russia%2C+620014!5e0!3m2!1sen!2sfr!4v1508400951802" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default YekaterinburgHotelEcoHotel1;
