// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class MoscowHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Izmailovo Beta Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Set near the Izmailovsky Park, within a 3-minute walk of Partizanskaya Metro Station, Izmailovo Beta Hotel features free WiFi, banquet and meeting facilities and a variety of dining options. It is located within a 15-minute metro ride from the city centre.

            The restaurant serves a selection of traditional Russian and European dishes. At the lobby café, fresh pastry from the hotel’s bakery is offered. Guests can enjoy a drink in one of the on-site bars or order room service.

            The modern rooms have a TV and a private bathroom with a hairdryer. The hotel offers a business centre and 11 conference halls with a capacity from 10 to 700 guests.

            Lokomotiv Stadium is within a 10-minute drive of Izmailovo Beta Hotel and Kursky Train Station is 4 metro stops away. Kazansky, Leningradsky and Yaroslavsky Train Stations are within a 23-minute drive. Domodedovo International Airport is 57 km from the property. It takes 30 minutes to drive to Belorussky Train Station from which you can get to Sheremetyevo International Airport by Aeroexpress.  </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8972.848137867983!2d37.74765!3d55.789556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb04967abb1e3fa10!2sIzmailovo+Beta+Hotel!5e0!3m2!1sen!2sfr!4v1508337145076" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default MoscowHotelEcoHotel3;
