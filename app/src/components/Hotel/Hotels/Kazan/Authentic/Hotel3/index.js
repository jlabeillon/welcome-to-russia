// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KazanHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tatarskaya Usadba</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Stay in the heart of Kazan – Excellent location - show map

            One of our top picks in Kazan.

            Located a 2-minute walk from Al-Mardzhani Mosque on the bank of Nizhny Kaban Lake in Kazan, Tatarskaya Usadba offers free WiFi.

            All rooms are air conditioned and come with cable TV and a minibar. A private bathroom includes free toiletries.

            Guests can dine in the hotel’s own restaurant that features traditional Tatar dishes baked in an old Bulgarian wood oven. The local vinotheque provides a variety of wine types.

            A gallery of folk craft with local crafted goods is available on site.

            Kol Sharif Mosque and Kazan Kremlin are 2 km from the property. Kazan Train Station is 1.5 km away, and Kazan International Airport is 25 km from Tatarskaya Usadba. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8974.800331326098!2d49.1170049!3d55.7810806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9fd4f63f4daf7fd!2sTatarskaya+Usadba!5e0!3m2!1sen!2sfr!4v1508405965238"  width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KazanHotelAuthenticHotel3;
