// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Rostov from 'src/components/City/Cities/Rostov';
import { loadRostov } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  cityName: state.cityName,
  cityDesc: state.cityDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadRostov }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Rostov);

// Export Default
export default withRouter(AppContainer);
