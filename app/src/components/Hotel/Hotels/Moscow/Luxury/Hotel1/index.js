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
            <a href="https://moscow.park.hyatt.com/en/hotel/home.html" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ararat Park Hyatt</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Ararat Park Hyatt has an excellent location 5 minutes from Red Square in the prime shopping area, moments from both TSUM and Detsky Mir department stores. It features superb service.

            The hotel rooms have been renovated in 2012 and feature new design by a famous architect Tony Chi.

            Energize at the fitness centre. Rejuvenate at the spa and Turkish bath. Pamper yourself at the solarium, or with a massage in one of the treatment rooms. Have a drink at the juice bar and a dip in the pool.

            When going out, ask for advice at the tours and tickets desk. Take a tasty packed lunch, and use the handy ATM. Return to write about the trip with the free Wi-Fi internet access, or to relax on the terrace.

            Enjoy European cuisine and speciality Armenian food, or the flavours at the Japanese sushi bar. The Café features marble columns and carvings, while the rooftop lounge offers stunning views over a drink.  </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8979.677445800646!2d37.621754!3d55.759903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x917c9835c8056849!2sArarat+Park+Hyatt+Moscow!5e0!3m2!1sen!2sfr!4v1508323671981" width="450" height="300" frameBorder="0" />
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
