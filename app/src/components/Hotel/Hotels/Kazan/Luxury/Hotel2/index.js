// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KazanHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
          <h1 id="city-name">Shalyapin Palace Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street.

            The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.

            Every morning a rich buffet breakfast is servied in the on-site restaurant. Guests can also enjoy delicious Tatar and Russian cuisine in the Capella Restaurant, which also serves a range of European dishes. The Shalyapins Piano Bar is open 24-hours.

            All guests of the Shalyapin Palace receive complimentary access to the fitness centre with its indoor swimming pool, gym and sauna. The hotel offers business meeting facilities of different capacity. There is also an on site car parking, available upon request to hotel guests.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8973.239886797859!2d49.1194466!3d55.7878553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e9708b416375c8e!2sShalyapin+Palace+Hotel!5e0!3m2!1sen!2sfr!4v1508405392226" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KazanHotelLuxuryHotel2;
