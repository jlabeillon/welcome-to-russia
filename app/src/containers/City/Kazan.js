// Import
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Local import
import Kazan from 'src/components/City/Cities/Kazan';
import { loadKazan } from 'src/store/reducer';

// Code
const mapStateToProps = state => ({
  cityName: state.cityName,
  cityDesc: state.cityDesc,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadKazan }, dispatch),
});

// Component
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(Kazan);

// Export Default
export default withRouter(AppContainer);
