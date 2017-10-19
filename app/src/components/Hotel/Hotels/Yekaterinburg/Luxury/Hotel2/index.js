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
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Vysotsky Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Vysotsky Hotel is located on the 39th floor of a business centre in Yekaterinburg, within a 15-minute walk of Ploshchad 1905 Goda Metro Station. Wi-Fi access in all areas and private on-site parking are available free of charge.

            The luxurious air-conditioned rooms feature a minibar and a flat-screen TV with cable channels. The private bathroom comes with a hairdryer and free toiletries.

            The hotel’s à la carte restaurant serves dishes of European and Japanese cuisine and the bar offers a variety of drinks.

            At Vysotsky Hotel you can visit a nightclub and play billiards or bowling with friends. After a busy day, guests can relax in the hotel’s sauna or visit the spa and wellness centre with an indoor pool. </p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8730.324567260439!2d60.614521!3d56.835975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4fc8afde660657f!2shotel+Vysotsky!5e0!3m2!1sen!2sfr!4v1508342914390" width="450" height="300" frameBorder="0" />
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
