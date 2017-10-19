// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Pullman Sochi Centre Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.

            The luxurious rooms are equipped with a king size bed, a flat-screen TV and a balcony. Complete with a fridge and minibar, the dining area also has tea & coffee facilities. Featuring a rain shower, private bathroom comes with a hairdryer and C.O. Bigelow toiletries. Some rooms have a sea view. There are also a working area, safety deposit box and laptop safe.

            Sel Marin Restaurant serves Mediterranean cuisine, and a variety of drinks is offered at the lobby bar.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11561.608197908354!2d39.7246448!3d43.5773413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29040b112a07b5de!2sHotel+Pullman+Sochi+Centre!5e0!3m2!1sen!2sfr!4v1508401433757" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelLuxuryHotel1;
