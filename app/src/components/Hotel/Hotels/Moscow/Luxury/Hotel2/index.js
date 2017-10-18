// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="https://moscow.park.hyatt.com/en/hotel/home.html" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">The St. Regis Moscow Nikolskaya</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This hotel offers a central location in the heart of Moscow, right on Lubyanka Square, a 10-minute walk from the Kremlin. Rooms with free personalised St. Regis Butler Service and free WiFi are featured at St. Regis Moscow Nikolskaya.

            The elegant, air-conditioned hotel rooms and suites are decorated in beige and brown colours. Every room comes complete with a flat-screen TV, a minibar, a seating area and a private bathroom with bathrobes and slippers. Some rooms feature views of the Kremlin and Red Square, while others have balconies with views of the interior courtyard.

            Breakfasts are served in the Italian A Tavola Restaurant. Guests can also have Russian snacks and dishes from the Wok menu at Orlov Lobby Bar and Lounge, as well as enjoy evening champagne.

            Lubyanka Metro Station is only steps away. Belorussky Train Station is 4 km from St. Regis Moscow Nikolskaya, and Sheremetyevo International Airport is a 35-minute express train ride from this station. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8979.89774093231!2d37.6255241!3d55.7589463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac775e42462619a5!2sThe+St.+Regis+Moscow+Nikolskaya!5e0!3m2!1sen!2sfr!4v1508328564489" width="450" height="300" frameBorder="0"></iframe>
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelLuxuryHotel2;
