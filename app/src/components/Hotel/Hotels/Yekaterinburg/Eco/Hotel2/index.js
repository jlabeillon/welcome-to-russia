// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class YekaterinburgHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Bolshoy Ural na Stachek Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Located 1.5 km from Mashinostroiteley Metro Station in Yekaterinburg, Bolshoy Ural na Stachek offers a 24-hour front desk and luggage storage. Yekaterinburg city centre is a 30-minute drive away.

            The rooms come with shared bathroom facilities on every floor.

            Guests are welcome to eat out at the on-site cafe and use laundry services. Free WiFi is available in the public areas.

            Yekaterinburg Train Station is a 15-minute drive away. Koltsovo International Airport is 25 km from Bolshoy Ural na Stachek. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8718.909596498746!2d60.632426!3d56.884917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef2478487c8e53a4!2sHotel+Atomstroykomplex!5e0!3m2!1sen!2sfr!4v1508401101491" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default YekaterinburgHotelEcoHotel2;
