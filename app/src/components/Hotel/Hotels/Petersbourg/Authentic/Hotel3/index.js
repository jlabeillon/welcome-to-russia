// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const PetersbourgHotelAuthenticHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">The State Hermitage Museum Official Hotel </h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">This exclusive 5-star hotel is set in the 1830s mansion in the centre of Saint Petersburg and represents the atmosphere of the original Hermitage Museum. Spa and wellness centre and free Wi-Fi is featured here. The luxurious rooms and suites of The State Hermitage Museum Official Hotel Saint Petersburg offer elegant furnishings, designed by Italian woodwork masters from Florence. Every room includes a flat-screen TV, a minibar and a private bathroom decorated with Italian and Greek marble and fitted with bathrobes. Michelangelo Boutique Restaurant offers traditional Italian dishes and exquisite desserts. The quiet Lobby Bar welcomes guests to the tradition of Russian pastime of tea drinking. The elegant Catherine the Great Restaurant serves Russian cuisine based on the menu of the historic Winter Palace. The lively Nevsky Prospekt is a 15-minute walk away, and the Hermitage Museum itself is 3 km from the hotel. Vladimirskaya Metro Station is a 7-minute walk from The State Hermitage Museum Official Hotel Saint Petersburg. Moskovsky Train Station is 1.8 km away, and Pulkovo International Airport is 22 km from the hotel. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7998.146721470508!2d30.3437091!3d59.9232364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3290d7a4998d92f!2sThe+State+Hermitage+Museum+Official+Hotel!5e0!3m2!1sen!2sfr!4v1508341731968" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default PetersbourgHotelAuthenticHotel3;
