// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const YekaterinburgHotelEcoHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Lhouse Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Lhouse Hotel is located in Yekaterinburg, 4 km from the city centre. It offers en suite accommodation, a quiet private yard and free WiFi. Free public parking is possible on site. All the rooms at Lhouse Hotel features a TV, tea/coffee making facilities and a refrigerator. Each room benefits from an en suite shower room with free toiletries. At Lhouse Hotel you will find a communal sauna and a bar. Other facilities offered at the property include laundry facilities. The inn is 2.1 km from Trinity Cathedral, 3 km from Big Zlatoust and 3.4 km from State Academic Opera and Ballet. Koltsovo International Airport is 13 km away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2184.416877993813!2d60.61964531597164!3d56.80447748084764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ecc255558bf%3A0x120e8239ce39935c!2sul.+Chaykovskogo%2C+Yekaterinburg%2C+Sverdlovskaya+oblast&#39;%2C+Russia%2C+620130!5e0!3m2!1sen!2sfr!4v1508401299580" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default YekaterinburgHotelEcoHotel3;
