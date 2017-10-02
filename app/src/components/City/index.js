// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

// Code

class City extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="logo-russia" src="" alt="logo-russia" />
            <a href="#" className="nav-left">Moscow stadium</a>
            <a href="#" className="nav-left">Moscow transportation</a>
            <a href="#" className="nav-left">Moscow hotels</a>
            <a href="#" className="nav-left">Moscow restaurants</a>
          </div>
          <div className="col-9">
            <span>Nav component</span>
            <h1 className="city-name">Moscow</h1>
            <span>Sliders component</span>
            <p className="city-description">City discrition</p>
          </div>
        </div>
      </div>
    );
  };
}
// Export
export default City;
