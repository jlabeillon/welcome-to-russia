// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KazanHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Don Kikhot Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Offering a fitness centre, Don Kikhot Hotel is located in the centre of Kazan, just a 5-minute walk from Kazan Central Train Station and a 15-minute walk from the Kremlin. Free WiFi access is available.

            Each elegant room here will provide you with a flat-screen TV, air conditioning and a minibar. Featuring a hairdryer, private bathroom also comes with free toiletries and slippers. Extras include cable channels.

            At Don Kikhot Hotel you will find a 24-hour front desk. The on-site restaurant serves Tatar, Russian and Spanish cuisine. The property offers free parking.

            Kazan International Airport is a 30-minute drive away. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8973.350405234289!2d49.1049832!3d55.7873755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9d4e2478fad1342!2sDon+Quixote!5e0!3m2!1sen!2sfr!4v1508405645413" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KazanHotelAuthenticHotel1;
