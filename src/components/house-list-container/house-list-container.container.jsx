import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux';

import { selectIsHouseListLoaded } from '../../redux/house/house.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import HouseList from './house-list-container.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsHouseListLoaded(state)
});

const HouseListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(HouseList);

export default HouseListContainer;