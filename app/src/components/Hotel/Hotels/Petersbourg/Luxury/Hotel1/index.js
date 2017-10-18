// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Four Seasons Hotel Lion Palace St. Petersburg </h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Four Seasons Hotel Lion Palace is located in the heart of Saint Petersburg, just 300 m from the Dvortsovaya Square. It boasts luxury interiors in Russian Empire style and exclusive fine dining options.

            All elegant, air conditioned rooms come with a flat-screen TV, a DVD player, a minibar and a coffee machine. Free Wi-Fi and 2 telephone lines are provided. Marble bathrooms are fitted with a soak bath tub, separated walk-in tropical shower and built-in mirror flat-screen TV. The free toiletries are by Lorenzo Villoresi.

            Percorso Restaurant specializes in fine Italian cuisine, while Sintoho Restaurant offers contemporary Asian dishes. Guests can have a drink at the stylish Xander Bar or enjoy delicious snacks and pastry at the Tea Lounge. The exquisite breakfast is served there every morning.

            The Hermitage Museum is 3 minutes’ walk from Four Seasons Hotel Lion Palace, and the lively Nevsky Prospekt is 400 m away. The Mariinsky Theatre is within a 15-minute walk of the hotel.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7995.255180602068!2d30.3073733!3d59.9352319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x522c38df3227ecf0!2sFour+Seasons+Hotel+Lion+Palace+St.+Petersburg!5e0!3m2!1sen!2sfr!4v1508339042731" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelLuxuryHotel1;
