// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Restaurant from 'src/components/Restaurant/Restaurants';
import { loadMoscow, loadPetersbourg, loadYekaterinburg, loadSochi, loadKazan, loadVolgograd, loadSaransk, loadSamara, loadRostov, loadKaliningrad, loadNovgorod } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  restaurantName1: state.restaurantName1,
  restaurantName2: state.restaurantName2,
  restaurantName3: state.restaurantName3,
  restaurantAdress1: state.restaurantAdress1,
  restaurantAdress2: state.restaurantAdress2,
  restaurantAdress3: state.restaurantAdress3,
  restaurantCuisine1: state.restaurantCuisine1,
  restaurantCuisine2: state.restaurantCuisine2,
  restaurantCuisine3: state.restaurantCuisine3,
  restaurantGood1: state.restaurantGood1,
  restaurantGood2: state.restaurantGood2,
  restaurantGood3: state.restaurantGood3,
  restaurantPhone1: state.restaurantPhone1,
  restaurantPhone2: state.restaurantPhone2,
  restaurantPhone3: state.restaurantPhone3,
  restaurantPrice1: state.restaurantPrice1,
  restaurantPrice2: state.restaurantPrice2,
  restaurantPrice3: state.restaurantPrice3,
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadMoscow, loadPetersbourg, loadYekaterinburg, loadSochi, loadKazan, loadVolgograd, loadSaransk, loadSamara, loadRostov, loadKaliningrad, loadNovgorod }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Restaurant);

// Export Default
export default withRouter(AppContainer);
