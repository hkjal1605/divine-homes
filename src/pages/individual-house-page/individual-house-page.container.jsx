import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux';

import { selectIsHouseListLoaded } from '../../redux/house/house.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import IndividualHousePage from './individual-house-page.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsHouseListLoaded(state)
});

const IndividualHousePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(IndividualHousePage);

export default IndividualHousePageContainer;