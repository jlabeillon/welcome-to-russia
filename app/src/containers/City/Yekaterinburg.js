// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Yekaterinburg from 'src/components/City/Cities/Yekaterinburg';
import { loadYekaterinburg } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  cityName: state.cityName,
  cityDesc: state.cityDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadYekaterinburg }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Yekaterinburg);

// Export Default
export default withRouter(AppContainer);
