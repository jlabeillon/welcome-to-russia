// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class EmailSended extends React.Component {
  render() {
    return (

      <div className="container">
          <Header />
          <h1 id="email-message">Your message has been sent! The hotel will contact you as soon as possible </h1>
      </div>
    );

  };
}

// Export
export default EmailSended;
