// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Saransk from 'src/components/City/Cities/Saransk';
import { loadSaransk } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  cityName: state.cityName,
  cityDesc: state.cityDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadSaransk }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Saransk);

// Export Default
export default withRouter(AppContainer);
