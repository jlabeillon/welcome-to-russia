// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hyatt Regency Sochi</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.

            The modern, air-conditioned rooms include a flat-screen TV, a minibar and a balcony with sea view. Featuring a shower, private bathroom also comes with a bath and a hairdryer. Extras include an iPod dock, a seating area and satellite channels.

            Passage Restaurant serves a selection of European, Caucasian and Russian dishes. An access to the terrace is available in summer.

            A two-storey spa centre Evania offers traditional aromatherapy sessions, therapeutic treatment, various types of massage services and restorative practice. The hotel features a fitness centre and an outdoor swimming pool.

            Guests are invited to visit a private beach within a 3-minute walk away, free of charge. The beach is equipped with sunbeds, umbrellas and shower cabins. A children’s playground and lounge are also available at the beach.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11561.936776260647!2d39.726659!3d43.57563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd00bb3edbb426cf5!2sHyatt+Regency+Sochi!5e0!3m2!1sen!2sfr!4v1508401569662" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelLuxuryHotel2;
