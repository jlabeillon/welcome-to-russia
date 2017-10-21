// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Restaurant from 'src/components/Restaurant/Restaurants';
import { loadMoscow, loadPetersbourg, loadYekaterinburg, loadSochi, loadKazan, loadVolgograd, loadSaransk, loadSamara, loadRostov, loadKaliningrad, loadNovgorod } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  state,
  restaurant1: state.restaurant1,
  restaurant2: state.restaurant2,
  restaurant3: state.restaurant3,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadMoscow, loadPetersbourg, loadYekaterinburg, loadSochi, loadKazan, loadVolgograd, loadSaransk, loadSamara, loadRostov, loadKaliningrad, loadNovgorod }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Restaurant);

// Export Default
export default withRouter(AppContainer);
