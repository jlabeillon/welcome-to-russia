// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tsvetnoy 5 Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property.

            Guests can enjoy the on-site bar.

            Each room at this hotel is air conditioned and is fitted with a TV. Rooms have a private bathroom. Free toiletries are provided.

            Central Market is 1.2 km from Tsvetnoy 5 Hotel, while Riviera Park is 1.5 km away. The nearest airport is Adler-Sochi International Airport, 31 km from the property. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11557.848445513617!2d39.7219!3d43.596919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55169818efebc824!2sTsvetnoy+5+Hotel!5e0!3m2!1sen!2sfr!4v1508402192354"  width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelAuthenticHotel3;
