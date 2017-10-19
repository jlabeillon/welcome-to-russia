// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Sochi from 'src/components/City/Cities/Sochi';
import { loadSochi } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  cityName: state.cityName,
  cityDesc: state.cityDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadSochi }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Sochi);

// Export Default
export default withRouter(AppContainer);
