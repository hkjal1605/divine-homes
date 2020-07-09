import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { compose } from 'redux';

import { selectIsCityListLoaded } from '../../redux/city/city.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CityList from './city-list.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCityListLoaded(state)
});

const CityListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CityList);

export default CityListContainer;