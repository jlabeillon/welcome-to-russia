// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Restaurants extends React.Component {

      componentWillMount() {
        if(this.props.state.cityRestaurant == "moscow") {
          this.props.actions.loadMoscow();
        }
        if(this.props.state.cityRestaurant == "petersbourg") {
          this.props.actions.loadPetersbourg();
        }
        if(this.props.state.cityRestaurant == "yekaterinburg") {
          this.props.actions.loadYekaterinburg();
        }
        if(this.props.state.cityRestaurant == "sochi") {
          this.props.actions.loadSochi();
        }
        if(this.props.state.cityRestaurant == "kazan") {
          this.props.actions.loadKazan();
        }
        if(this.props.state.cityRestaurant == "volgograd") {
          this.props.actions.loadVolgograd();
        }
        if(this.props.state.cityRestaurant == "saransk") {
          this.props.actions.loadSaransk();
        }
        if(this.props.state.cityRestaurant == "samara") {
          this.props.actions.loadSamara();
        }
        if(this.props.state.cityRestaurant == "rostov") {
          this.props.actions.loadRostov();
        }
        if(this.props.state.cityRestaurant == "kaliningrad") {
          this.props.actions.loadKaliningrad();
        }
        if(this.props.state.cityRestaurant == "novgorod") {
          this.props.actions.loadNovgorod();
        }
      }

  render() {
    return (
      <div className="container" id="hotels-body">

      {/* Header */}
        <Header />

          <h1 className="restaurants-city">Restaurants</h1>
          <div className="row">
            <div className="col-xs-12">

              { this.props.state.cityRestaurant == 'Moscow' ?
              <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-pushkin.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saint Petersburg' ?
              <img className="restaurants-image" src="/images/restaurants/Petersbourg/petersbourg-percorso.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Yekaterinburg' ?
              <img className="restaurants-image" src="/images/restaurants/Yekaterinburg/yekaterinburg-pashtet.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Sochi' ?
              <img className="restaurants-image" src="/images/restaurants/Sochi/sochi-trikoni.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Kazan' ?
              <img className="restaurants-image" src="/images/restaurants/Kazan/kazan-usadba.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Volgograd' ?
              <img className="restaurants-image" src="/images/restaurants/Volgograd/volgograd-dvor.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saransk' ?
              <img className="restaurants-image" src="/images/restaurants/Saransk/saransk-podvorye.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Samara' ?
              <img className="restaurants-image" src="/images/restaurants/Samara/samara-kvartira.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Rostov' ?
              <img className="restaurants-image" src="/images/restaurants/Rostov/rostov-smetana.jpg" />
              : ''
              }

              <p className="restaurants-name">{this.props.restaurantName1}</p>
              <p>Cuisine: {this.props.restaurantCuisine1}</p>
              <p>Good For: {this.props.restaurantGood1}</p>
              <p>Price: {this.props.restaurantPrice1}</p>
              <p>Adress: {this.props.restaurantAdress2}</p>
              <p>Phone: {this.props.restaurantPhone1}</p>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">

              { this.props.state.cityRestaurant == 'Moscow' ?
              <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-wine-crab.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saint Petersburg' ?
              <img className="restaurants-image" src="/images/restaurants/Petersbourg/petersbourg-severyanin.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Yekaterinburg' ?
              <img className="restaurants-image" src="/images/restaurants/Yekaterinburg/yekaterinburg-panorama.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Sochi' ?
              <img className="restaurants-image" src="/images/restaurants/Sochi/sochi-hudojestvenniy.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Kazan' ?
              <img className="restaurants-image" src="/images/restaurants/Kazan/kazan-malabar.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Volgograd' ?
              <img className="restaurants-image" src="/images/restaurants/Volgograd/volgograd-pub.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saransk' ?
              <img className="restaurants-image" src="/images/restaurants/Saransk/saransk-kaban.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Samara' ?
              <img className="restaurants-image" src="/images/restaurants/Samara/samara-puri.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Rostov' ?
              <img className="restaurants-image" src="/images/restaurants/Rostov/rostov-onegin.jpg" />
              : ''
              }

            <p className="restaurants-name">{this.props.restaurantName2}</p>
            <p>Cuisine: {this.props.restaurantCuisine2}</p>
            <p>Good For: {this.props.restaurantGood2}</p>
            <p>Price: {this.props.restaurantPrice1}</p>
            <p>Adress: {this.props.restaurantAdress2}</p>
            <p>Phone: {this.props.restaurantPhone2}</p>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">

              { this.props.state.cityRestaurant == 'Moscow' ?
              <img className="restaurants-image" src="/images/restaurants/Moscow/moscow-savva.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saint Petersburg' ?
              <img className="restaurants-image" src="/images/restaurants/Petersbourg/petersbourg-pelmenya.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Yekaterinburg' ?
              <img className="restaurants-image" src="/images/restaurants/Yekaterinburg/yekaterinburg-ratatuy.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Sochi' ?
              <img className="restaurants-image" src="/images/restaurants/Sochi/sochi-olivye.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Kazan' ?
              <img className="restaurants-image" src="/images/restaurants/Kazan/kazan-top.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Volgograd' ?
              <img className="restaurants-image" src="/images/restaurants/Volgograd/volgograd-nosorog.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Saransk' ?
              <img className="restaurants-image" src="/images/restaurants/Saransk/saransk-baron.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Samara' ?
              <img className="restaurants-image" src="/images/restaurants/Samara/samara-churchill.jpg" />
              : ''
              }

              { this.props.state.cityRestaurant == 'Rostov' ?
              <img className="restaurants-image" src="/images/restaurants/Rostov/rostov-cow.jpg" />
              : ''
              }

            <p className="restaurants-name">{this.props.restaurantName3}</p>
            <p>Cuisine: {this.props.restaurantCuisine3}</p>
            <p>Good For: {this.props.restaurantGood3}</p>
            <p>Price: {this.props.restaurantPrice1}</p>
            <p>Adress: {this.props.restaurantAdress3}</p>
            <p>Phone: {this.props.restaurantPhone3}</p>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default Restaurants;
