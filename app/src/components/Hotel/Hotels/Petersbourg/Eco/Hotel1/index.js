// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class PetersbourgHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Piter’s house na Nevskom</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Piter’s house na Nevskom is located in the Tsentralny district district in Saint Petersburg, 2.7 km from State Russian Museum.

            Each room has a flat-screen TV. Certain units feature a seating area for your convenience. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers, free toiletries and a hairdryer. Piters house na Nevskom features free WiFi throughout the property.

            Church of the Savior on Spilled Blood is 2.9 km from Piter’s house na Nevskom, while Palace Square is 3.5 km away. The nearest airport is Pulkovo Airport, 15 km from the property.  </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.2686658146722!2d30.372565316096566!3d59.9276839818722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631b921841889%3A0xb9db5dbf6e4c015!2sNevsky+pr.%2C+156%2C+Sankt-Peterburg%2C+Russia%2C+191024!5e0!3m2!1sen!2sfr!4v1508341932589"  width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default PetersbourgHotelEcoHotel1;
