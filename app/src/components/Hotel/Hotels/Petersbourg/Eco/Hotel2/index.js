// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Capital Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This hotel is located in the heart of Saint Petersburg, just a 4-minute walk from the Sennaya Square and Sadovaya Metro Station. Free Wi-Fi is featured at Capital Hotel.

            The bright hotel rooms offer warm-coloured interiors and classic-style decor. Every room comes with a cable flat-screen TV and a private bathroom. Slippers and free toiletries are provided.

            A microwave and a refrigerator are available at the hotel. A variety of cafes, shops and restaurants can be found within a 2-minute walk from the hotel.

            The Kazansky Cathedral and the lively Nevsky Prospekt are a 15-minute walk from the hotel. The Hermitage Museum and the Neva River Embankment are a 20-minute walk away.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.1884202763943!2d30.31947751609664!3d59.92901558187263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963101505d559f%3A0x1c2a0356c3071e6d!2sGorokhovaya+ul.%2C+34%2C+Sankt-Peterburg%2C+Russia%2C+190031!5e0!3m2!1sen!2sfr!4v1508342155637" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelEcoHotel2;
