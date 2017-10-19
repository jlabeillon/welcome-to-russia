// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class KazanHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Spa Complex Premium Luciano</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.

            Spa Complex Premium Luciano offers air-conditioned rooms with a flat-screen TV, free WiFi, safe, free minibar and bathrobes, free toiletries and slippers in the bathroom. They feature a peaceful green colour scheme, soft lighting and wooden floors. Guests are granted unlimited access to the spa and fitness centre.

            Italian and European cuisine is offered at 2 Luciano’s restaurants, where a continental breakfast is also provided. After dinner, guests can relax in 3 stylish bars or play billiards.

            The luxurious wellness area includes a spa bath and Turkish steam room. A range of beauty treatments and massages are available in the hotel’s beauty salon and spa centre.</p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8973.406977162509!2d49.1175269!3d55.7871299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66e7e8bd117f9566!2sSpa+Complex+Premium+Luciano!5e0!3m2!1sen!2sfr!4v1508405526310" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default KazanHotelLuxuryHotel3;
