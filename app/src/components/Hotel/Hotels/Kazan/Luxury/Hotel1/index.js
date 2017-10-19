// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KazanHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">DoubleTree by Hilton Kazan City Center</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.

            All light and airy rooms offer air conditioning, an electric kettle, minibar, tea/coffee facilities and flat-screen TV with satellite channels. The bathrooms provide a hairdryer. For extra space and city views, select a suite with a separate living area and two bathrooms. Some rooms also offer views of the Saints Peter and Paul Cathedral.

            European, Russian and Tatar cuisines are served in the hotel’s restaurant. The restaurant also offers breakfast and 24-hour room service. At the end of the day unwind at the lobby bar with a wide selection of wine, whisky and cocktails. Business travellers will appreciate a meeting room for up to 60 guests.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8972.322706916973!2d49.1095362!3d55.791837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9050e900cb8d332f!2sDoubleTree+by+Hilton+Hotel+Kazan+City+Center!5e0!3m2!1sen!2sfr!4v1508405194790" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KazanHotelLuxuryHotel1;
