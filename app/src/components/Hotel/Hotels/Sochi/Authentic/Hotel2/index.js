// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Chebotarev Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.

            Rooms at Chebotaryov Hotel are cosy, air conditioned, with fully equipped bathrooms and refrigerators. All rooms provide bathrobes and slippers and balconies with views of the swimming pool and surrounding area.

            Chebotaryov guests can relax with a massage or take a spa bath. Play a round of billiards by the bar or take a swim in the outdoor pool. For your convenience, the hotel provides airport shuttle, babysitting and ironing services as well as 24 hour assistance.

            There is much to discover around the area. Head to the beaches, lakes, or rivers of Sochi or go mountain climbing. Chebotaryov’s staff are happy to arrange excursions or offer suggestions of what to see and do. There are also theatres, concert halls and museums boasting Sochis rich culture.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11557.578400886014!2d39.7169767!3d43.5983249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x156ed7025039d801!2sChebotarev!5e0!3m2!1sen!2sfr!4v1508402061838"  width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelAuthenticHotel2;
