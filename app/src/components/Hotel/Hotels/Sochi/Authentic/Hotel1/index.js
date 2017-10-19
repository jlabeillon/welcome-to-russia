// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Villa Anna </h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.

            Each room is simply furnished and includes air conditioning and a minibar. Satellite TV and a dressing room are also available in several rooms at Villa Anna.

            Good Merlin restaurant serves European and Caucasian cuisine in a chateau-style atmosphere. During the summer, Chateau Compound café offers drinks and refreshments surrounded by palm trees and banana groves.

            Guests can relax with a massage treatment and enjoy a game of table tennis and bowling. Villa Anna’s front desk is open 24 hours. Guests have access to a private beach at a nearby hotel which is 10 minutes’ walk away.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.7409276807334!2d39.73708561549507!3d43.57028117912422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f5c99c24a76e87%3A0x69ae9b09f613fc3e!2sKurortnyy+pr.%2C+72%2C+Sochi%2C+Krasnodarskiy+kray%2C+Russia%2C+354002!5e0!3m2!1sen!2sfr!4v1508401887175" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelAuthenticHotel1;
