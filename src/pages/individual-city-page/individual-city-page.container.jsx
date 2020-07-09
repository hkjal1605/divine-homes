import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux';

import { selectIsHouseListLoaded } from '../../redux/house/house.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import IndividualCityPage from './individual-city-page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsHouseListLoaded(state)
});

const IndividualCityPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(IndividualCityPage);

export default IndividualCityPageContainer;