// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="https://moscow.park.hyatt.com/en/hotel/home.html" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Four Seasons Hotel Moscow</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Four Seasons Hotel Moscow is located in the historic building of Moskva Hotel, in the very heart of Moscow, a minutes’ walk from the Kremlin, Red Square and the Bolshoi Theatre. Free WiFi access is available in this hotel.

            Each elegant room and suite will provide you with air conditioning, a flat-screen TV, a Nespresso coffee machine and an Ipad. Featuring a bath, private bathroom also comes with a hairdryer and free toiletries by Roberto Cavalli. Extras include a desk and a safety deposit box.

            Quadrum Restaurant serves Italian cuisine, and Bystro offers Russian dishes with a Nordic touch. Guests can enjoy a drink at The Silk Lounge or Moskovsky Bar. Other facilities offered at the property include meeting facilities, a ticket service and luggage storage.</p>

            <section className="get-in-touch col-xs-6">
             <h1 className="title">Contact the hotel</h1>
             <form className="contact-form row" action="/email-sended">
                <div className="form-field col x-50">
                   <input id="name" className="input-text js-input" type="text" required />
                   <label className="label" for="name">Name</label>
                </div>
                <div className="form-field col x-50">
                   <input id="email" className="input-text js-input" type="email" required />
                   <label className="label" for="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                   <input id="message" className="input-text js-input" type="text" required />
                   <label className="label" for="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                   <input className="submit-btn" type="submit" value="Submit" />
                </div>
             </form>
            </section>

            <div className="col-xs-6 map-hotel">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8980.407378262926!2d37.616331!3d55.756733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2e6252d508b9705!2sFour+Seasons+Hotel+Moscow!5e0!3m2!1sen!2sfr!4v1508329211383" width="450" height="300" frameBorder="0"></iframe>
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelLuxuryHotel3;
