// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Restaurants extends React.Component {
    // Props validation
    static propTypes = {
      state: PropTypes.object.isRequired,
      restaurant1: PropTypes.object.isRequired,
      restaurant2: PropTypes.object.isRequired,
      restaurant3: PropTypes.object.isRequired,
      actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    }
    // Lifecycle
    componentWillMount() {
      if (this.props.state.cityRestaurant === 'moscow') {
        this.props.actions.loadMoscow();
      }
      if (this.props.state.cityRestaurant === 'petersbourg') {
        this.props.actions.loadPetersbourg();
      }
      if (this.props.state.cityRestaurant === 'yekaterinburg') {
        this.props.actions.loadYekaterinburg();
      }
      if (this.props.state.cityRestaurant === 'sochi') {
        this.props.actions.loadSochi();
      }
      if (this.props.state.cityRestaurant === 'kazan') {
        this.props.actions.loadKazan();
      }
      if (this.props.state.cityRestaurant === 'volgograd') {
        this.props.actions.loadVolgograd();
      }
      if (this.props.state.cityRestaurant === 'saransk') {
        this.props.actions.loadSaransk();
      }
      if (this.props.state.cityRestaurant === 'samara') {
        this.props.actions.loadSamara();
      }
      if (this.props.state.cityRestaurant === 'rostov') {
        this.props.actions.loadRostov();
      }
      if (this.props.state.cityRestaurant === 'kaliningrad') {
        this.props.actions.loadKaliningrad();
      }
      if (this.props.state.cityRestaurant === 'novgorod') {
        this.props.actions.loadNovgorod();
      }
    }

    render() {
      return (
        <div className="container" id="hotels-body">
          <Header />
          <div id="restaurants">
            <div className="row">
              <div className="col-xs-12 restaurant-description">

                { this.props.state.cityRestaurant === 'Moscow' ?
                  <img className="restaurants-image" alt="pushkin" src="/images/restaurants/Moscow/moscow-pushkin.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saint Petersburg' ?
                  <img className="restaurants-image" alt="percorso" src="/images/restaurants/Petersbourg/petersbourg-percorso.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Yekaterinburg' ?
                  <img className="restaurants-image" alt="pashtet" src="/images/restaurants/Yekaterinburg/yekaterinburg-pashtet.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Sochi' ?
                  <img className="restaurants-image" alt="trikoni" src="/images/restaurants/Sochi/sochi-trikoni.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kazan' ?
                  <img className="restaurants-image" alt="usadba" src="/images/restaurants/Kazan/kazan-usadba.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Volgograd' ?
                  <img className="restaurants-image" alt="dvor" src="/images/restaurants/Volgograd/volgograd-dvor.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saransk' ?
                  <img className="restaurants-image" alt="podvorye" src="/images/restaurants/Saransk/saransk-podvorye.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Samara' ?
                  <img className="restaurants-image" alt="kvartira" src="/images/restaurants/Samara/samara-kvartira.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Rostov' ?
                  <img className="restaurants-image" alt="smetana" src="/images/restaurants/Rostov/rostov-smetana.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kaliningrad' ?
                  <img className="restaurants-image" alt="salo" src="/images/restaurants/Kaliningrad/kaliningrad-salo.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Nizhny Novgorod' ?
                  <img className="restaurants-image" alt="testo" src="/images/restaurants/Novgorod/novgorod-testo.jpg" />
                  : ''
                }

                <p className="restaurants-name">{this.props.restaurant1.name}</p>
                <p>Cuisine: {this.props.restaurant1.cuisine}</p>
                <p>Good For: {this.props.restaurant1.goodfor}</p>
                <p>Price: {this.props.restaurant1.price}</p>
                <p>Adress: {this.props.restaurant1.adress}</p>
                <p><i className="fa fa-phone" aria-hidden="true" /> {this.props.restaurant1.phone}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 restaurant-description">

                { this.props.state.cityRestaurant === 'Moscow' ?
                  <img className="restaurants-image" alt="crab" src="/images/restaurants/Moscow/moscow-wine-crab.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saint Petersburg' ?
                  <img className="restaurants-image" alt="severyanin" src="/images/restaurants/Petersbourg/petersbourg-severyanin.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Yekaterinburg' ?
                  <img className="restaurants-image" alt="panorama" src="/images/restaurants/Yekaterinburg/yekaterinburg-panorama.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Sochi' ?
                  <img className="restaurants-image" alt="hudojestvenniy" src="/images/restaurants/Sochi/sochi-hudojestvenniy.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kazan' ?
                  <img className="restaurants-image" alt="malabar" src="/images/restaurants/Kazan/kazan-malabar.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Volgograd' ?
                  <img className="restaurants-image" alt="pub" src="/images/restaurants/Volgograd/volgograd-pub.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saransk' ?
                  <img className="restaurants-image" alt="kaban" src="/images/restaurants/Saransk/saransk-kaban.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Samara' ?
                  <img className="restaurants-image" alt="puri" src="/images/restaurants/Samara/samara-puri.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Rostov' ?
                  <img className="restaurants-image" alt="onegin" src="/images/restaurants/Rostov/rostov-onegin.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kaliningrad' ?
                  <img className="restaurants-image" alt="britanika" src="/images/restaurants/Kaliningrad/kaliningrad-britanika.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Nizhny Novgorod' ?
                  <img className="restaurants-image" alt="biblioteka" src="/images/restaurants/Novgorod/novgorod-biblioteka.jpg" />
                  : ''
                }

                <p className="restaurants-name">{this.props.restaurant2.name}</p>
                <p>Cuisine: {this.props.restaurant2.cuisine}</p>
                <p>Good For: {this.props.restaurant2.goodfor}</p>
                <p>Price: {this.props.restaurant2.price}</p>
                <p>Adress: {this.props.restaurant2.adress}</p>
                <p><i className="fa fa-phone" aria-hidden="true" /> {this.props.restaurant2.phone}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 restaurant-description">

                { this.props.state.cityRestaurant === 'Moscow' ?
                  <img className="restaurants-image" alt="savva" src="/images/restaurants/Moscow/moscow-savva.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saint Petersburg' ?
                  <img className="restaurants-image" alt="pelmenya" src="/images/restaurants/Petersbourg/petersbourg-pelmenya.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Yekaterinburg' ?
                  <img className="restaurants-image" alt="ratatuy" src="/images/restaurants/Yekaterinburg/yekaterinburg-ratatuy.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Sochi' ?
                  <img className="restaurants-image" alt="olivye" src="/images/restaurants/Sochi/sochi-olivye.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kazan' ?
                  <img className="restaurants-image" alt="top" src="/images/restaurants/Kazan/kazan-top.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Volgograd' ?
                  <img className="restaurants-image" alt="nosorog" src="/images/restaurants/Volgograd/volgograd-nosorog.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Saransk' ?
                  <img className="restaurants-image" alt="baron" src="/images/restaurants/Saransk/saransk-baron.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Samara' ?
                  <img className="restaurants-image" alt="churchill" src="/images/restaurants/Samara/samara-churchill.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Rostov' ?
                  <img className="restaurants-image" alt="cow" src="/images/restaurants/Rostov/rostov-cow.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Kaliningrad' ?
                  <img className="restaurants-image" alt="zolter" src="/images/restaurants/Kaliningrad/kaliningrad-zotler.jpg" />
                  : ''
                }

                { this.props.state.cityRestaurant === 'Nizhny Novgorod' ?
                  <img className="restaurants-image" alt="posolstvo" src="/images/restaurants/Novgorod/novgorod-posolstvo.jpg" />
                  : ''
                }

                <p className="restaurants-name">{this.props.restaurant3.name}</p>
                <p>Cuisine: {this.props.restaurant3.cuisine}</p>
                <p>Good For: {this.props.restaurant3.goodfor}</p>
                <p>Price: {this.props.restaurant3.price}</p>
                <p>Adress: {this.props.restaurant3.adress}</p>
                <p><i className="fa fa-phone" aria-hidden="true" /> {this.props.restaurant3.phone}</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
}

// Export
export default Restaurants;
